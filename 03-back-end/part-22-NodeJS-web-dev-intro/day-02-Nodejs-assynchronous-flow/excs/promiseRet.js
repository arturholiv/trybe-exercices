function promiseRet(a, b, c) {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number')
    reject('Informe apenas números');

    const result = (a + b) * c;
    
    if (result < 50) {
      return reject('Valor muito baixo');
    }
    
    resolve(result);
  })
}

function randomNumber() {
  return Math.floor(Math.random() * 100 + 1)
}

function getRandomNumbers() {
  const randomNumbersArray = Array.from({length: 3}).map(randomNumber);
  promiseRet(...randomNumbersArray)
    .then(resolve => console.log(resolve))
    .catch(error => console.log(error))
}

getRandomNumbers();