import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "pt-BR"],
  localePrefix: "never",
  defaultLocale: "en"
});

export const config = {
  matcher: ["/"]
};
