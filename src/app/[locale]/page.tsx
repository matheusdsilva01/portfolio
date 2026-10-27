import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

import { featuredProjects } from "@/assets/projects";
import { Form } from "@/components/Form";
import { PortfolioNavigation } from "@/components/PortfolioNavigation";

type DevArticle = {
  id: number;
  title: string;
  description: string;
  url: string;
  published_at: string;
  reading_time_minutes: number;
  tag_list: string[];
  cover_image: string | null;
  social_image: string;
};

type DevProfile = {
  name: string;
  username: string;
  profile_image: string;
};

type Capability = {
  area: string;
  title: string;
  description: string;
  technologies: string[];
};

const sectionClass = "scroll-mt-0 pb-24 lg:scroll-mt-[72px] lg:pb-[132px]";
const sectionTitleClass =
  "sticky top-0 z-20 -mx-5 mb-8 bg-slate-900/80 px-5 py-[18px] text-xs font-bold uppercase tracking-[.1em] text-slate-200 backdrop-blur-md sm:-mx-6 sm:px-6 lg:sr-only";
const tagListClass = "m-0 flex list-none flex-wrap gap-[7px] p-0";
const tagClass =
  "rounded-full bg-teal-400/10 px-[11px] py-[5px] text-[11px] font-semibold leading-[1.4] text-teal-300";
const archiveLinkClass =
  "group mt-7 inline-flex items-center gap-[7px] border-b border-teal-300/35 pb-1 text-sm font-semibold text-slate-200 hover:border-teal-300 lg:ml-[18px]";

const ExternalArrow = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18">
    <path
      d="M7 17 17 7M8 7h9v9"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GithubIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.57 9.57 0 0 1 12 6.82c.85 0 1.71.12 2.51.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
    />
  </svg>
);

const LinkedinIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M6.5 8.3H3.2V21h3.3V8.3ZM4.85 3A1.94 1.94 0 1 0 4.85 6.88 1.94 1.94 0 0 0 4.85 3ZM21 13.72c0-3.82-2.04-5.6-4.77-5.6a4.12 4.12 0 0 0-3.74 2.05V8.3H9.2V21h3.29v-6.29c0-1.66.31-3.27 2.37-3.27 2.03 0 2.05 1.9 2.05 3.38V21H21v-7.28Z"
    />
  </svg>
);

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

const formatYear = (date: string) => new Date(date).getFullYear();

