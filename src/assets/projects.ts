import ImgBiblioTech from "@/assets/imgs-projects/biblio-tech.png";
import ImgBuscarFilmes from "@/assets/imgs-projects/buscar-filmes.png";
import ImgMathRandom from "@/assets/imgs-projects/math-random.png";
import ImgPomodoroClock from "@/assets/imgs-projects/pomodoro-clock.png";
import ImgRickAndMorty from "@/assets/imgs-projects/rick-and-morty.png";
import ImgCtdEcommerce from "@/assets/imgs-projects/ctd-e-commerce.png";

export const projects = [
  {
    name: "CTD E-Commerce",
    description:
      "Projeto de e-commerce para o curso de Desenvolvimento Web Full Stack da CTD",
    imgSRC: ImgCtdEcommerce,
    github: "https://github.com/matheusdsilva01/CTD_Commerce_Frontend",
    site: "https://ctd-commerce-frontend-omega.vercel.app/",
  },
  {
    name: "Biblio-tech",
    description: "Projeto de biblioteca",
    imgSRC: ImgBiblioTech,
    github: "https://github.com/matheusdsilva01/Front-end-biblioteca",
    site: "https://front-end-biblioteca.vercel.app/",
  },
  {
    name: "Pomodoro-clock",
    description: "Projeto de cronômetro",
    imgSRC: ImgPomodoroClock,
    github: "https://github.com/matheusdsilva01/Pomodoro",
    site: "https://pomodor.vercel.app/",
  },
  {
    name: "Rick and Morty",
    description: "Projeto usando API do Rick and Morty para buscar personagens",
    imgSRC: ImgRickAndMorty,
    github: "https://github.com/matheusdsilva01/rick-and-morty",
    site: "https://rick-and-morty-livid.vercel.app/",
  },
  {
    name: "Math random",
    description: "Projeto para cálculos matemáticos aleatórios",
    imgSRC: ImgMathRandom,
    github: "https://github.com/matheusdsilva01/math-random",
    site: "https://math-random-chi.vercel.app/",
  },
  {
    name: "Buscar filmes",
    description:
      "Projeto para buscar filmes usando API do The Movie DB e API de vídeos do Youtube",
    imgSRC: ImgBuscarFilmes,
    github: "https://github.com/matheusdsilva01/buscar-filmes",
    site: "https://buscar-filmes.vercel.app/",
  },
];
