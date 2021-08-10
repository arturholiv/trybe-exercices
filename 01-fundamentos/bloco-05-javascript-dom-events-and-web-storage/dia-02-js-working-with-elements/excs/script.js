
//exercise 2
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta').parentElement;
elementoOndeVoceEsta.style.background = 'blue';

//exercise 3
const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
primeiroFilhoDoFilho.innerHTML = 'Artur Henrique The Best';

//exercice 4
const pai = document.getElementById('pai');
pai.firstElementChild.innerHTML;

//exercise 5
const antElem = elementoOndeVoceEsta.previousElementSibling;

//exercise 6
const proxElem  = elementoOndeVoceEsta.nextElementSibling;

//exercise 7
const thirdChild = elementoOndeVoceEsta.nextElementSibling.nextElementSibling

//exercise 8
const thirdChildByParent = pai.lastElementChild.previousElementSibling

//Dinamic HTML add 
// exc 1

const irmaoElementoOndeVoceEsta = pai.createElement('section');
irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';
pai.appendChild(irmaoElementoOndeVoceEsta);

//exc 2

const filhoElementoOndeVoceEsta = document.createElement('section');
filhoElementoOndeVoceEsta.id = filhoElementoOndeVoceEsta;
elementoOndeVoceEsta.appendChild = (filhoElementoOndeVoceEsta);

//exc 3

const filhoPrimeiroFilhoDoFilho = document.createElement('section');
filhoPrimeiroFilhoDoFilho.id = filhoPrimeiroFilhoDoFilho;
primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);

//exc 4

filhoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;

//remove exercice

const paiDoPai = document.getElementById('paiDoPai');
paiDoPai.removeChild(primeiroFilho)

