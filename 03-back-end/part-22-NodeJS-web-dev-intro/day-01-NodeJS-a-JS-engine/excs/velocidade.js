const readline = require('readline-sync');

const calcVelocidade = () => {
  const distancia = readline.questionInt('Qual a distância em metros?');
  const tempo = readline.questionInt('Qual o tempo em segundos?');

  const velocidadeMedia = (distancia / tempo).toFixed(2);

  console.log(`Sua velocidade média é de ${velocidadeMedia} m/s.`)
}

calcVelocidade();