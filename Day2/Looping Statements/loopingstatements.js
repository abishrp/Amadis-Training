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
      
  