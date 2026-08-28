// Conteúdo da barra de navegação (dentro de <nav class="navbar">)
window.PARTIALS = window.PARTIALS || {};

window.PARTIALS.header = `
    <div class="logo">
        <span class="logo-mark">J</span>
        JOVI
    </div>

    <ul class="nav-links" id="navLinks">
        <li><a href="#inicio">Início</a></li>
        <li><a href="#solucao">A Solução</a></li>
        <li><a href="#publico">Público-Alvo</a></li>
        <li><a href="#galeria">Galeria</a></li>
        <li><a href="#equipe">Nossa Equipe</a></li>
        <li><a href="#contato">Contato</a></li>
    </ul>

    <a href="#contato" class="nav-button">
        Conheça a JOVI
    </a>

    <button class="nav-toggle" id="navToggle" aria-expanded="false" aria-controls="navLinks">
        <span></span><span></span><span></span>
        <span class="sr-only">Abrir menu</span>
    </button>
`;