var tagH1 = document.createElement('h1');
tagH1.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(tagH1);

//exc 2
var mainElement = document.createElement('main');
mainElement.className = 'main-content';
document.body.appendChild(mainElement);

//exc 3
var sectionCenter = document.createElement('section');
sectionCenter.className = 'center-content';
mainElement.appendChild(sectionCenter);

//exc 4
var paragraph = document.createElement('p');
paragraph.innerText = 'Faça tudo o que te faz feliz';
sectionCenter.appendChild(paragraph);

//exc 5 
var leftSection = document.createElement('section');
leftSection.className = 'left-content';
mainElement.appendChild(leftSection);

//exc 6
var rightSection = document.createElement('section');
rightSection.className = 'right-content';
mainElement.appendChild(rightSection);

//exc 7 
var image = document.createElement('img');
image.src = 'https://picsum.photos/200';
image.className = 'smallName';
leftSection.appendChild(image);

//exc 8
var unorderedList = document.createElement('ul');
rightSection.appendChild(unorderedList)
var counting = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
for(let num in counting){
    var elementoLista = document.createElement('li');
    elementoLista.innerText = counting[num];
    unorderedList.appendChild(elementoLista);
}
 console.log(unorderedList)

//exc 9
let titleH3 = document.createElement('h3')
for(let i = 0; i <= 3 ; i += 1){
    mainElement.appendChild(titleH3[i])
}



//2nd exc
//exc 1
tagH1.className = 'title';

//exc 2 
titleH3.className = 'description';

//exc 3
[0].main.removeChild(leftSection);

//exc 4
document.getElementsByClassName('right-content')[0].style.marginRight = 'auto';

//exc 5
document.getElementsByClassName('center-content')[0].parentNode.style.backgroundColor = 'rgb(76, 164, 109)';

//exc 6
document.getElementsByTagName('ul').removeElement().lastElementChild.lastElementChild;

