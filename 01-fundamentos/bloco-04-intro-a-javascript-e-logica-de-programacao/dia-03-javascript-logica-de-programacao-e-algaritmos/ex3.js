// imprimir de um em um 
// se o asterisco é n entao espaços é n - 1


// for ( let index = 0 ; index < n ; index += 1){
//     console.log(space + symbol)
//     }
// var n = 4;
// const symbol = '*';
// let line = '';
// let space = ' '

// for (let index = 0 ; index < n ; index += 1){
//     line = symbol + line;
// } 
// for(let index = n ; index <= n ; index -= 1){
//     space = space + n
//     for ( let index = 0 ; index < n ; index += 1){
//         console.log(space + symbol)
//         }
//     }

var n = 4;
var symbol = '*';
var line = '';


for( let index = 0; index < n; index += 1){
     line = line + symbol;
     for( let indice = 0 ; indice <= n ; indice += 1){
         if(line < indice){
             
         } console.log(line);
     }
}
