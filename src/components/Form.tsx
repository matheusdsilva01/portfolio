"use client";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

export const Form = () => {
  const [disabled, setDisabled] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      ?.value;

    const fields = [
      {
        name: "email",
        value: email
      },
      {
        name: "name",
        value: name
      },
      {
        name: "message",
        value: message
      }
    ];
    setDisabled(true);
    try {
      await fetch("/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(fields)
      });
      toast.success("Mensagem enviada com sucesso!");
    } catch (err) {
      console.log(err);
      toast.error("Ops, ocorreu um erro, entre em contato comigo via email");
    } finally {
      setDisabled(false);
    }
  }

  return (
    <div className="w-full max-w-2xl flex-1">
      <h2 className="mb-6 md:text-3xl">Entre em contato</h2>
      <form className="bg-light-gray px-6 py-7" onSubmit={onSubmit}>
        <div className="flex flex-col gap-8">
          <input
            type="text"
            name="name"
            required
            className="rounded-md bg-primary-950 px-2 py-3 text-sm outline-none transition-[box-shadow] placeholder:opacity-60 focus:ring-2 focus:ring-primary-800"
            placeholder="Nome"
          />
          <input
            type="text"
            name="email"
            required
            className="rounded-md bg-primary-950 px-2 py-3 text-sm outline-none transition-[box-shadow] placeholder:opacity-60 focus:ring-2 focus:ring-primary-800"
            placeholder="Email"
          />
          <textarea
            name="message"
            required
            className="h-64 rounded-md bg-primary-950 px-2 py-3 text-sm outline-none transition-[box-shadow] placeholder:opacity-60 focus:ring-2 focus:ring-primary-800"
            placeholder="Sua mensagem..."
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={disabled}
          className="mt-7 w-full rounded-lg bg-gradient-to-b from-primary-400 to-primary-500 py-3 text-center transition-all hover:from-primary-500 hover:to-primary-600 active:from-primary-600 active:to-primary-700 disabled:bg-primary-950 disabled:text-primary-700"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};
