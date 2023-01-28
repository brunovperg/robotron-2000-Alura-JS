// let lista = ["Laranja", "Vermelho", "Branco", "Amarelo", "Rosa"];

// lista = lista.filter(cor => (cor !== "Vermelho") && ( cor !== "Rosa"))

// console.log(lista)

const controle = document.querySelectorAll(".controle-ajuste");

controle.forEach((elemento) => {
  elemento.addEventListener("click", (evento) => {
    (manipulaDados(evento.target.textCont, evento.target.parentNode));
  });
});

function manipulaDados(operacao, controle) {
  const peca = controle.querySelector(".controle-contador");
  if (operacao === "-" && parseInt(peca.value) > 0) {
    peca.value = parseInt(peca.value) - 1;
  } else if (operacao === "+") {
    peca.value = parseInt(peca.value) + 1;
  }
}
