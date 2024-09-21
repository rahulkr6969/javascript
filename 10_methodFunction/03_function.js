//function(that function create object)
// 2.)add key value pair
// 3.)object ko return karega

const userMethods={
    about:function(){
        return `${this.firstName} is ${this.age} years old`
    },
    is18:function(){
        return this.age >=18;
  }
}
function createUser(firstName, lastName, email, age, address){
    const user={};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    
    return user;
}
const user1=createUser("rahul","kumar","rahul.kumar6969@gmail.com",'18',"Bajrangpuri");
const user2=createUser("mohit","kumar","mohit.kumar@gmail.com",'17',"Bajrangpuri");
const user3=createUser("sumit","kumar","sumit.kumar66@gmail.com",'16',"Bajrangpuri");
console.log(user2);
console.log(user3.about());

