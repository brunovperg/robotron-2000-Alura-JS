const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
const pecaTag = document.querySelectorAll("[data-contador]");
const pecas = {
  bracos: {
    forca: 29,
    poder: 35,
    energia: -21,
    velocidade: -5,
  },

  blindagem: {
    forca: 41,
    poder: 20,
    energia: 0,
    velocidade: -20,
  },
  nucleos: {
    forca: 0,
    poder: 7,
    energia: 48,
    velocidade: -24,
  },
  pernas: {
    forca: 27,
    poder: 21,
    energia: -32,
    velocidade: 42,
  },
  foguetes: {
    forca: 0,
    poder: 28,
    energia: 0,
    velocidade: -2,
  },
};
controle.forEach((elemento) => {
  elemento.addEventListener("click", (evento) => {
    manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
    atualizaEstatistica();
  });
});

function manipulaDados(operacao, controle) {
  const peca = controle.querySelector("[data-contador]");

  if (isNaN(peca.value) === true || peca.value < 0) {
    peca.value = "00";
  } else if (operacao === "-" && parseInt(peca.value) > 0) {
    if (parseInt(peca.value) === 1) {
      peca.value = "00";
    } else {
      peca.value = parseInt(peca.value) - 1;
    }
  } else if (operacao === "+") {
    peca.value = parseInt(peca.value) + 1;
  }

  if (parseInt(peca.value) < 10 && parseInt(peca.value) >= 1) {
    peca.value = "0" + peca.value;
  }
}

function atualizaEstatistica() {
  estatisticas.forEach((elemento) => {
    elemento.textContent = 0;
    pecaTag.forEach((peca) => {
      const pecaNome = peca.dataset.peca;
      const pecaContador = peca.value;
      const estatistica = elemento.dataset.estatistica;
      elemento.textContent =
        parseInt(elemento.textContent) +
        pecas[pecaNome][estatistica] * pecaContador;
    });
  });
}
