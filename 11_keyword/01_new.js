//New keyword

function CreateUser(firstName,age){
    this.firstName = firstName;
    this.age = age;
}
CreateUser.prototype.about=function(){
    console.log(this.firstName , this.age);
}
const user1= new CreateUser("rahul",'18');
console.log(user1.about());