import Link from "next/link";
import { getTranslations } from "next-intl/server";

import { GithubIcon, LinkedinIcon } from "./Icons";
import { PortfolioNavigation } from "../PortfolioNavigation";

export async function PortfolioSidebar() {
  const t = await getTranslations("portfolio");

  return (
    <header className="portfolio-sidebar relative z-1 flex h-auto flex-col justify-between py-15.5 sm:py-20 lg:sticky lg:top-0 lg:h-screen lg:py-[96px_72px]">
      <div>
        <Link
          href="#about"
          className="block w-fit text-[40px] leading-none font-bold tracking-[-.045em] text-slate-200 lg:text-[clamp(40px,4vw,52px)]"
        >
          Matheus Silva
        </Link>
        <h1 className="mt-4 text-[17px] font-semibold tracking-[-.01em] text-slate-200 lg:text-[19px]">
          {t("role")}
        </h1>
        <p className="portfolio-intro mt-4.5 max-w-120 text-[15px] leading-[1.6] lg:max-w-97.5">
          {t("intro")}
        </p>
        <PortfolioNavigation />
      </div>

      <div
        className="z-1 mt-10.5 flex items-center gap-5 lg:mt-0"
        aria-label={t("socialsLabel")}
      >
        <Link
          href="https://github.com/matheusdsilva01"
          target="_blank"
          className="grid size-6.25 place-items-center text-slate-400 transition hover:-translate-y-0.75 hover:text-slate-200 [&_svg]:size-5.75"
          aria-label={t("githubLabel")}
        >
          <GithubIcon />
        </Link>
        <Link
          href="https://www.linkedin.com/in/matheus-silva-ti/"
          target="_blank"
          className="grid size-6.25 place-items-center text-slate-400 transition hover:-translate-y-0.75 hover:text-slate-200 [&_svg]:size-5.75"
          aria-label={t("linkedinLabel")}
        >
          <LinkedinIcon />
        </Link>
        <Link
          href="https://dev.to/matheusdsilva01"
          target="_blank"
          className="grid h-6.25 w-auto place-items-center text-xs font-extrabold tracking-[-.03em] text-slate-400 transition hover:-translate-y-0.75 hover:text-slate-200"
          aria-label={t("devLabel")}
        >
          DEV
        </Link>
      </div>
    </header>
  );
}
