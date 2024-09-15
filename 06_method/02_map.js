//map method
const numbers=[3,4,5,6,8];
// const square=function(number){
//     return number*number;
//}
const squareNumber=numbers.map(function(number){
    return number*number;
});
console.log(squareNumber);