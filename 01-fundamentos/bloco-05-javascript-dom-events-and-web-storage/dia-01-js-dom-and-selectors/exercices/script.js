document.getElementById("header-container").style.color = 'white';
document.getElementById("header-container").style.backgroundColor = '#6CC28D';

const urgent = document.getElementsByClassName("emergency-tasks")[0];
const notUrgent = document.getElementsByClassName("no-emergency-tasks")[0]

urgent.style.backgroundColor = "#EE9D83"
notUrgent.style.backgroundColor = "#F9DB5E"

urgent.style.color = 'white';
notUrgent.style.color = 'white';

document.getElementsByClassName("urgent-titles")[0].style.backgroundColor = 'purple';
document.getElementsByClassName("urgent-titles")[1].style.backgroundColor = 'purple';
document.getElementsByClassName("not-urgent-titles")[0].style.backgroundColor = 'black';
document.getElementsByClassName("not-urgent-titles")[1].style.backgroundColor = 'black';

var footer = document.getElementById("footer-container")
footer.style.backgroundColor = '#3D495C'