export default async function Home() {
  const { articles, profile } = await getDevContent();
  const t = await getTranslations("portfolio");
  const capabilities = t.raw("skills.items") as Capability[];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-400 selection:bg-teal-300/25 selection:text-slate-200">
      <a
        href="#content"
        className="fixed top-0 left-5 z-100 translate-y-[-110%] bg-teal-300 px-4.5 py-3 font-bold text-cyan-950 transition-transform focus:translate-y-0"
      >
        {t("skipLink")}
      </a>
      <div className="mx-auto block w-[calc(100%-2.5rem)] max-w-170 lg:grid lg:w-[calc(100%-6rem)] lg:max-w-296 lg:grid-cols-[minmax(360px,0.93fr)_minmax(0,1fr)] lg:gap-16">
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
              className="grid size-6.25 place-items-center text-slate-400 transition hover:-translate-y-0.75 hover:text-slate-200  [&_svg]:size-5.75"
              aria-label={t("githubLabel")}
            >
              <GithubIcon />
            </Link>
            <Link
              href="https://www.linkedin.com/in/matheus-silva-ti/"
              target="_blank"
              className="grid  size-6.25 place-items-center text-slate-400 transition  hover:-translate-y-0.75 hover:text-slate-200  [&_svg]:size-5.75"
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

        <main
          className="relative z-1 min-w-0 pb-15 lg:py-[96px_72px]"
          id="content"
        >
          <section
            id="about"
            className={sectionClass}
            aria-labelledby="about-title"
          >
            <h2 id="about-title" className={sectionTitleClass}>
              {t("about.title")}
            </h2>
            <div className="flex flex-col gap-4.5 text-base leading-[1.65] [&_p]:m-0 [&_strong]:font-semibold [&_strong]:text-slate-200">
              <p>
                {t.rich("about.paragraph1", {
                  strong: (chunks) => <strong>{chunks}</strong>,
                })}
              </p>
              <p>{t("about.paragraph2")}</p>
              <p>{t("about.paragraph3")}</p>
            </div>
          </section>

          <section
            id="skills"
            className={sectionClass}
            aria-labelledby="skills-title"
          >
            <h2 id="skills-title" className={sectionTitleClass}>
              {t("skills.title")}
            </h2>
            <ol className="m-0 flex list-none flex-col gap-3 p-0">
              {capabilities.map((capability) => (
                <li
                  className="grid grid-cols-1 gap-2 px-0 py-4.5 sm:grid-cols-[120px_1fr] sm:gap-6 lg:rounded-md lg:px-4.5 lg:py-5.5 lg:transition lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_rgba(148,163,184,.1)]"
                  key={capability.area}
                >
                  <p className="mt-0.75 text-[11px] font-semibold tracking-[.08em] text-[#7c8ba1] uppercase">
                    {capability.area}
                  </p>
                  <div>
                    <h3 className="m-0 text-base font-semibold text-slate-200">
                      {capability.title}
                    </h3>
                    <p className="my-[10px_16px] text-sm leading-[1.55]">
                      {capability.description}
                    </p>
                    <ul
                      className={tagListClass}
                      aria-label={t("skills.technologiesLabel", {
                        area: capability.area,
                      })}
                    >
                      {capability.technologies.map((technology) => (
                        <li className={tagClass} key={technology}>
                          {technology}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section
            id="projects"
            className={sectionClass}
            aria-labelledby="projects-title"
          >
            <h2 id="projects-title" className={sectionTitleClass}>
              {t("projects.title")}
            </h2>
            <div className="flex flex-col gap-3">
              {featuredProjects.map((project) => {
                const name = t(`projects.items.${project.id}.name`);
                return (
                  <article
                    className="group grid grid-cols-[105px_1fr] gap-3.5 py-4 sm:grid-cols-[140px_1fr] sm:gap-5 lg:rounded-md lg:p-4.5 lg:transition lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_rgba(148,163,184,.1)]"
                    key={project.id}
                  >
                    <Link
                      href={project.site}
                      target="_blank"
                      className="mt-1 block self-start"
                      aria-label={t("projects.openLabel", { project: name })}
                    >
                      <Image
                        src={project.imgSRC}
                        alt={name}
                        placeholder="blur"
                        className="h-16 w-26.25 rounded-sm border-2 border-slate-400/20 object-cover transition group-hover:border-slate-200/50 sm:h-20 sm:w-35"
                      />
                    </Link>
                    <div>
                      <div className="flex items-start justify-between gap-3.75">
                        <h3 className="m-0 text-base font-semibold text-slate-200 transition group-hover:text-teal-300">
                          <Link href={project.site} target="_blank">
                            <span className="inline-flex items-center gap-1 [&_svg]:transition-transform hover:[&_svg]:translate-x-0.75 hover:[&_svg]:-translate-y-0.75">
                              {name} <ExternalArrow />
                            </span>
                          </Link>
                        </h3>
                        <Link
                          href={project.github}
                          target="_blank"
                          className="shrink-0 text-slate-400 hover:text-slate-200 [&_svg]:size-4.75"
                          aria-label={t("projects.sourceLabel", {
                            project: name,
                          })}
                        >
                          <GithubIcon />
                        </Link>
                      </div>
                      <p className="my-[10px_16px] text-[13px] leading-[1.55] sm:text-sm">
                        {t(`projects.items.${project.id}.description`)}
                      </p>
                      <ul
                        className={tagListClass}
                        aria-label={t("projects.technologiesLabel", {
                          project: name,
                        })}
                      >
                        {project.technologies.map((technology) => (
                          <li className={tagClass} key={technology}>
                            {technology}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                );
              })}
            </div>
            <Link
              href="https://github.com/matheusdsilva01?tab=repositories"
              target="_blank"
              className={archiveLinkClass}
            >
              {t("projects.archive")}{" "}
              <span className="transition-transform group-hover:translate-x-0.75 group-hover:-translate-y-0.75">
                <ExternalArrow />
              </span>
            </Link>
          </section>

          <section
            id="articles"
            className={sectionClass}
            aria-labelledby="articles-title"
          >
            <div className="relative mb-5.5 flex items-center justify-between lg:mx-4.5 lg:justify-end">
              <h2 id="articles-title" className={sectionTitleClass}>
                {t("articles.title")}
              </h2>
              {profile && (
                <Link
                  href="https://dev.to/matheusdsilva01"
                  target="_blank"
                  className="absolute right-0 z-21 -mt-8 flex items-center gap-2.25 text-[11px] text-slate-400 hover:text-teal-300 lg:static lg:mt-0"
                >
                  <Image
                    src={profile.profile_image}
                    width={34}
                    height={34}
                    alt=""
                    className="rounded-full"
                  />
                  <span className="hidden sm:inline">
                    {t("articles.devProfile")}
                  </span>
                </Link>
              )}
            </div>
            {articles.length ? (
              <div className="flex flex-col gap-2">
                {articles.slice(0, 4).map((article, index) => (
                  <article
                    className="group grid grid-cols-[105px_1fr] gap-3.5 py-4 sm:grid-cols-[140px_1fr] sm:gap-5 lg:rounded-md lg:px-4.5 lg:transition lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_rgba(148,163,184,.1)]"
                    key={article.id}
                  >
                    <Link
                      href={article.url}
                      target="_blank"
                      className="relative block h-15.5 overflow-hidden rounded-sm border-2 border-slate-400/20 sm:h-19.75"
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <Image
                        src={article.cover_image || article.social_image}
                        fill
                        sizes="(max-width: 720px) 35vw, 140px"
                        alt=""
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                      />
                    </Link>
                    <div>
                      <p className="mb-1.25 text-[10px] font-semibold tracking-[.04em] text-[#7c8ba1] uppercase">
                        {t("articles.readingTime", {
                          year: formatYear(article.published_at),
                          minutes: article.reading_time_minutes,
                        })}
                      </p>
                      <h3 className="m-0 text-[15px] leading-[1.4] font-semibold text-slate-200">
                        <Link href={article.url} target="_blank">
                          <span className="hover:text-teal-300 [&_svg]:ml-0.75 [&_svg]:inline [&_svg]:align-[-4px] [&_svg]:transition-transform hover:[&_svg]:translate-x-0.75 hover:[&_svg]:-translate-y-0.75">
                            {article.title} <ExternalArrow />
                          </span>
                        </Link>
                      </h3>
                      {index === 0 && (
                        <p className="mt-2.5 hidden text-[13px] leading-[1.55] sm:block">
                          {article.description}
                        </p>
                      )}
                      <div className="mt-2.5 flex flex-wrap gap-2.5 text-[10px] text-teal-300">
                        {article.tag_list.slice(0, 3).map((tag) => (
                          <span key={tag}>#{tag}</span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <p className="lg:mx-4.5">{t("articles.empty")}</p>
            )}
            <Link
              href="https://dev.to/matheusdsilva01"
              target="_blank"
              className={archiveLinkClass}
            >
              {t("articles.archive")}{" "}
              <span className="transition-transform group-hover:translate-x-0.75 group-hover:-translate-y-0.75">
                <ExternalArrow />
              </span>
            </Link>
          </section>

          <section
            id="contact"
            className={`${sectionClass} px-0 pt-2 lg:px-4.5 lg:pb-30`}
            aria-labelledby="contact-title"
          >
            <h2 id="contact-title" className={sectionTitleClass}>
              {t("contact.title")}
            </h2>
            <p className="mb-8.75 max-w-132.5 text-[15px] leading-[1.65]">
              {t("contact.intro")}
            </p>
            <Form />
            <div className="mt-7 flex flex-wrap gap-5.5">
              <Link
                href="https://www.linkedin.com/in/matheus-silva-ti/"
                target="_blank"
                className="inline-flex items-center gap-1 text-xs font-semibold text-slate-200 hover:text-teal-300 [&_svg]:size-3.75"
              >
                LinkedIn <ExternalArrow />
              </Link>
              <Link
                href="https://github.com/matheusdsilva01"
                target="_blank"
                className="inline-flex items-center gap-1 text-xs font-semibold text-slate-200 hover:text-teal-300 [&_svg]:size-3.75"
              >
                GitHub <ExternalArrow />
              </Link>
              <Link
                href="https://dev.to/matheusdsilva01"
                target="_blank"
                className="inline-flex items-center gap-1 text-xs font-semibold text-slate-200 hover:text-teal-300 [&_svg]:size-3.75"
              >
                DEV Community <ExternalArrow />
              </Link>
            </div>
          </section>

          <footer className="flex justify-between gap-7.5 px-0 pb-6 text-[11px] leading-[1.6] text-[#7c8ba1] lg:px-4.5">
            <p className="m-0 max-w-90">{t("footer.builtBy")}</p>
            <a href="#about" className="shrink-0 hover:text-teal-300">
              {t("footer.backToTop")}
            </a>
          </footer>
        </main>
      </div>
    </div>
  );
}
