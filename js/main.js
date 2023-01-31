const controle = document.querySelectorAll("[data-controle]")

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
    })
})

function manipulaDados(operacao, controle) {
    // const reNum = /\d/g
    const peca = controle.querySelector("[data-contador]")

    if(isNaN(peca.value) === true || peca.value < 0){
        peca.value = "00"
    }
    else if(operacao === "-" && parseInt(peca.value) > 0 ) {
        if(parseInt(peca.value) === 1){
            peca.value = "00"
        } else {
            peca.value = parseInt(peca.value) - 1
        }
    } else if (operacao === "+") {
        peca.value = parseInt(peca.value) + 1
    }

    if (parseInt(peca.value) < 10 && parseInt(peca.value) >= 1){
        peca.value = "0"+peca.value
    }
}