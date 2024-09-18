//Maps
//map is iterable
//stored data in oredered fashion
//store key value pair(like object)
//duplicate keys are not allowed like objects
//different between maps and objects 
//objects can only have string or symbol
//as key
//in maps you can use anything as key
//like array, number, string
//object literal
//key-> string
//ket-> symbol
// const person={
//     firstName:"rahul",
//     age:18,
// }
// console.log(person.firstName);

//key value pair
// const person=new Map();
// person.set('firstName','rahul');
// person.set('age',18);
// console.log(person);
// console.log(person.get('firstName'));

const person1={
    id:1,
    firstNmae:"rahul",
}
const extraInfo=new Map();
extraInfo.set(person1,{age:8, gender:"male"});
console.log(extraInfo.get(person1).gender);

