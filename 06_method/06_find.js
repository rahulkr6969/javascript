//find method

const myArray=["monkey","cat","dog","lion"];

const ans = myArray.find((string)=>string.length===3);

console.log(ans);

const user=[
    {userId:1 , UserName:"rahul"},
    {userId:2 , UserName:"nitish"},
    {userId:3 , UserName:"abhay"},
    {userId:4 , UserName:"bhaiya"},
]
 const myUser = user.find((user)=>{
    return user.userId===3
 });
 console.log(myUser);