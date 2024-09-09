//isEven
function isEven(number){
    if(number%2===0){
        return true;
    }
    return false;
}
 console.log(isEven(6));

//any String
function firstChart(anyString){
    return anyString[0];
}
console.log(firstChart("abc"));

//findtarget

function findTarget(array,target){
    for(let i = 0;i<array.length; i++){
    if(array[i]===target){
    return i;
  }
 }
 return-1;
}
const myArray=[1,2,8,9,11]
const ans = findTarget(myArray,2);
console.log(ans);

//function expression

const sumThreeNumber=function(number1,number2,number3){
    console.log(number1+number3+number3);
}
   sumThreeNumber(2,5,6);