const camposDoFormulario = document.querySelectorAll("[required]");
console.log(camposDoFormulario);

camposDoFormulario.forEach((campo) => {
  campo.addEventListener("blur", () => verificaCampo(campo));
  // blur gatilho qd vc tira o foco do input
});

function verificaCampo(campo) {}
