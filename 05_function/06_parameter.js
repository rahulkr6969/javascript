//parameter destructuring
//object
//react

const person={
    firstName:"rahul",
    gender:"male",
}

function objdetails({firstName,gender}){
   console.log(firstName);
   console.log(gender);
}
objdetails(person);