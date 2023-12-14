import axios from "axios";
import dotenv from "dotenv";
import express, { Request } from "express";
import ViteExpress from "vite-express";
dotenv.config();
const app = express();
app.use(express.json());
ViteExpress.config({ mode: "production" });

const webhookUrl = process.env.VITE_WEBHOOKDISCORD_URL!;

app.post("/message", async (req: Request, res: any) => {
  const fields = req.body;
  const messageData = {
    embeds: [
      {
        type: "rich",
        title: `Mensagem de contato via portfolio`,
        description: "",
        color: 0xffffff,
        fields
      }
    ]
  };
  try {
    await axios.post(webhookUrl, messageData);
  } catch (err) {
    console.log(err);
  }
  return res.status(200).json({ message: "ok" });
});

app.post("/location", async (req: Request, res: any) => {
  const value = req.body;

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
              value: value.location
            }
          ]
        }
      ]
    };

    await axios.post(webhookUrl, messageData);
  } catch (err) {
    console.log(err);
  }

  return res.status(200).json({ message: "ok" });
});
ViteExpress.listen(app, 3000, () => console.log("Server is listening..."));
