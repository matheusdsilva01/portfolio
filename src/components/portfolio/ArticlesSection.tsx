import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

import { ExternalArrow } from "./Icons";
import { archiveLinkClass, sectionClass, sectionTitleClass } from "./styles";
import { DevArticle, DevProfile } from "./types";

type ArticlesSectionProps = {
  articles: DevArticle[];
  profile: DevProfile | null;
};

const formatYear = (date: string) => new Date(date).getFullYear();

export async function ArticlesSection({
  articles,
  profile,
}: ArticlesSectionProps) {
  const t = await getTranslations("portfolio");

  return (
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
              loading="lazy"
              decoding="async"
              alt=""
              className="rounded-full"
            />
            <span className="hidden sm:inline">{t("articles.devProfile")}</span>
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
                  loading="lazy"
                  decoding="async"
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
  );
}
