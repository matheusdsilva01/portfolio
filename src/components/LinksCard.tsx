import Gmail from "@/assets/icons/gmail.svg";
import Linkedin from "@/assets/icons/linkedin.svg";
import Github from "@/assets/skills/github.svg";

const CardLinks = () => {
  return (
    <div className="my-auto space-y-4 rounded-md px-4 py-3 md:w-96">
      <div className="flex">
        <img src={Linkedin} alt="linkedin icon" className="w-8 md:w-10" />
        <span>
          <a
            href="https://linkedin.com/in/matheus-silva-ti"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-sm hover:underline md:text-base"
          >
            linkedin.com/in/matheus-silva-ti
          </a>
        </span>
      </div>
      <div className="flex">
        <img src={Github} alt="github icon" className="w-8 md:w-10" />
        <span>
          <a
            href="https://github.com/matheusdsilva01"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-sm hover:underline md:text-base"
          >
            github.com/matheusdsilva01
          </a>
        </span>
      </div>
      <div className="flex">
        <img src={Gmail} alt="gmail icon" className="w-8 md:w-10" />
        <span>
          <a
            href="mailto:ms25022003@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-sm hover:underline md:text-base"
          >
            ms25022003@gmail.com
          </a>
        </span>
      </div>
    </div>
  );
};

export default CardLinks;
