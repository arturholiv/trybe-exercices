// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let numbers = [12, 2, 21, 54, 33,15]

function indiceDoMaior() {
    for(let number in numbers) {
       for(let i = 0; i < numbers.length; i += 1){
          if (number [i] > number [i-1]){
              return numbers[i]
          }
       }
    }
}

console.log(indiceDoMaior(numbers));