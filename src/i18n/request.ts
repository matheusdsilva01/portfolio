import * as rootParams from "next/root-params";
import { getRequestConfig } from "next-intl/server";
const locales = ["en", "pt-BR"] as const;

export default getRequestConfig(async () => {
  const locale = (await rootParams.locale()) as (typeof locales)[number];

  if (!locales.includes(locale))
    return {
      locale: "pt-BR",
      messages: (await import(`../../messages/pt-BR.json`)).default,
    };

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
