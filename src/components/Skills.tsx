import * as Tooltip from "@radix-ui/react-tooltip";
import { skills } from "assets/skills.ts";

const SkillsSections = () => {
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

export default SkillsSections;
