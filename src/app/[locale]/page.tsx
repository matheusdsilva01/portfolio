import { getTranslations } from "next-intl/server";

import { ArticlesSection } from "@/components/portfolio/ArticlesSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { PortfolioFooter } from "@/components/portfolio/PortfolioFooter";
import { PortfolioSidebar } from "@/components/portfolio/PortfolioSidebar";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { DevArticle, DevProfile } from "@/components/portfolio/types";

async function getDevContent() {
  const revalidateTime = 60 * 60 * 24; // 24 hours

  const [articles, profile] = await Promise.all([
    fetch("https://dev.to/api/articles?username=matheusdsilva01", {
      next: { revalidate: revalidateTime },
    })
      .then(async (response) =>
        response.ok ? ((await response.json()) as DevArticle[]) : [],
      )
      .catch(() => [] as DevArticle[]),
    fetch("https://dev.to/api/users/by_username?url=matheusdsilva01", {
      next: { revalidate: revalidateTime },
    })
      .then(async (response) =>
        response.ok ? ((await response.json()) as DevProfile) : null,
      )
      .catch(() => null),
  ]);

  return { articles, profile };
}

export default async function Home() {
  const { articles, profile } = await getDevContent();
  const t = await getTranslations("portfolio");

  return (
    <div className="min-h-screen bg-slate-900 text-slate-400 selection:bg-teal-300/25 selection:text-slate-200">
      <a
        href="#content"
        className="fixed top-0 left-5 z-100 translate-y-[-110%] bg-teal-300 px-4.5 py-3 font-bold text-cyan-950 transition-transform focus:translate-y-0"
      >
        {t("skipLink")}
      </a>
      <div className="mx-auto block w-[calc(100%-2.5rem)] max-w-170 lg:grid lg:w-[calc(100%-6rem)] lg:max-w-296 lg:grid-cols-[minmax(360px,0.93fr)_minmax(0,1fr)] lg:gap-16">
        <PortfolioSidebar />
        <main
          className="relative z-1 min-w-0 pb-15 lg:py-[96px_72px]"
          id="content"
        >
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ArticlesSection articles={articles} profile={profile} />
          <ContactSection />
          <PortfolioFooter />
        </main>
      </div>
    </div>
  );
}
