"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const sections = [
  ["about", "about"],
  ["skills", "skills"],
  ["projects", "projects"],
  ["articles", "articles"],
  ["contact", "contact"],
] as const;

export function PortfolioNavigation() {
  const [activeSection, setActiveSection] = useState("about");
  const t = useTranslations("portfolio.navigation");

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
    };

    const handleScroll = () => {
      const current = sections.reduce((active, [, id]) => {
        const section = document.getElementById(id);
        return section && section.getBoundingClientRect().top <= window.innerHeight * 0.35
          ? id
          : active;
      }, sections[0][1]);
      setActiveSection(current);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="pointer-light" aria-hidden="true" />
      <nav className="portfolio-nav mt-[72px] hidden flex-col items-start gap-[18px] lg:flex" aria-label={t("label")}>
        {sections.map(([key, id]) => (
          <Link
            href={`#${id}`}
            className={`group flex items-center gap-4 text-[11px] font-bold uppercase tracking-[.12em] transition-colors ${
              activeSection === id ? "text-slate-200" : "text-[#7c8ba1] hover:text-slate-200"
            }`}
            key={id}
          >
            <span className={`h-px bg-current transition-[width] ${activeSection === id ? "w-16" : "w-8 group-hover:w-16"}`} />
            {t(key)}
          </Link>
        ))}
      </nav>
    </>
  );
}
