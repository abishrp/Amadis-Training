// Functions
//Types

//Function definition

//1.Function without return type
//a.Without Parameter function

function display() {
    console.log("Hello everyone");
}

//b. With Parameter function

function sumOfTwoNumbers(a, b) {
    console.log(a + b);
}

//2.Function with return type
//a.Without Parameter function

function sumOfOneAndTwo() {
    return 5 + 6;
}

//b. With Parameter function

function divisionOfTwoNumbers(a, b) {
    return a / b;
}

//Function call
display();

sumOfTwoNumbers(5, 6);

let x = sumOfOneAndTwo();
console.log(x);

x = divisionOfTwoNumbers(10, 2);
console.log(x);

//Function declaration using variables(with expression)
const print = function () {
    console.log("printed.....")
}
print();

//Default function

function multiply(a, b = 1) {
    let c = a * b;
    return c;
}

console.log(multiply(10));
console.log(multiply(10, 10));


//Rest parameter function

function printAll(a, ...b) {
    console.log(a + "hello");
    console.log(b);
}

printAll(1, 2, 3, 4, 5, 6, 7, 8, 9);

//Arrow function
//one line
x = (a, b) => a + b;    //not use return 
console.log(x(2, 3));

//multi line

x = (a, b) => {
    let z = a + b + 20;
    console.log(z);
}
x(2, 3);

//Nested function
//only outerblock executed
function outer() {
    console.log("outer");
    function inner() {
        console.log("inner");
    }
}
outer();

//both inner and outer gets executed
function outerNew() {
    console.log("outer");
    function innerNew() {
        console.log("inner");
    }
    innerNew();
}
outerNew();

/*function oNew() {
    console.log("outer");
    function iNew() {
        console.log("inner");
    }
    
}
iNew();
oNew();
*/

//the above thing give error as the scope is inside for inner

//Scope
//variable declaration accessed only within scope
//even var variablewithin function scope cannot be accessed outside

let car_name = "Aadi"

function car() {
    let model = 2020;
    console.log(car_name + " " + model);
}
car();

//closure
function out(x) {
    function inn(y) {
        return x + y;
    }
    return inn;
}

let result =out(10);
console.log(result);
console.log(result(10));

//callback
let isTrue=true;
function hello(hi)
{
    if(isTrue)
        {
            hi();
        }
}

hello(function()
{
    console.log("hi");
})
hello(function()
{
    console.log("hello")
}

)

//Higher order function
//using return another function

function higher()
{
    return function lower()
    {
        console.log("higher");
    }
}

const highervar = higher();
console.log(highervar);
highervar();


//pure function



//Immediate Invoke Function Expressions

(
    function ()
    {
        console.log("IIFE")
    }
)()

// Function to calculate factorial using recursion
function factorial(n) {
    // Base case
    if (n === 0 || n === 1) {
        return 1;
    } else {
        // Recursive case
        return n * factorial(n - 1);
    }
}

console.log(factorial(5));