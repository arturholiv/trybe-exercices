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

promiseRet(10, 10, 10)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))

promiseRet(1, 1, 'a')
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))

promiseRet(1, 1, 1)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))