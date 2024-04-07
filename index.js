var setaEsquerda = window.document.getElementById("seta-esquerdo")
var Bruna = window.document.getElementById("card-bruna")
var Leonardo = window.document.getElementById("card-leonardo")
var Samantha = window.document.getElementById("card-samantha")
var setaDireita = window.document.getElementById("seta-direito")

function RolarParaDireita() {
    Leonardo.style = "display: none"
    Bruna.style = "display: flex"
    setaEsquerda.style = "display: flex"
    setaDireita.style = "display: none"
}

function RolarParaEsquerda() {
    Leonardo.style = "display: flex"
    Bruna.style = "display: none"
    setaEsquerda.style = "display: none"
    setaDireita.style = "display: flex"
}