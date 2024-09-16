//sort method
const numbers=[5,9,1200,400,3000];
numbers.sort();
console.log(numbers)

const products=[
    {productId:1 , productName:"p1" , price:15000},
    {productId:2 , productName:"p1" , price:20000},
    {productId:3 , productName:"p1" , price:21000},
    {productId:4 , productName:"p1" , price:5000},
]
   const lowToHigh=products.slice(0).sort((a,b)=>{
     return a.price-b.price
   });
   console.log(lowToHigh);