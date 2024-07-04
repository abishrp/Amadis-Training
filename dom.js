

//tagname
const tag = document.getElementsByTagName('h1');
tag[0].innerHTML="Tag Name";
//classname
const class1 = document.getElementsByClassName('class');
class1[0].innerHTML="class 1 modified";
//querySelector //querySelectorAll
//by id
const value = document.getElementById("para");
//add style
value.style.backgroundColor="grey";
//setAttribute method
tag[0].setAttribute('class','container');
//remove and add class by classlist
// tag[0].classList.remove("container");
// tag[0].classList.add("container1");

tag[0].setAttribute('class','container1');




