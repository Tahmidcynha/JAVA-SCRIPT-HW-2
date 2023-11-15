let onSwitch = document.querySelector(".btn")
let offSwitch = document.querySelector(".btn2")
let img = document.querySelector("img")

function trunOn(){
    img.src = "./img/on.jpg";
}
function trunOff(){
    img.src = "./img/off.jpg";
}

onSwitch.addEventListener("click", trunOn)
offSwitch.addEventListener("click", trunOff)
