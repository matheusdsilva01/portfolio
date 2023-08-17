import * as Tooltip from "@radix-ui/react-tooltip";

const skills = [
  {
    logoSRC: "./src/assets/skills/html5.svg",
    alt: "html5"
  },
  {
    logoSRC: "./src/assets/skills/css3.svg",
    alt: "css3"
  },
  {
    logoSRC: "./src/assets/skills/javascript.svg",
    alt: "javascript"
  },
  {
    logoSRC: "./src/assets/skills/react.svg",
    alt: "react"
  },
  {
    logoSRC: "./src/assets/skills/scss.svg",
    alt: "scss"
  },
  {
    logoSRC: "./src/assets/skills/bootstrap.svg",
    alt: "bootstrap"
  },
  {
    logoSRC: "./src/assets/skills/tailwind.svg",
    alt: "tailwind"
  },
  {
    logoSRC: "./src/assets/skills/typescript.svg",
    alt: "typescript"
  },
  {
    logoSRC: "./src/assets/skills/jest.svg",
    alt: "jest"
  },
  {
    logoSRC: "./src/assets/skills/redux.svg",
    alt: "redux"
  },
  {
    logoSRC: "./src/assets/skills/git.svg",
    alt: "git"
  },
  {
    logoSRC: "./src/assets/skills/figma.svg",
    alt: "figma"
  },
  {
    logoSRC: "./src/assets/skills/github.svg",
    alt: "github"
  },
  {
    logoSRC: "./src/assets/skills/mysql.svg",
    alt: "mysql"
  },
  {
    logoSRC: "./src/assets/skills/mongo.svg",
    alt: "mongo"
  }
];

const Skills = () => {
  return (
    <div className="min-h-[288px] w-full space-y-2 bg-primary-50 px-5 py-14 md:h-96 md:space-y-4">
      <h3 className="text-2xl text-primary-900">Minhas Skills:</h3>
      <hr className="border-black/50" />
      <div className="flex flex-wrap gap-x-6 gap-y-5">
        {skills.map(skill => (
          <Tooltip.Provider delayDuration={0} key={skill.alt}>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <img
                  src={skill.logoSRC}
                  alt={skill.alt}
                  key={skill.logoSRC}
                  className="w-8 md:w-12"
                />
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content className="animate-slide border bg-white p-1 capitalize">
                  {skill.alt}
                  <Tooltip.Arrow className="TooltipArrow" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        ))}
      </div>
    </div>
  );
};

export default Skills;
