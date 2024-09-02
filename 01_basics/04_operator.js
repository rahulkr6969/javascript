//booleans & comparison operator

let num1=8;
let num2=7;
//console.log(num1>=num2);

//== vs ===
//console.log(num1==num2);

// != vs !==
console.log(num1 != num2);

//ternary operator / conditional operator

let age=8;
let drink = age>=5 ? "coffee": "milk";
console.log(drink);

//and or operator

let firstName="rahul";
let year=18;

if(firstName[1]==="a" && year>=18){
    console.log("Name starts with a and above 18");
}else{
    console.log("inside else");
}

if(firstName[1]==="a" || year>18){
    console.log("inside if");
}else{
    console.log("inside else");
}
