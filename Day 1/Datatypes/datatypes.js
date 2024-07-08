//datatype
let x=1;
let z=typeof x;
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