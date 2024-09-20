//call,apply,bind methods
const user1={
    firstName:"rahul",
    age:'18',
    about:function(){
        console.log(this.firstName,this.age);
    }
}
user1.about();