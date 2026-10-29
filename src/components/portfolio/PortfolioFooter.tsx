import { getTranslations } from "next-intl/server";

export async function PortfolioFooter() {
  const t = await getTranslations("portfolio");

  return (
    <footer className="flex justify-between gap-7.5 px-0 pb-6 text-[11px] leading-[1.6] text-[#7c8ba1] lg:px-4.5">
      <p className="m-0 max-w-90">{t("footer.builtBy")}</p>
      <a href="#about" className="shrink-0 hover:text-teal-300">
        {t("footer.backToTop")}
      </a>
    </footer>
  );
}
