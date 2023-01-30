const controle = document.querySelector("[data-controle]")

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode)
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")

    if(operacao === "-" && parseInt(peca.value) > 0) {
        peca.value = parseInt(peca.value) - 1
    } else if (operacao === "+") {
        peca.value = parseInt(peca.value) + 1
    }
}