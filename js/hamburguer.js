const botao = document.getElementById("hamburguer")
const menu = document.getElementById("secao")
const artigo = document.getElementsByTagName("article")[0]

function moverMenu () {
    menu.classList.toggle("ativo")
    artigo.classList.toggle("overlay")
}

function fecharMenu () {
    if (menu.classList.contains("ativo")) {
        menu.classList.toggle("ativo")
        artigo.classList.toggle("overlay")
    }
}

if (botao) {
    botao.addEventListener("click", moverMenu)
    artigo.addEventListener("click", fecharMenu)
}
