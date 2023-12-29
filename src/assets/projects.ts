import ImgBuscarFilmes from "@/assets/imgs-projects/buscar-filmes.png";
import ImgCtdEcommerce from "@/assets/imgs-projects/ctd-e-commerce.png";
import ImgMathRandom from "@/assets/imgs-projects/math-random.png";
import ImgPomodoroClock from "@/assets/imgs-projects/pomodoro-clock.png";
import ImgRickAndMorty from "@/assets/imgs-projects/rick-and-morty.png";
import ImgSports from "@/assets/imgs-projects/sports.png";

export const projects = [
  {
    name: "CTD E-Commerce",
    description:
      "Projeto de e-commerce para o curso de Desenvolvimento Web Full Stack da CTD, um sistema de e-commerce para compra de produtos online, com listagem de produtos, carrinho de compras, checkout e finalização de pedido.",
    imgSRC: ImgCtdEcommerce,
    github: "https://github.com/matheusdsilva01/CTD_Commerce_Frontend",
    site: "https://ctd-commerce-frontend-omega.vercel.app/"
  },
  {
    name: "Pomodoro-clock",
    description:
      "O Pomodoro clock é uma aplicação web para aprimorar a produtividade, melhorar o gerenciamento do tempo por meio da comprovada técnica Pomodoro juntamente com gerenciamento de tarefas.",
    imgSRC: ImgPomodoroClock,
    github: "https://github.com/matheusdsilva01/Pomodoro",
    site: "https://pomodor.vercel.app/"
  },
  {
    name: "Rick and Morty",
    description:
      "Projeto para busca de personagens da série Rick and Morty, usando API do Rick and Morty com seleção de favoritos e filtro de personagens.",
    imgSRC: ImgRickAndMorty,
    github: "https://github.com/matheusdsilva01/rick-and-morty",
    site: "https://rick-and-morty-livid.vercel.app/"
  },
  {
    name: "Math random",
    description:
      "Projeto para geração de calculos matermáticos aleatórios usando as 4 operações básicas e com visualização de acertos e erros.",
    imgSRC: ImgMathRandom,
    github: "https://github.com/matheusdsilva01/math-random",
    site: "https://math-random-chi.vercel.app/"
  },
  {
    name: "Buscar filmes",
    description:
      "Projeto para busca de filmes usando API do The Movie DB(TMDB) e api do youtube, mostrando os filmes que são destaques da semana e filtro de filmes.",
    imgSRC: ImgBuscarFilmes,
    github: "https://github.com/matheusdsilva01/buscar-filmes",
    site: "https://buscar-filmes.vercel.app/"
  },
  {
    name: "Sports",
    description:
      "Projeto feito com Html e css para criação de uma landing page estática e responsiva, com design já predefinido no Figma.",
    imgSRC: ImgSports,
    github: "https://github.com/matheusdsilva01/clone-design",
    site: "https://matheusdsilva01.github.io/clone-design/"
  }
];
