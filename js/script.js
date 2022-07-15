function calcularValorHora() {
  const salario = document.querySelector('#ganho-mes')
  const horasDia = document.querySelector('#horas-dia')
  const salarioHora = salario.value / (horasDia.value * 22)
  resposta.innerHTML = 'R$' + salarioHora.toFixed(2)
}
