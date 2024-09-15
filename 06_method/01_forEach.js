//forEach method
//const numbers=[2,5,4,6,7];

// function myFunc(number,index){
//     console.log(`index is ${index} number is ${number}`);
// }  
 //numbers.forEach(function(number,index){
   // console.log(`index is ${index} number is ${number}`);
 //});

 const users=[
   {firstName:"rahul", age:22},
   {firstName:"mohit", age:21},
   {firstName:"sagar", age:20},
   {firstName:"kunal", age:19},
 ]
//    users.forEach(function(user){
//     console.log(user.firstName)
//   });
for(let user of users){
   console.log(user);
}