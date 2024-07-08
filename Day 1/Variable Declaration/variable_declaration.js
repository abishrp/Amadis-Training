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

function user()
{
    let username = "RPAbish";
    const password=345;
    return {username,password,rollno};
}
console.log(user());

// global scope
var rollno=678;
function display()
{
    return {username,password,rollno};
}
console.log(display());