function calcular() {
  const valorHora = document.querySelector('#valor-hora')
  const horasProjeto = document.querySelector('#horas-projeto')
  const valorProjeto = valorHora.value * horasProjeto.value
  resposta.innerHTML = 'R$ ' + valorProjeto.toFixed(2)
}
