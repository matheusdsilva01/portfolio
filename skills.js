const cardSkills = document.querySelector("#conhecimento > section.skills > div.images");

/* 
    <img src="./assets/skills/html5.svg" alt="Icon html5">
    <img src="./assets/skills/css3.svg" alt="Icon css3">
    <img src="./assets/skills/javascript.svg" alt="Icon javascript">
    <img src="./assets/skills/react.svg" alt="Icon react">
    <img src="./assets/skills/scss.svg" alt="Icon scss">
    <img src="./assets/skills/bootstrap.svg" alt="Icon bootstrap">
    <img src="./assets/skills/tailwind.svg" alt="Icon tailwind">
    <img src="./assets/skills/typescript.svg" alt="Icon typescript">
    <img src="./assets/skills/jest.svg" alt="Icon jest">
    <img src="./assets/skills/redux.svg" alt="Icon redux">
*/

const skills = [
    {
        logoSRC: "./assets/skills/html5.svg",
        alt: "icon html5"
    },
    {
        logoSRC: "./assets/skills/css3.svg",
        alt: "icon css3"
    },
    {
        logoSRC: "./assets/skills/javascript.svg",
        alt: "icon javascript"
    },
    {
        logoSRC: "./assets/skills/react.svg",
        alt: "icon react"
    },
    {
        logoSRC: "./assets/skills/scss.svg",
        alt: "icon scss"
    },
    {
        logoSRC: "./assets/skills/bootstrap.svg",
        alt: "icon bootstrap"
    },
    {
        logoSRC: "./assets/skills/tailwind.svg",
        alt: "icon tailwind"
    },
    {
        logoSRC: "./assets/skills/typescript.svg",
        alt: "icon typescript"
    },
    {
        logoSRC: "./assets/skills/jest.svg",
        alt: "icon jest"
    },
    {
        logoSRC: "./assets/skills/redux.svg",
        alt: "icon redux"
    },
    {
        logoSRC: "./assets/skills/git.svg",
        alt: "icon git"
    },
    {
        logoSRC: "./assets/skills/figma.svg",
        alt: "icon figma"
    },
    {
        logoSRC: "./assets/skills/github.svg",
        alt: "icon github"
    },
    {
        logoSRC: "./assets/skills/mysql.svg",
        alt: "icon mysql"
    },
    {
        logoSRC: "./assets/skills/mongo.svg",
        alt: "icon mongo"
    },
];


skills.map(skill => {
    const img = document.createElement("img")
    img.setAttribute('src', skill.logoSRC)
    img.setAttribute('alt', skill.alt)

    cardSkills.appendChild(img)
})
console.log(skills)