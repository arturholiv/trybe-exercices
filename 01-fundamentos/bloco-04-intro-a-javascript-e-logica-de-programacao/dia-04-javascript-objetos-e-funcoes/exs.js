let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

let player ={
    name: 'Marta', lastName: 'Silva', age: 34, medals:{
        golden: 2, silver: 3
    }, bestInTheWorld:{
        anos:[2006, 2007, 2008, 2009, 2010, 2018]
    }
    
}  

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.')

console.log('A jogadora ' + player.name + ' ' + player.lastName + 
' foi eleita a melhor do mundo por 6 vezes nos anos de '
 + player.bestInTheWorld.anos + ' ' + 'e possui 5 medalhas sendo  ' 
 + player.medals.golden + ' de ouro e ' + player.medals.silver + ' de prata.')   