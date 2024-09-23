//getter and setter
class person{
    constructor(firstName,lastname,age){
        this.firstName = firstName;
        this.lastname = lastname;
        this.age = age
    }
    get fullName(){
        return`${this.firstName} ${this.lastname}`
  };
  set fullName(fullName){
      const [firstName,lastName]=fullName.split(" ");
      this.firstName=firstName;
      this.lastName=lastName;
  }
}
const person1 = new person("rahul","kumar",'18');
person1.fullName="mohit kumar";
console.log(person1);