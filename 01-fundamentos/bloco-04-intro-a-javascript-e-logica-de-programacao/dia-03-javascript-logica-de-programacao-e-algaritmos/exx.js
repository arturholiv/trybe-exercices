// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// // let sum = 0;
// // let average = 0;
// // let highestValue = numbers[0];
// let evenValues = 0;
// // for(let index = 0; index < numbers.length; index += 1) {
// //     console.log(numbers)
// // }

// // for(let index = 0; index < numbers.length; index += 1){
// //   sum += numbers[index]
// // }
// // average = sum / numbers.length;

// // if(average > 20){
// //     console.log("valor maior que 20")
// // } else {console.log("valor menor ou igual  a 20")}

// // for(let index = 0; index < numbers.length; index += 1){
    
// //     if (highestValue < numbers[index]){
// //         highestValue = numbers[index]
// //         console.log(highestValue)
// //     }
// // }

// // for(let index = 0; index < numbers.length; index += 1){
// //     if ( numbers[index] % 2 !== 0 ){
// //        evenValues += 1;
// // }
// // }
// // if (evenValues % 2 === 0){
// //     console.log("nenhum valor impar encontrado")
// // } else {console.log(evenValues)}
// let array = []


// // quero que conte de 1 ate 25.... 
// //quero que cada valor desses vá para a variavel array
// //imprimir o array

// for(let index = 1; index < 26; index += 1){
//     array.push(index);console.log(array[index]/2)
// }

    

let n = 2
let symbol = '*'
let inputLine = '';

for ( let index = 0 ; index < n ; index += 1 ){
    inputLine = inputLine + symbol 
}
for ( let index = 0 ; index < n ; index += 1 ) {
    console.log(inputLine)
}
