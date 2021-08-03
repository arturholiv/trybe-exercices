// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false



//usar o split para dividir a string em um array 
// usar o reverse para mudar a ordem das letras do array e compara com o outro
//depois usar o join para juntar novamente e comparar as strings
// entao: SE a palavra .split  >>  array palavra .reverse >> array palavra .join for === a palavra ENTÃO retorna true


function verificaPalindrome(word){    
    let reverse = word.split("").reverse().join("");
    if(word === reverse){
        return true;
    } else { return false; }
}
console.log(verificaPalindrome('anna'));



