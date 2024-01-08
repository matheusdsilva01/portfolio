import { getRequestConfig } from "next-intl/server";

const locales = ["en", "pt-BR"] as const;

export default getRequestConfig(
  async ({ locale }: { locale: (typeof locales)[number] }) => {
    if (!locales.includes(locale))
      return { messages: (await import(`../messages/en.json`)).default };

    return {
      messages: (await import(`../messages/${locale}.json`)).default
    };
  }
);
