import { getTranslations } from "next-intl/server";

import { Capability } from "./types";
import { sectionClass, sectionTitleClass, tagClass, tagListClass } from "./styles";

export async function SkillsSection() {
  const t = await getTranslations("portfolio");
  const capabilities = t.raw("skills.items") as Capability[];

  return (
    <section id="skills" className={sectionClass} aria-labelledby="skills-title">
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
  );
}
