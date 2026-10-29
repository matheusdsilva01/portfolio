import { getTranslations } from "next-intl/server";

import { sectionClass, sectionTitleClass } from "./styles";

export async function AboutSection() {
  const t = await getTranslations("portfolio");

  return (
    <section id="about" className={sectionClass} aria-labelledby="about-title">
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
  );
}
