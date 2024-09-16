//reduce method
const numbers=[1,2,3,4,5,6];

const sum=numbers.reduce((accumulator,currentvalue)=>{
    return accumulator+currentvalue;
});
 console.log(sum);
// accumulator   currentvalue   return
//    1                2            3
//    3                3            6
//    6                4            10
//    10               5            15
//    15               6            21