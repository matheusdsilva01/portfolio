"use client";
import { useTranslations } from "next-intl";
import { toast } from "react-toastify";

import axios from "axios";

const Contact = () => {
  const t = useTranslations();
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { email, subject, message } = e.currentTarget;
    if (!email.value || !subject.value || !message.value) {
      toast.warn("Preencha todos os campos");
      return;
    }
    const fields = [
      {
        name: "Email",
        value: email.value
      },
      {
        name: "Assunto",
        value: subject.value
      },
      {
        name: "Mensagem",
        value: message.value
      }
    ];
    try {
      await axios.post("/api/message", fields);
      toast.success("Mensagem enviada com sucesso!");
    } catch (err) {
      console.log(err);
      toast.error("Ops, ocorreu um erro, entre em contato comigo via email");
    }
  }
  return (
    <div className="min-h-[70vh] w-full space-y-2 bg-primary-50 px-5 py-14">
      <h2 className="text-center text-2xl font-medium text-primary-900 md:text-3xl">
        {t("contact.title")}
      </h2>
      <form
        onSubmit={onSubmit}
        className="m-auto h-full max-w-3xl space-y-8 overflow-auto px-6 py-4 shadow shadow-black"
      >
        <div className="relative">
          <input
            id="email"
            className="block w-full appearance-none rounded-lg border border-[#C4C4C4] bg-transparent px-2.5 pb-2.5 pt-4 text-sm placeholder:text-sm placeholder:text-[#C4C4C4] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#C4C4C4]"
            type="text"
            placeholder={t("contact.placeholder.email")}
            name="email"
          />
          <label
            htmlFor="email"
            className="undefined absolute start-3 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-primary-50 px-2 text-sm font-normal text-zinc-600 duration-300"
          >
            {t("contact.input.email")}
          </label>
        </div>
        <div className="relative">
          <input
            id="subject"
            className="block w-full appearance-none rounded-lg border border-[#C4C4C4] bg-transparent px-2.5 pb-2.5 pt-4 text-sm placeholder:text-sm placeholder:text-[#C4C4C4] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#C4C4C4]"
            type="text"
            placeholder={t("contact.placeholder.subject")}
            name="subject"
          />
          <label
            htmlFor="subject"
            className="undefined absolute start-3 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-primary-50 px-2 text-sm font-normal text-zinc-600 duration-300"
          >
            {t("contact.input.subject")}
          </label>
        </div>
        <div className="relative">
          <textarea
            id="message"
            className="block h-[368px] w-full appearance-none rounded-lg border border-[#C4C4C4] bg-transparent px-2.5 pb-2.5 pt-4 text-sm placeholder:text-sm placeholder:text-[#C4C4C4] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#C4C4C4]"
            placeholder={t("contact.placeholder.message")}
            name="message"
          ></textarea>
          <label
            htmlFor="message"
            className="undefined absolute start-3 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-primary-50 px-2 text-sm font-normal text-zinc-600 duration-300"
          >
            {t("contact.input.message")}
          </label>
        </div>
        <button
          type="submit"
          className="hover:shadow-inset-gray float-right w-full max-w-[280px] border border-primary-950 text-sm leading-8 transition-all hover:shadow md:text-base"
        >
          {t("contact.sendButton")}
        </button>
      </form>
    </div>
  );
};

export default Contact;
