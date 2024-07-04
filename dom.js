

//tagname
const tag = document.getElementsByTagName('h1');
//innerHTML
tag[0].innerHTML="Tag Name";
//classname
const class1 = document.getElementsByClassName('class');
class1[0].innerHTML="class 1 modified";
//querySelector 
const query = document.querySelector("#para");
query.innerHTML="hello";
//querySelectorAll
const queryAll = document.querySelectorAll(".class");
queryAll[1].style.backgroundColor="blue";

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




//dom body
const b = document.querySelector(".body");
b.innerHTML=document.body.innerHTML;
b.innerHTML=document.documentElement.innerHTML;

//DOM navigation
b.innerHTML= value.childNodes[0].nodeValue;

//DOM Nodetype
b.innerHTML= value.childNodes[0].nodeType;

//DOM NODES
//create element
const create = document.createElement('p');


//create Textnode
const text = document.createTextNode("This is create text node");
//appendChild
create.appendChild(text);
document.body.appendChild(create);

//removeChild
document.body.removeChild(tag[0]);

//repace Child



