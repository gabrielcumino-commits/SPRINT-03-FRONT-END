// ==============================
// MONTAGEM DAS SEÇÕES
// Cada seção da página vem de js/partials/*.js
// e é injetada no elemento com o data-mount correspondente
// ==============================
document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll("[data-mount]").forEach(function (el) {
        const nome = el.getAttribute("data-mount");
        if (window.PARTIALS && window.PARTIALS[nome]) {
            el.innerHTML = window.PARTIALS[nome];
        }
    });

    initRolagemSuave();
    initMenuMobile();

});


// ==============================
// ROLAGEM SUAVE
// ==============================
function initRolagemSuave() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                event.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
}


// ==============================
// MENU MOBILE (HAMBÚRGUER)
// ==============================
function initMenuMobile() {
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");

    if (!navToggle || !navLinks) return;

    navToggle.addEventListener("click", function () {
        const isOpen = navLinks.classList.toggle("is-open");
        navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("is-open");
            navToggle.setAttribute("aria-expanded", "false");
        });
    });
}



const sections = [
    ["header", "header.html"],
    ["hero", "hero.html"],
    ["solucao", "solucao.html"],
    ["publico", "publico.html"],
    ["galeria", "galeria.html"],
    ["equipe", "equipe.html"],
    ["contato", "contato.html"],
    ["footer", "footer.html"]
];

async function loadSections() {

    for (const [id, file] of sections) {

        const response = await fetch(`pages/${file}`);
        const html = await response.text();

        document.getElementById(id).innerHTML = html;
    }

}

loadSections();