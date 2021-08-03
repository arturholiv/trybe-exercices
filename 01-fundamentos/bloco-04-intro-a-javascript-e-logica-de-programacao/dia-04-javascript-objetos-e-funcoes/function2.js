// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

//passar de elemento em elemento no array >> verificar qual é o maior >> retornar o maior valor;;;

var numbersArray = [12, 2, 21, 54, 33,15]

function higherNumber (numbersArray) {
   let numbers = numbersArray.join()
   numbers = numbers.sort()
  for (let index = 0; index < numbersArray.length; index += 1)
    for(let number of numbersArray){
        if (number > numbersArray[index]){
            return number
        }
    }
}

// console.log(higherNumber(numbers))

console.log(numbers.join().sort())