const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

/*
 Crie uma função que adicione a classe 'tech' ao elemento selecionado;
1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
2. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';
 Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
1. Que tal redirecionar para seu portifólio?
Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/
function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target, que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.

//exc 1
const listItem = document.getElementsByTagName('li');
const techClass = document.querySelector('.tech');

function addClassTech(event){
  techClass.classList.remove('tech');
event.target.classList.add('tech');
  input.value = '';
}

firstLi.addEventListener('click', addClassTech);
secondLi.addEventListener('click', addClassTech); 
thirdLi.addEventListener('click', addClassTech);  

//exc 2
//2. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento com a classe 'tech';
input.addEventListener('input', function (event){
techClass.innerText = event.target.value;   
});
//exc 3 
myWebpage.addEventListener('dblclick', function() {
  window.location.replace('https://arturholiv.github.io/');
});

//exc5

myWebpage.addEventListener('mouseover', function(){
  myWebpage.style.color = 'blue';
})