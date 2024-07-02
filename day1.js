// variable declaration

//declaration
let user;
var user_1;

//initialisation
user="Abish";
user_1="Abish";

//declaration and initialization
const password = 123;
let username="Abish";
var rollno=1;

//reassignment
username="Abishrp";
rollno=3;

//redeclaration
var rollno;
var rollno=2;


//block scope

function print()
{
    let username = "RPAbish";
    const password=345;
    return {username,password,rollno};
}
console.log(print());

// global scope
var rollno=678;
function display()
{
    return {username,password,rollno};
}
console.log(display());



//Operators
//Arithmetic

let x=2,y=1;
let z=x+y;
console.log(z);
z=x-y;
console.log(z);
z=x*y;
console.log(z);
z=x%y;
console.log(z);
z=x/y;
console.log(z);
z=x**y;
console.log(z);

//Assignment
x+=1;
console.log(x);
x*=2;
console.log(x);

//Comparision

x=2;
y="2";
console.log(x==y);
console.log(x===y);
x>=y;
x<y;

//Logical

y=10;

console.log(x==2 && y==10);
x==2 || y==10;
!(x==2);


//bitwise
z=x&y;
console.log(z);
z=x|y;
console.log(z);
z=y<<x;
console.log(z);

//ternary
console.log(x==y?"hello":"hai");

//typeof
z= typeof x;
console.log(z);

//string 
x="Abish";
y="Hello";
z=x+y;
console.log(z);


//datatype
x=1;
z=typeof x;
console.log(z);
x="hello";
z=typeof x;
console.log(z);
x=true;
z=typeof x;
console.log(z);
x=BigInt(32134687489749879796556849);
z=typeof x;
console.log(z);
x=null;

z=typeof x;
console.log(z);
let t;

z=typeof t;
console.log(z);
x={one:"1",two:"2"};
z=typeof x;
console.log(z);
x=Symbol("hello");
z=typeof x;
console.log(z);