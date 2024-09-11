//default parameters

// function addTwo(a,b){
//     if(typeof b==="undefined"){
//         b=1;
//     }
//     return a+b;
// }
// const ans = addTwo(4);
// console.log(ans);

function addTwo(a,b=1){
         return a+b;
     }
     const ans = addTwo(4);
     console.log(ans);