//variaveis para efeito hamburguer-menu aparecendo
const links = document.querySelectorAll("nav a");
const hamburguer = document.querySelector('.hamburguer');
//variavel para incrementar o valor do scroll
let incrementValueScroll = 0;
//variaveis para efeito do texto escrevendo
const text = document.querySelector('.text-writer-effect').innerText;
const textEl = document.querySelector('.text-writer-effect');
let idxText = 1;

//EFEITO DE SCROLL SUAVE

//Quando o usuario clicar em um link
links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        let element = document.querySelector(e.target.hash);
        console.log(element);
        scrollSmoth(element.offsetTop);

    });
})
//função que incrementa uma variavel e chama o window.scrollTo passando essa variavel
function scrollSmoth(maxValue) {
    console.log(maxValue);
    let interval = setInterval(function () {
        console.log(incrementValueScroll);
        if (incrementValueScroll >= maxValue) {
            clearInterval(interval);
            incrementValueScroll = 0;
        } else {
            window.scrollTo({
                top: incrementValueScroll,
            })
            incrementValueScroll += 100;
        }
    }, 20);

}

//EFEITO SHOW MENU
hamburguer.addEventListener('click', e => {
    let hasMenu = document.querySelector('.menuHamburguer');

    if (hasMenu) {
        hasMenu.remove();
    } else {
        let divHambuguer = document.createElement('div');
        divHambuguer.classList.add('menuHamburguer');
        let header = document.querySelector('header');
        divHambuguer.innerHTML = `
                     <nav class="d-flex justify-content-center m-0 mt-4 p-0">
                      <ul class="p-0 d-block d-sm-flex d-md-none">
                            <li class="mb-4 text-center">
                                <a href="#about">Sobre mim</a>
                            </li>
                            <li class="mb-4 text-center">
                                <a href="#projects">Projetos</a>
                            </li>
                            <li class="mb-4 text-center">
                                <a href="#services">Serviços</a>
                            </li>
                            <li class="text-center mb-4">
                                <a href="#skills">Minhas skills</a>
                            </li>
                        </ul>
                        </nav>
   `;
        header.appendChild(divHambuguer);
    }

});

//EFEITO DE TEXTO ESCREVENDO
writeText();

function writeText() {
    let txt = text.slice(0, idxText);

    textEl.innerText = txt;
    idxText++;
    setTimeout(() => {
        if (idxText > text.length) {
            idxText = 1;
            setTimeout(() => {
                writeText();
            }, 1000);
        } else {
            writeText();
        }

    }, 100);
}