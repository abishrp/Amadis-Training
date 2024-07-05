
// import { Message } from "./es6importmodule.js";

//let and const
console.log("let and const:");
let x = 10;
if (x == 10) {
    let x = 20;
    console.log(x); // 20
}
console.log(x); // 10

//default parameter
console.log("default parameter:");
function say(message = 'Hi') {
    console.log(message);
}

say(); //Hi
say('Hello'); //Hello

//arrow function
console.log("arrow function:");
x = (x, y) => x * y;
console.log(x(5, 6)); //30
x = (x, y) => { return x * y };
console.log(x(5, 7)); //35

//object destructue
// Create an Object
console.log("object destructue:");
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
// Destructuring Assignment
let { firstName: name, age } = person;
console.log(name + " is " + age + " years old.");

//spread operator
console.log("spread operator:");
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year);

const numbers = [4, 9, 16, 25, 29];
let maxValue = Math.max(...numbers);
console.log(maxValue);

//for of
//in array
console.log("for of:");
const cars = ["BMW", "Volvo", "Mini"];

for (let x of cars) {
    console.log(x);
}
//in string
let language = "JavaScript";
for (let x of language) {
    console.log(x);
}

//maps
console.log("maps:");
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

let numb = fruits.get("apples");
console.log(numb);
//setting value
fruits.set("apples", 200);

numb = fruits.get("apples");
console.log(numb);

//set
console.log("Set");
//const letters = new Set();
const letters = new Set(["a", "b", "c"]);
// Add Values
letters.add("a");
letters.add("b");
letters.add("c");

console.log(letters);
console.log(letters.size);

//class
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);
console.log(myCar1.name + " " + myCar2.name);

//Promises

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let x = "Anto";
        if (x) {
            resolve(x);
        } else {
            reject(new Error("error data"));
        }
    }, 5000
    )

})
promise.then((value) => {
    console.log("Promises:");
    console.log(value);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("finished");
})


//Symbol
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
// };
console.log("Symbol:");

let id = Symbol('id');
person[id] = 140353;
person[id] = "hd";
console.log(person[id] + " " + person.id);
console.log(person);

//Rest parameter
console.log("Rest Parameter:");
function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}

x = sum(4, 9, 16, 25, 29, 100, 66, 77);
console.log(x);

//string
let text = "Hello world, welcome to the universe.";
console.log(text.includes("world"));
console.log(text.startsWith("H"));
console.log(text.endsWith("."));

//Array entries
const fruit = ["Banana", "Orange", "Apple", "Mango"];
const f=fruit.entries();
console.log(f);
for (let x of f) {
    console.log(x);
  }
console.log(Array.from("ABCDEFG"));


//const fruit = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruit.keys();

for (let x of keys) {
    console.log(x); 
}
//const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);
//Array find
function myFunction(value, index, array) {
  return index > 1;
}
console.log(first);
//Array findIndex
first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(first);
//Math methods
x=Math.trunc(4.9);
console.log(x);   // returns 4
x=Math.trunc(4.7);
console.log(x);     // returns 4
x=Math.trunc(4.4);
console.log(x);     // returns 4
x=Math.trunc(4.2); 
console.log(x);    // returns 4
x=Math.trunc(-4.2);    // returns -4

x=Math.sign(-4);
console.log(x);     // returns -1
x=Math.sign(0);    // returns 0
console.log(x); 
x=Math.sign(4);  
console.log(x);   // returns 1

x=Math.cbrt(8); 
console.log(x);    // returns 2
x=Math.cbrt(64);
console.log(x);     // returns 4
x=Math.cbrt(125); 
console.log(x);    // returns 5

x=Math.log2(3);
console.log(x);     // returns 1  

x=Math.log10(10); 
console.log(x);    // returns 1

//Number
console.log(Number.EPSILON); 
console.log(Number.MIN_SAFE_INTEGER); 
console.log(Number.MAX_SAFE_INTEGER); 

console.log(Number.isInteger(10.5));
console.log(Number.isSafeInteger(12345678901234567890));  
console.log(isFinite(10/0));
console.log(isNaN("Hello"));


//import module

// const msg = new Message();
// msg.message();


// class

class Student {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age(x) {
      return x - this.year;
    }
  }
  
  const date = new Date();
  const year1 = date.getFullYear();
  
  const stu = new Student("Abish", 2003);
  console.log(stu.age(year1))








