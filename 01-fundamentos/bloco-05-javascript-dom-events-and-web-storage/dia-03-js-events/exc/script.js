function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function createDaysOfTheMonth() {
      let daysList = document.querySelector('#days');

for (let index = 0; index < dezDaysList.length ; index += 1){ 
    var day = dezDaysList[index];  
    let newListItem = document.createElement('li');

      if( day === 24 || day === 31){
          
        newListItem.className = 'day holiday';
        newListItem.innerHTML = day;
        daysList.appendChild(newListItem);
      } else if (day === 4 || day === 11 || day === 18){
        newListItem.className = 'day friday';
        newListItem.innerHTML = day;
        daysList.appendChild(newListItem);
    } else if ( day === 25){
          newListItem.className = 'day friday holiday';
          newListItem.innerHTML = day;
          daysList.appendChild(newListItem);
      } else {
          newListItem.className = 'day'
        newListItem.innerHTML = day;
        daysList.appendChild(newListItem);
      }
      }
  }

  createDaysOfTheMonth();

//exc 2

  function createButtonHoliday(btnName) {
var newButtonHoliday = document.createElement('button');
var buttonsContainer = document.querySelector('.buttons-container');


newButtonHoliday.innerText = btnName;
buttonsContainer.appendChild(newButtonHoliday);
newButtonHoliday.id = 'btn-holiday';
}

var feriadosButton = createButtonHoliday('Feriados');

//exc 3
function changeHolidayBgc(){
let holidayButton = document.querySelector('#btn-holiday');
let holidayClass = document.querySelectorAll('.holiday');
let bgcHoliday =  'rgb(238, 238, 238)';
let bgc = 'white'

holidayButton.addEventListener('click',function (){
for(let i = 0; i < holidayClass.length; i += 1){
    if(holidayClass[i].style.backgroundColor === bgc){
        holidayClass[i].style.backgroundColor = bgcHoliday;
    } else {
    holidayClass[i].style.backgroundColor = bgc;
    }
}

})
}
changeHolidayBgc();

//exc 4

function createButtonfriday (btnName) {
var newButtonFriday = document.createElement('button');
var buttonsContainer = document.querySelector('.buttons-container');

newButtonFriday.innerHTML = btnName;
newButtonFriday.id = 'btn-friday';
buttonsContainer.appendChild(newButtonFriday);
}
 
createButtonfriday('Sexta-Feira')

//exc 5
function sextou (string){
var buttonFryday = document.querySelector('#btn-friday');
var fridayz = document.querySelectorAll('.friday');
var fridayText = `it's friday then`;

buttonFryday.addEventListener('click', function (){
for (let i = 0; i < fridayz.length; i += 1){
if (fridayz[i].innerHTML !== fridayText){
    fridayz[i].innerHTML = fridayText;
} else{
    fridayz[i].innerHTML = string[i];
}
}
})
}
var blink = [4, 11, 18, 25];
sextou(blink);

//exc 6

var monthDay = document.querySelector('#days');

function zoom (){
monthDay.addEventListener('mouseover', function(event){
    event.target.style.fontSize = '25px';
});
}


function unzoom (){
    monthDay.addEventListener('mouseout', function(event){
        event.target.style.fontSize = '15px';
    });
}


zoom();
unzoom();


//exc 7 

function handleTasks(taskName){
let task = document.createElement('span');
let myTasks = document.querySelector('.my-tasks');

task.innerHTML = taskName;
myTasks.appendChild(task);
}

handleTasks('cozido')

//exc 8 
var colore = 'blue'

function handleTaskColor (cor){
let myTasks = document.querySelector('.my-tasks')
let taskColor = document.createElement('div');

taskColor.className = 'task';
taskColor.style.backgroundColor = cor;

myTasks.appendChild(taskColor)
}

handleTaskColor(colore)

//exc 9 

function taskSelecting(){
var colorTask = document.querySelector('.task');
var selected = document.getElementsByClassName('task selected')

colorTask.addEventListener('click', function (event){
   if(selected.length === 0 ){
       event.target.className = 'task selected';
   } else {
       event.target.className = 'task'
   }

})}

taskSelecting();

//exc 10 

function dayColor (cor){
var diaDoMes = document.querySelector('#days');
var corPadrao = 'rgb(119,119,119)';
var corDeFundo = diaDoMes.style.color;
var selected = document.getElementsByClassName('task selected');

diaDoMes.addEventListener('click', function (event){
 if(selected.length > 0 && corDeFundo !== cor ){
     event.target.style.color = cor
 } else  {
  event.target.style.color = corPadrao
 }
})
}

dayColor(colore);