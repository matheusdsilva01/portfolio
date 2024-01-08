import { useTranslations } from "next-intl";

const ResumeCard = () => {
  const t = useTranslations();
  return (
    <div className="my-auto space-y-4 rounded-md px-4 py-3 md:w-96">
      <h3 className="text-2xl md:text-3xl">Matheus Silva</h3>
      <h4 className="!mt-0 text-lg md:text-2xl">{t("occupation")}</h4>
      <button className="w-full rounded border border-black text-lg hover:bg-primary-50 active:bg-primary-100">
        <a
          href="/Matheus-Silva cv.pdf"
          download="matheus-silva-cv.pdf"
          className="block w-full shadow-primary-200 transition-shadow hover:shadow-lg"
        >
          Download CV
        </a>
      </button>
    </div>
  );
};

export default ResumeCard;
