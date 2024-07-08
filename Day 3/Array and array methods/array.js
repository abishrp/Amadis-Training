//Arrays

//array declaration
const cars = new Array("Saab", "Volvo", "BMW");
const veg = ["carrot","potato","tomato"];
const num=[[1,2],[3,4],[5,6]]
//access
console.log(cars[0]);

//loops
//for
for(let i=0;i<cars.length-1;i++)
    {
        console.log(cars[i]);
    }
//for Each ,for of, for in can be used

//methods

//convert to string
console.log(cars.toString());
//length
console.log(cars.length);
//sort
console.log(cars.sort());

//add
console.log(cars.push("AADi"));

//delete
console.log(cars.pop());
console.log(cars);

//at
console.log(cars.at(1));
//join returns string with separator
console.log(cars.join("*"));
//shift
console.log(cars);
console.log(cars.shift());
console.log(cars);
//unshift
console.log(cars.unshift("BMW"));
console.log(cars);
//merge note: after merging the value unchanges
//doesnot affect source array
console.log(cars.concat(veg));
console.log(cars);
//copywithin first value where to start 2nd and 3rd value defines range
//affects source array
console.log(cars.copyWithin(1,0));

//flat in multi array
console.log(num);
console.log(num.flat());

//splice source array changed
const numbers=[1,2,3,4,5,6,7,8,9,1,1,1];
const newnumber=numbers.splice(0,1,1);
console.log(numbers);

//slice source array not changed
console.log(numbers.slice(1));



//indexof
console.log(numbers.indexOf(1));
//lastindexof
console.log(numbers.lastIndexOf(1));

//includes
console.log(numbers.includes(2));
//find,finfindex,findlast,findlastindex;

//reverse
console.log(numbers.sort());
console.log(numbers.reverse());


//named indexes not in javascript
//instanceof used to analyse  type in non-primitive