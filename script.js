const nome = document.querySelector("div.name-stack");
const nameTop = document.querySelector("div.name-is-top");
const imagens = document.querySelectorAll(".images > img");
const checkboxMenu = document.getElementById("checkbox-menu")
const menu = document.querySelector("section.menu");
const cardSkills = document.querySelector("#conhecimento > section.skills");
const [text, linha] = nameTop.children;
const spans = document.querySelectorAll("label > span");
const containerCardsProjetos = document.getElementById('container-cards-projetos');
import { projects } from './assets/projects.js';

projects.map(project => {
    createCardProject(project);
})


function createCardProject({ imgSRC, title, link }) {
    // div pai
    let cardProject = document.createElement("div");
    cardProject.classList.add('card-projeto');
    // content project
    let content = document.createElement("div");
    cardProject.appendChild(content);
    content.classList.add('content');
    //img in HTML
    let img = document.createElement("img");
    img.setAttribute("src", imgSRC);
    img.setAttribute("alt", title)
    content.appendChild(img);
    // title in HTML
    let h2 = document.createElement("h2");
    h2.innerHTML = title;
    content.appendChild(h2);

    // button link
    let button = document.createElement("button");
    button.setAttribute('type', 'button');
    let a = document.createElement("a");
    a.setAttribute('target', '_blank')
    a.href = link;
    a.innerHTML = "Ver mais";
    button.appendChild(a);
    // add all div pai
    cardProject.appendChild(button);
    // add in HTML
    containerCardsProjetos.appendChild(cardProject)
}


checkboxMenu.addEventListener("click", () => {
    menu.classList.toggle("active");
    menu.classList.contains("active") ? "hidden" : "auto"
})

function mostrarIconesSkills() {
    [...imagens].map((item, index) => {
        setTimeout(() => {
            item.classList.add("show")
        }, 100 * index)
    })
}

function revealImagens() {
    var reveals = document.querySelectorAll(".images > img")
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            mostrarIconesSkills()
        }
    }
}

function nameIsTop() {
    if (nome.getBoundingClientRect().top <= 0) {
        spans.forEach(span => {
            span.classList.remove("active")
        })
        nameTop.classList.add("active")
        nome.classList.remove("active")
        removeItemDisplay(nome)
    } else {
        spans.forEach(span => {
            span.classList.add("active")
        })
        nameTop.classList.remove("active")
        nome.classList.add("active")
        addItemDisplay(nome)
    }
}

function removeItemDisplay(item) {
    item.style.visibility = "hidden"
}
function addItemDisplay(item) {
    item.style.visibility = "visible"
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal")
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }

}

window.addEventListener("scroll", () => {
    reveal()
    nameIsTop()
    revealImagens()
});
reveal()
nameIsTop()