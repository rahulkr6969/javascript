//Set(it is iterable)
//store data
//Sets also have its own methods
//no-index based access
//order is not gurranted
//unique items only(no duplicates allowed)
const numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(6);
// if(numbers.has(1)){
//     console.log("1 has present");
// }else{
//     console.log("1 has not present")
// }
// console.log(numbers);
// for(number of numbers){
//     console.log(number);
// }

const myArray=[1,2,2,3,4,4,5,5,6];
const uniqueElements=new Set(myArray);
console.log(uniqueElements);
console.log(myArray);