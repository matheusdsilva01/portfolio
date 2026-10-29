import Link from "next/link";
import { getTranslations } from "next-intl/server";

import { Form } from "../Form";
import { ExternalArrow } from "./Icons";
import { sectionClass, sectionTitleClass } from "./styles";

export async function ContactSection() {
  const t = await getTranslations("portfolio");

  return (
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
        {[
          ["LinkedIn", "https://www.linkedin.com/in/matheus-silva-ti/"],
          ["GitHub", "https://github.com/matheusdsilva01"],
          ["DEV Community", "https://dev.to/matheusdsilva01"],
        ].map(([label, href]) => (
          <Link
            href={href}
            target="_blank"
            className="inline-flex items-center gap-1 text-xs font-semibold text-slate-200 hover:text-teal-300 [&_svg]:size-3.75"
            key={label}
          >
            {label} <ExternalArrow />
          </Link>
        ))}
      </div>
    </section>
  );
}
