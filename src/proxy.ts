import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "pt-BR"],
  localePrefix: "never",
  defaultLocale: "pt-BR"
});

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"]
};
