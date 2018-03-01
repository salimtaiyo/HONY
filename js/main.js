//foooter bg color change
let footer = document.querySelector(".footer"); //selecting the footer

function change(eve) {
    let x = eve.clientX;  //gets the x coordinate of the mouse
    let y = eve.clientY; //gets the y coordinate of the mouse 
    console.log(x + ',' + y); //logging the values of x and y to the console
    console.log(eve); //logging the 
    footer.style.backgroundColor = `rgba( ${x},${y}, ${x} , .4)`; //placing the x and y in rgba, changes the bg color
}
footer.addEventListener('mousemove', change);

//play pause video
let playPause = document.getElementById('playPause'); //selecting the play and pause button  
let videoPlay = document.getElementById('branVideo'); //selecting the video 

function videoControls() {
    if (videoPlay.paused) {  
        videoPlay.play();
        playPause.innerHTML = "&#9658;";
        playPause.style.transition="all 1s";
    } else {
        playPause.innerHTML = "&#9616;&#9616;";
        videoPlay.pause();
        playPause.style.transition="all 1s";
    }
}

playPause.addEventListener('click',videoControls);


//first modal
var a = document.querySelector('.modal__stories');  //selcting the modal
var btnOne = document.getElementById('close--modal--one');  //selecting the close modal button
var pOne = document.getElementById('read'); //selecting the read button for the modal to pop out 
function one() {
    a.style.display = "block";
}
function oneClose() {
    a.style.display = 'none';
}
function oneClose() {
    a.style.display = 'none';
}
pOne.addEventListener('click', one);
btnOne.addEventListener('click', oneClose);

//second modal
var b = document.querySelector('.modal__stories--two');
var btnTwo = document.getElementById('close--modal--two');
var pTwo = document.getElementById('readTwo');

function two() {
    b.style.display = "block";
}

function twoClose() {
    b.style.display = 'none';
}

pTwo.addEventListener('click', two);
btnTwo.addEventListener('click', twoClose);

//third modal
const c = document.querySelector('.modal__stories--three');
const btnThree = document.getElementById('close--modal--three');
const pThree = document.getElementById('readThree');

function threeClose() {
    c.style.display = 'none';
}

function three() {
    c.style.display = "block";
}

pThree.addEventListener('click', three);
btnThree.addEventListener('click', threeClose);

//fourth modal
let d = document.querySelector('.modal__stories--four');
let btnFour = document.getElementById('close--modal--four');
let pFour = document.getElementById('readFour');
pFour.addEventListener('click', four);
btnFour.addEventListener('click', fourClose);

function fourClose() {
    d.style.display = 'none';
}
function four() {
    d.style.display = "block";
}