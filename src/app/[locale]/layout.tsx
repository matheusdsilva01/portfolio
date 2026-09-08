import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./index.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const locales = ["en", "pt-BR"] as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as (typeof locales)[number])) return {};

  const t = await getTranslations({ locale, namespace: "portfolio.metadata" });
  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords")
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as (typeof locales)[number])) notFound();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={inter.variable}>
          {children}
          <ToastContainer />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
