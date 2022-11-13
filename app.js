let menuToggle =document.querySelector('.menuToggle');
let group = document.querySelector('.group');
let body = document.querySelector('body');

menuToggle.onclick = function(){
    group.classList.toggle('open');
    body.classList.toggle('start')
    console.log("hi")
}
