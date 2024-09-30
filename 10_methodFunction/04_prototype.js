//prototype

function createUser(firstName,lastName,age,email,address){
    const user=Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.address = address;
    return user;
}
createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`
};
createUser.prototype.is18 = function(){
    return this.age>=18
};
createUser.prototype.sing = function(){
    return "la la la naaa"
};
const user1 = createUser("rahul","kumar",'18',"rahul.kumar6969@gmail.com","Bajrangpuri");
const user2 = createUser("sumit","kumar",'19',"sumit.kumar1234@gmail.com","ranchi");
const user3 = createUser("mohit","kumar",'20',"mohit.kumar69@gmail.com","odisha");
console.log(user1);
console.log(user3.about());