//filter method
const numbers=[1,3,2,6,4,8];
const isOdd =function(number){
    return number%2!==0;
}
const oddNumber=numbers.filter(isOdd);
console.log(oddNumber);