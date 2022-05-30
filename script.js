const nome = document.querySelector("div.name-stack");
const nameTop = document.querySelector("div.name-is-top");
const imagens = document.querySelectorAll(".images > img");
const checkboxMenu = document.getElementById("checkbox-menu")
const menu = document.querySelector("section.menu");
const cardSkills = document.querySelector("#conhecimento > section.skills");
const [text, linha] = nameTop.children;
const spans = document.querySelectorAll("label > span");

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