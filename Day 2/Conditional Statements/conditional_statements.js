//conditional statements

//if else if else

// U/A cinema entry

let age = 18;
if (age < 13) {
  console.log("Not Allowed");
} else if (age >= 13 && age < 18) {
  console.log("Allowed with parents");
} else {
  console.log("Allowed");
}

//switch case

//calc
// 1. addition 2. subtraction 3. division 4.multiplication

let a, b;
choice = 3;
function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function div(a, b) {
  return a / b;
}
function mul(a, b) {
  return a * b;
}
switch (choice) {
  case 1:
    console.log(add(10, 2));
    break;
  case 2:
    console.log(sub(10, 2));
    break;
  case 3:
    console.log(div(10, 3));
    break;
  case 4:
    console.log(mul(10, 5));
    break;

  default:
    console.log("wrong option");
    break;
}