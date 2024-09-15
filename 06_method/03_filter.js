//filter method
const numbers=[1,3,2,6,4,8];
const isEven =function(number){
    return number%2==0;
}
const evenNumber=numbers.filter(isEven);
console.log(evenNumber);