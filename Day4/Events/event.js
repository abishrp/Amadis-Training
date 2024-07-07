//click event
const button=document.querySelector(".button");
button.addEventListener("click",click);
function click() {

    button.innerHTML="clicked";
}
//copy
button.addEventListener("copy",copy);
function copy() {

    button.innerHTML="copied";
}
//cut
button.addEventListener("cut",cut);
function cut() {

    button.innerHTML="cut";
}
//resize
window.addEventListener("resize",resize)
function resize() {

    button.innerHTML="resized";
}
//afterprint
window.addEventListener("afterprint",afterprint)
function afterprint() {

    button.innerHTML="printed";
}
//beforeprint
window.addEventListener("beforeprint",beforeprint)
function beforeprint() {

    button.innerHTML="printing going to start";
}
//blur
const input=document.querySelector(".input");
input.addEventListener("blur",blur);
function blur() {

    button.innerHTML="blur";
}
//change
const input1=document.querySelector(".input1");
input1.addEventListener("change",change);
function change() {

    button.innerHTML="change";
}
//keypress
input.addEventListener("keypress",keypress);
function keypress() {

    button.innerHTML="keypress";
}
//keyup
input1.addEventListener("keyup",keyup);
function keyup() {

    button.innerHTML="keyup";
}
//keydown
input1.addEventListener("keydown",keydown);
function keydown() {

    button.innerHTML="keydown";
}
//focus
input.addEventListener("focus",focus);
function focus() {

    button.innerHTML="focus";
}
button.addEventListener("mouseover",mouseover);
function mouseover() {

    button.innerHTML="mouseover";
}
button.addEventListener("mouseout",mouseout);
function mouseover() {

    button.innerHTML="mouseout";
}





