document.addEventListener("DOMContentLoaded", carregarPagina);

async function carregarPagina() {
    const pontosDeInclusao = Array.from(document.querySelectorAll("[data-include]"));

    await Promise.all(pontosDeInclusao.map(carregarFragmento));

    initRolagemSuave();
    initMenuMobile();
}

async function carregarFragmento(elemento) {
    const caminho = new URL(elemento.getAttribute("data-include"), document.baseURI).href;

    try {
        const resposta = await fetch(caminho, { cache: "no-store" });

        if (!resposta.ok) {
            throw new Error("HTTP " + resposta.status + " ao carregar " + caminho);
        }

        elemento.innerHTML = await resposta.text();
        elemento.removeAttribute("data-include");
    } catch (erro) {
        console.error("Falha ao carregar fragmento:", erro);
        elemento.innerHTML =
            '<div class="include-error">' +
            "Esta seção não pôde ser carregada. Reinicie o Live Server pela pasta do projeto." +
            "</div>";
    }
}


// ==============================
// ROLAGEM SUAVE
// ==============================
function initRolagemSuave() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            const alvo = document.querySelector(this.getAttribute("href"));
            if (alvo) {
                event.preventDefault();
                alvo.scrollIntoView({ behavior: "smooth" });
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
        const aberto = navLinks.classList.toggle("is-open");
        navToggle.setAttribute("aria-expanded", aberto ? "true" : "false");
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("is-open");
            navToggle.setAttribute("aria-expanded", "false");
        });
    });
}
