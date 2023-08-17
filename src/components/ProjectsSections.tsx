import { useState } from "react";

import { projects } from "assets/projects";
const ProjectsSections = () => {
  const [projectToView, setProjectToView] = useState("Buscar filmes");

  return (
    <div className="min-h-[288px] w-full space-y-2 bg-primary-50 px-5 py-14 md:space-y-4 lg:h-96">
      <h3 className="text-2xl text-primary-900 md:text-base">Projetos:</h3>
      <hr className="border-black/50" />
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex-none overflow-y-auto bg-primary-100 md:w-[302px]">
          {/* select project to view */}
          {projects.map(project => (
            <div
              key={project.name}
              onClick={() => setProjectToView(project.name)}
              className={`w-full cursor-pointer bg-primary-100 transition-all hover:drop-shadow-md ${
                project.name === projectToView ? "shadow-inset-gray" : null
              }`}
            >
              <div className="relative flex h-8 md:h-9">
                {project.name === projectToView && (
                  <span className="absolute top-0 h-full w-1 animate-fadeIn bg-black"></span>
                )}
                <p className="my-auto ml-7 text-xs text-primary-950 md:text-sm">
                  {project.name}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full lg:flex">
          {projects
            .filter(project => project.name === projectToView)
            .map(project => (
              <>
                <img
                  src={project.imgSRC}
                  alt="alt to project"
                  className="m-auto w-full max-w-xs object-cover md:w-80 md:max-w-none"
                />
                <div
                  key={project.name}
                  className="flex w-full flex-col space-y-4 md:ml-4 md:space-y-0"
                >
                  <h4 className="text-lg md:text-2xl">{project.name}</h4>
                  <p className="text-sm md:text-lg">{project.description}</p>
                  <div className="mt-auto flex w-full gap-4">
                    <button className="hover:shadow w-full max-w-[280px] border border-primary-950 text-base transition-all hover:shadow-inset-gray">
                      <a
                        href={project.site}
                        target="_blank"
                        rel="noreferrer"
                        className="block w-full text-sm leading-8 md:text-base"
                      >
                        Visitar site
                      </a>
                    </button>
                    <button className="hover:shadow w-full max-w-[280px] border border-primary-950 text-base transition-all hover:shadow-inset-gray">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="block w-full text-sm leading-8 md:text-base"
                      >
                        Visitar GitHub
                      </a>
                    </button>
                  </div>
                </div>
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSections;
