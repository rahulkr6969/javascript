//for in loop

const fruits=["mango","apple","papaya","orange"];

for(let index in fruits){
    console.log(index);
}

//array destructuring 

const myArray=["mango","apple"];
//let myvar1 = myArray[0];
//let myvar2 = myArray[1];
let[myvar1,myvar2]=myArray;
console.log("value of myvar1",myvar1);
console.log("value of myvar2",myvar2);