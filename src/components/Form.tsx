"use client";

import { useTranslations } from "next-intl";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

export const Form = () => {
  const [disabled, setDisabled] = useState(false);
  const t = useTranslations("portfolio.contact.form");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      website: (form.elements.namedItem("website") as HTMLInputElement).value
    };

    setDisabled(true);
    try {
      const response = await fetch("/api/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!response.ok) throw new Error("Message request failed");
      form.reset();
      toast.success(t("success"));
    } catch {
      toast.error(t("error"));
    } finally {
      setDisabled(false);
    }
  }

  return (
    <form className="grid grid-cols-1 gap-x-5 gap-y-6 sm:grid-cols-2" onSubmit={onSubmit}>
      <label className="flex flex-col gap-2">
        <span className="text-[10px] font-bold tracking-[.1em] text-slate-200">{t("nameLabel")}</span>
        <input className="rounded-[5px] border border-slate-400/20 bg-slate-800/55 px-3.5 py-3 text-[13px] text-slate-200 outline-none transition placeholder:text-[#7c8ba1] focus:border-teal-300/70 focus:ring-3 focus:ring-teal-300/8" type="text" name="name" autoComplete="name" maxLength={100} required placeholder={t("namePlaceholder")} />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-[10px] font-bold tracking-[.1em] text-slate-200">{t("emailLabel")}</span>
        <input className="rounded-[5px] border border-slate-400/20 bg-slate-800/55 px-3.5 py-3 text-[13px] text-slate-200 outline-none transition placeholder:text-[#7c8ba1] focus:border-teal-300/70 focus:ring-3 focus:ring-teal-300/8" type="email" name="email" autoComplete="email" maxLength={254} required placeholder={t("emailPlaceholder")} />
      </label>
      <label className="sr-only" aria-hidden="true"><span>WEBSITE</span><input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
      <label className="col-span-full flex flex-col gap-2">
        <span className="text-[10px] font-bold tracking-[.1em] text-slate-200">{t("messageLabel")}</span>
        <textarea className="min-h-32 resize-y rounded-[5px] border border-slate-400/20 bg-slate-800/55 px-3.5 py-3 text-[13px] text-slate-200 outline-none transition placeholder:text-[#7c8ba1] focus:border-teal-300/70 focus:ring-3 focus:ring-teal-300/8" name="message" maxLength={1000} required placeholder={t("messagePlaceholder")} />
      </label>
      <p className="m-0 self-center text-[10px] leading-normal text-[#7c8ba1]">{t("privacy")}</p>
      <button className="flex cursor-pointer justify-between rounded-[5px] border border-teal-300/30 bg-teal-400/10 px-4 py-3 text-[11px] font-bold tracking-[.08em] text-teal-300 transition hover:border-teal-300/55 hover:bg-teal-400/15 disabled:cursor-wait disabled:opacity-50" type="submit" disabled={disabled}>
        {disabled ? t("submitting") : t("submit")}<span className="text-base">↗</span>
      </button>
    </form>
  );
};
