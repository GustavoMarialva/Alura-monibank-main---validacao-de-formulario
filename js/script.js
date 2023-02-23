import ehUmCPF from "./valida-cpf.js";
import ehMaiorDeIdade from "./validaIdade.js";
const camposDoFormulario = document.querySelectorAll("[required]");
console.log(camposDoFormulario);

camposDoFormulario.forEach((campo) => {
  campo.addEventListener("blur", () => verificaCampo(campo));
  // blur gatilho qd vc tira o foco do input
});

function verificaCampo(campo) {
  if (campo.name == "cpf" && campo.value.length >= 11) {
    ehUmCPF(campo);
  }
  if (campo.name == "aniversario" && campo.value != "") {
    ehMaiorDeIdade(campo);
  }
}
