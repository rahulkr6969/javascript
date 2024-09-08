//object inside array
//very useful in real world application

// let users=[
//     {userId:1,firstName:'rahul',gender:'male'},
//     {userId:2,firstName:'mohit',gender:'male'},
//     {userId:3,firstName:'sumit',gender:'male'},
// ]
// for(let user of users){
// console.log(user.userId);
// }

//nested destructuring

let users=[
    {userId:1,firstName:'rahul',gender:'male'},
    {userId:2,firstName:'mohit',gender:'male'},
    {userId:3,firstName:'sumit',gender:'male'},
]

const[{firstName} , user2 , ,]=users;
console.log(firstName)
console.log(user2);