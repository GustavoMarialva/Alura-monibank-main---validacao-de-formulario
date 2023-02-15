const camposDoForlumario = document.querySelectorAll("[required]");
console.log(camposDoForlumario);

camposDoForlumario.forEach((campo) => {
  campo.addEventListener("blur", () => verificaCampo(campo));
  // blur gatilho qd vc tira o foco do input
});

function verificaCampo(campo) {}
