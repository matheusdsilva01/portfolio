import Image from "next/image";
import Link from "next/link";

import { projects } from "@/assets/projects";
import { skills } from "@/assets/skills";
import { Form } from "@/components/Form";
import { Header } from "@/components/header";

function Home() {
  return (
    <>
      <Header />
      <object
        className="absolute bottom-0 left-0
         w-full object-cover md:top-60"
        type="image/svg+xml"
        data="/desktop-plain.svg"
      ></object>
      <div className="content-wrapper relative min-h-[90vh]">
        <h1 className="mt-36 text-4xl font-extralight">Matheus Silva</h1>
        <h2 className="mt-6 text-2xl font-medium">Desenvolvedor Front End</h2>
      </div>
      <div
        className="content-wrapper flex min-h-[30vh] flex-col justify-between md:flex-row"
        id="about"
      >
        <div>
          <h1 className="mb-3 font-medium md:mb-7 md:text-xl">Sobre Mim</h1>
          <p className="max-w-[877px] text-xs font-normal md:text-lg md:leading-9">
            Sou Matheus da Silva Souza. Desde pequeno, minha paixão por
            tecnologia me impulsiona a criar soluções eficientes. Busco entender
            e atender às necessidades dos clientes, desenvolvendo interfaces de
            alto desempenho e legibilidade.
          </p>
        </div>
        <div className="mb-auto mt-5 flex gap-4 md:mt-0 md:flex-col">
          <Link
            href="https://github.com/matheusdsilva01"
            target="_blank"
            rel="noreferrer"
            className="w-8 transition-all hover:drop-shadow-[0_0_5px_#06b1f1] md:w-auto"
          >
            <Image
              src={"/icons/github.svg"}
              width={39}
              height={39}
              alt="github icon"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/matheus-silva-ti/"
            target="_blank"
            rel="noreferrer"
            className="w-8 transition-all hover:drop-shadow-[0_0_5px_#06b1f1] md:w-auto"
          >
            <Image
              src={"/icons/linkedin.svg"}
              width={39}
              height={39}
              alt="linkedin icon"
            />
          </Link>
          <Link
            href="mailto:ms25022003@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="w-8 transition-all  hover:drop-shadow-[0_0_5px_#06b1f1] md:w-auto"
          >
            <Image
              src={"/icons/gmail.svg"}
              width={39}
              height={39}
              alt="linkedin icon"
            />
          </Link>
        </div>
      </div>
      <div className="content-wrapper min-h-[40vh]" id="skills">
        <h1 className="mb-6 font-medium md:text-xl">Habilidades</h1>
        <div className="flex flex-wrap gap-4 md:gap-9">
          {skills.map(({ logoSRC, label }) => (
            <div key={label} className="group flex flex-col justify-between">
              <Image
                src={logoSRC}
                width={40}
                height={40}
                alt={label}
                className="m-auto h-auto w-5 md:w-10"
              />
              <p className="group-hover:glow-sm mt-2 text-center text-xs transition-all">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="content-wrapper" id="projects">
        <h1 className="mb-6 font-medium md:text-xl">Projetos</h1>
        <section className="flex flex-row flex-wrap justify-around gap-16 p-2 md:gap-x-28 md:gap-y-12 md:p-4">
          {projects["pt-BR"].map(project => (
            <div
              key={project.name}
              className="flex max-w-[380px] flex-col justify-between gap-6"
            >
              <Image
                src={project.imgSRC}
                alt="Project image cover"
                width={818}
                height={407}
                className="h-fit w-full max-w-[380px] flex-1 object-cover"
              />
              <div className="flex flex-col">
                <h2 className="mb-2 font-medium md:text-xl">{project.name}</h2>
                <p className="text-sm font-medium md:text-sm">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-row flex-wrap gap-2">
                  <Link
                    href={project.site}
                    className="block w-full max-w-[150px] cursor-pointer rounded-md border border-primary-600 px-4 py-2 text-center text-primary-600 hover:border-primary-700 hover:text-primary-700 active:border-primary-800 active:text-primary-800"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver Projeto
                  </Link>
                  <Link
                    href={project.github}
                    className="block w-fit cursor-pointer rounded-md border border-primary-600 px-4 py-2 text-primary-600 hover:border-primary-700 hover:text-primary-700 active:border-primary-800 active:text-primary-800"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src={"/icons/github.svg"}
                      width={24}
                      height={24}
                      alt="github icon"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
      <div
        className="content-wrapper flex min-h-[80vh] flex-col gap-12 md:flex-row"
        id="contact"
      >
        <div className="flex-1">
          <h1 className="mb-6 text-xl font-medium">Vamos desenvolver?</h1>
          <p className="text-xs md:text-justify md:text-base md:leading-7">
            Tenho um compromisso contínuo com a aprendizagem e aprimoramento de
            minhas habilidades, buscando entender e atender às necessidades dos
            clientes de forma prática e eficaz. Minha especialidade é
            desenvolver interfaces de alto desempenho, garantindo não apenas
            funcionalidade, mas também uma excelente legibilidade e usabilidade.
            Estou sempre pronto para colaborar em projetos desafiadores e
            entregar resultados de alta qualidade.
          </p>
        </div>
        <Form />
      </div>
    </>
  );
}

export default Home;
