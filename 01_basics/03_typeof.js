//type of operator

let age=22;
let firstName="rahul"
// console.log(typeof age);

//convert number to string
console.log(typeof (age+ ""));

//string concatenation

let string1="17";
let string2="10";
let fullName = +string1 + +string2;
console.log(fullName);

//template string
let num=22;
let firstname="varshita";
// let aboutMe="My name is " + firstname + " and my age is " + age;
let aboutMe=`My name is ${firstname} and my age is ${age}`;
console.log(aboutMe);

//BigInt

let myNumber=BigInt(12);
console.log(myNumber);


