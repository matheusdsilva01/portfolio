import { NextResponse } from "next/server";

// Best-effort throttle per instance; a distributed limit requires an external store.
const attempts = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_ATTEMPTS = 5;
const MAX_TRACKED_IPS = 1000;

export async function POST(request: Request) {
  const webhookUrl = process.env.WEBHOOK_DISCORD_URL;

  if (!webhookUrl) {
    return NextResponse.json({ message: "Contact service unavailable" }, { status: 503 });
  }

  const forwardedFor = request.headers.get("x-vercel-forwarded-for") || request.headers.get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();

  if (attempts.size >= MAX_TRACKED_IPS) {
    attempts.forEach((attempt, key) => {
      if (attempt.resetAt <= now) attempts.delete(key);
    });
    if (attempts.size >= MAX_TRACKED_IPS) attempts.delete(attempts.keys().next().value as string);
  }

  const current = attempts.get(ip);

  if (current && current.resetAt > now && current.count >= MAX_ATTEMPTS) {
    return NextResponse.json({ message: "Too many requests" }, { status: 429 });
  }

  attempts.set(ip, current && current.resetAt > now
    ? { ...current, count: current.count + 1 }
    : { count: 1, resetAt: now + WINDOW_MS });

  let body: Record<string, unknown>;
  try {
    body = await request.json() as Record<string, unknown>;
  } catch {
    return NextResponse.json({ message: "Invalid message" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const website = typeof body.website === "string" ? body.website : "";

  if (website) return NextResponse.json({ message: "Ok" });

  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!name || name.length > 100 || !validEmail || email.length > 254 || !message || message.length > 1000) {
    return NextResponse.json({ message: "Invalid message" }, { status: 400 });
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        embeds: [{
          type: "rich",
          title: "Mensagem de contato via portfolio",
          color: 0x5eead4,
          fields: [
            { name: "Nome", value: name },
            { name: "Email", value: email },
            { name: "Mensagem", value: message }
          ]
        }]
      })
    });

    if (!response.ok) {
      return NextResponse.json({ message: "Message delivery failed" }, { status: 502 });
    }

    return NextResponse.json({ message: "Ok" });
  } catch (error) {
    console.error("Unable to deliver portfolio contact message", error);
    return NextResponse.json({ message: "Message delivery failed" }, { status: 502 });
  }
}
