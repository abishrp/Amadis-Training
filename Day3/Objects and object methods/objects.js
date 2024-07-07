//Objects
//declaration
//1.object literal

const carNew={ name:"AADI", "color detail":"white"};
console.log(carNew);

//2.new key
const bike=new Object();
console.log(bike);

//Access object
//1.dot
console.log(carNew.name);
//2.square bracket
console.log(carNew["color detail"]);
//3.expression
x="name";
console.log(carNew[x]);

//Add properties
bike.name="royal enfield";

//Add method
bike.accelerate = function()
{       
    return (`${this.name}`); 
}

console.log(bike);
console.log(bike.accelerate());


//complex object
const details =
{
    myname :"abish",
     dept:"ece",
     course: {java :"beginner", c:"not know", javascript:"beginner"}
    
}
console.log(details);
//delete object property
delete details.course;
console.log(details);

//function in method with return and this

bike.realName=function()
{
    return this.name +" "+"360";
}
console.log(bike);
console.log(bike.realName());


//object methods
//1.merge

Object.assign(details,bike);
console.log(details);

//2.clone

const info =Object.assign({},details);
console.log(info);

//destructuring objects and default object value
const {myname,dept,course="ece"}=details;
console.log(myname);
console.log(course);

//destructure myname to myName
const {myname:myName}=details;
console.log(myname);
console.log(details);
