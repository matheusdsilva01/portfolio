import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

import { featuredProjects } from "@/assets/projects";

import { ExternalArrow, GithubIcon } from "./Icons";
import {
  archiveLinkClass,
  sectionClass,
  sectionTitleClass,
  tagClass,
  tagListClass,
} from "./styles";

export async function ProjectsSection() {
  const t = await getTranslations("portfolio");

  return (
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
                  loading="lazy"
                  decoding="async"
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
                    aria-label={t("projects.sourceLabel", { project: name })}
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
  );
}
