function changeName (){
 let parag = document.getElementsByTagName("p")[0];
parag.innerHTML = 'Com um bom emprego ou projeto e morando em outra cidade'
}
changeName()

function changeBgcGreen (){
 let yellowBgc = document.getElementsByClassName("main-content")[0];
 yellowBgc.style.backgroundColor = 'rgba(76, 164, 109)';
}
changeBgcGreen()

function changeBgcWhite (){
let redBgc = document.getElementsByClassName('center-content')[0];
redBgc.style.backgroundColor = "white";
} 
changeBgcWhite()
changeBgcWhite
function changeTitle (){
 let title = document.getElementsByTagName("h1")[0];
 title.textContent = 'Exercício 5.1 - JavaScript'; 
}  
changeTitle()
function upperCase(){
 let upper = document.getElementsByTagName("p")[0]
 upper.innerHTML = upper.innerHTML.toUpperCase()
}
upperCase()