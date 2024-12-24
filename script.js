const nota1 = document.querySelector('.nota-1');
const nota2 = document.querySelector('.nota-2');
const nota3 = document.querySelector('.nota-3');
const nota4 = document.querySelector('.nota-4');
const btnCalcular = document.querySelector('.btn-calc');
const pResult = document.querySelector('.resposta');

const calcularMedia = () => {
  const media = (Number(nota1.value) + Number(nota2.value) + Number(nota3.value) + Number(nota4.value)) / 4;
  const resultado = (media * 0.2).toFixed(2);
  pResult.innerText = resultado;
}

btnCalcular.addEventListener('click', calcularMedia);
