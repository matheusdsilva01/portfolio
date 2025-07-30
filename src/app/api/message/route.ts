import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const webhookUrl = process.env.WEBHOOK_DISCORD_URL;
  const messageData = {
    embeds: [
      {
        type: "rich",
        title: `Mensagem de contato via portfolio`,
        description: "",
        color: 0xffffff,
        fields: body
      }
    ]
  };
  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(messageData)
    });
  } catch (err) {
    console.log(err);
  }
  return NextResponse.json({ message: "Ok!" }, { status: 200 });
}
