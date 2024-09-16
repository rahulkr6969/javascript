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

const userCart=[
    {productId:1 , productName:"mobile" , price:22000},
    {productId:2 , productName:"laptop" , price:60000},
    {productId:3 , productName:"tv" , price:15000},
]
 const total=userCart.reduce((totalPrice,currentProduct)=>{
      return currentProduct.price+totalPrice;
 },0);
 console.log(total);