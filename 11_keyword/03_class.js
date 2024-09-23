//class keyword
class CreateUser{
    constructor(firstName,lastName,age,email,address){ 
        //console.log("constructor called");
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.address = address;
  }
  about(){
    return `${this.firstName} is ${this.age} years old.`
  }
  is18(){
    return this.age>=18
  }
  sing(){
    return "la la la naaa"
  }
}
 const user1 = new CreateUser("rahul","kumar",'18',"rahul.kumar6969@gmail.com","Bajrangpuri");
 const user2 = new CreateUser("sumit","kumar",'19',"sumit.kumar1234@gmail.com","ranchi");
 const user3 = new CreateUser("mohit","kumar",'20',"mohit.kumar69@gmail.com","odisha");
  console.log(user1.about());
