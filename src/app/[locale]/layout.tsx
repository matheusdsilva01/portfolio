import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter } from "next/font/google";
import Script from "next/script";
import { ToastContainer } from "react-toastify";

import { Analytics } from "@vercel/analytics/react";

import "react-toastify/dist/ReactToastify.css";
import "./index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matheus Silva, Front-end developer",
  description: "Desenvolvedor front end React, next, vue",
  keywords: "React, Next, Vue, Tailwind, Front-end, Developer, Desenvolvedor",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-0DX50Q1XYE"
      ></Script>
      <Script>
        {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-0DX50Q1XYE');`}
      </Script>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={inter.className}>
          {children}
          <ToastContainer />
          <Analytics />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
