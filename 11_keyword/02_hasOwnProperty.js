//hasOwnProperty
function CreateUser(firstName,lastName,age,email,address){

    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.address = address;
    
}
CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`
};
CreateUser.prototype.is18 = function(){
    return this.age>=18
};
CreateUser.prototype.sing = function(){
    return "la la la naaa"
};
const user1 = new CreateUser("rahul","kumar",'18',"rahul.kumar6969@gmail.com","Bajrangpuri");
const user2 = new CreateUser("sumit","kumar",'19',"sumit.kumar1234@gmail.com","ranchi");
const user3 = new CreateUser("mohit","kumar",'20',"mohit.kumar69@gmail.com","odisha");
console.log(user1);
console.log(user3.about());