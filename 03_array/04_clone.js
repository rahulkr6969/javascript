//how to clone array

//let array1=["item1","item2","item3"];
// let array2=array1.slice(0);
// array1.push("item4");
// console.log(array1);
// console.log(array2);

//new way
//spread operator
let array1=["item1","item2","item3"];
let array2=[...array1,"item4","item5"];
console.log(array1);
console.log(array2);