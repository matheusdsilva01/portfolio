import { NextResponse } from "next/server";

import axios from "axios";

export async function POST(request: Request) {
  // Handle your API logic here
  const body = await request.json();
  const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOKDISCORD_URL;
  try {
    const messageData = {
      embeds: [
        {
          type: "rich",
          title: "Visita ao portfolio",
          description: "",
          color: 0x00ffff,
          fields: [
            {
              name: "Localização",
              value: body.location
            }
          ]
        }
      ]
    };

    await axios.post(webhookUrl, messageData);
  } catch (err) {
    console.log(err);
  }
  return NextResponse.json({ message: "Ok!" }, { status: 200 });
}
