import { NextResponse } from "next/server";

import axios from "axios";

export async function POST(request: Request) {
  const body = await request.json();
  const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOKDISCORD_URL;
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
    await axios.post(webhookUrl, messageData);
  } catch (err) {
    console.log(err);
  }
  return NextResponse.json({ message: "Ok!" }, { status: 200 });
}
