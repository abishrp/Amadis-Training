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

//looping statements

//for loop
// print natural numbers
for (let i = 0; i < 10; i++) {
  console.log(i);
}

//for in loop
//print the index of array and keys in object

const car = { color: "black", brand: "BMW" };
const fruits = ["apple", "orange", "grapes"];

for (let i in car) {
  console.log(i);
}
for (let i in fruits) {
  console.log(i);
}

//print values of array and object


for (let i in car) {
    console.log(car[i]);
  }
  for (let i in fruits) {
    console.log(fruits[i]);
  }

  //forEach in arrays to display values , index, array

  fruits.forEach(function display(values,index,array) {
    console.log(values+" "+index+" "+array)
    
  })

  //for of

  //for of loop in arrays to display values
  for (let i of fruits) {
    console.log(i);
  }

//for of loop in objects to display values
for (let [key,value] of Object.entries(car)) {
    console.log(key+" "+value);
  }
  //for of in strings
  let str="hello";
  for (let i of str) {
    console.log(i);
  }


//while loop
//to display natural numbers
let i=0;
while(i<10)
    {
        console.log(i);
        i++
    }

    //do while
    // i=10;
    do{
        console.log(i);
    }
    while(i>10)
    





  
