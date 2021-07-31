// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . 

//fazer um quadrado de asteriscos n vezes
//
let n = 2
let symbol = '*'
let inputLine = '';

for ( let index = 0 ; index < n ; index += 1 ){
    inputLine = inputLine + symbol 
}
for ( let index = 0 ; index < n ; index += 1 ) {
    console.log(inputLine)
}

