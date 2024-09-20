//call,apply,bind methods
const user1={
    firstName:"rahul",
    age:'18',
    about:function(){
        console.log(this.firstName,this.age);
    }
}
const user2={
    firstName:"mohit",
    age:'17',
}
user1.about.call(user2);