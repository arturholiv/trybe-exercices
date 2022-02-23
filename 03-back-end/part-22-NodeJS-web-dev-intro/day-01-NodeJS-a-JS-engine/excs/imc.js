const readline = require('readline-sync');

const calcImc = () => {

  const peso = readline.questionInt('Qual o seu peso? (em kg)');
  const altura = readline.questionInt('Qual a sua altura? (em cm)');

  console.log(` Peso: ${peso}, Altura: ${altura}`);
  const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);

  console.log(`Seu IMC é: ${imc} `)
  console.log(` `)
  console.log("Diz-se que o indivíduo tem peso normal quando o resultado do IMC está entre 18,5 e 24,9.")
}

calcImc()