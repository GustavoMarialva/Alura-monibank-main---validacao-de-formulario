export default function ehMaiorDeIdade(campo) {
  const dataNascimento = new Date(campo.value);
  validaIdade(dataNascimento);
  console.log(validaIdade(dataNascimento));
}

// new Date recebe o valor da data e traduz para uma maneira que o js entenda
function validaIdade(data) {
  const dataAtual = new Date();
  const dataMais18 = new Date(
    data.getUTCFullYear() + 18,
    data.getUTCMonth(),
    data.getUTCDate()
  );

  return dataAtual >= dataMais18;
}
