/*
//For each Loop in Array Method
//For a given array of numbers,Print the square of each value using the forEach Loop
let num=[1,2,3,4,5,6];
num.forEach((val) =>{
    console.log(val*val);
}
);

//Another way of using foreach method 
console.log("\n");
let num1=[1,2,3,4,5,6];
let calcube=(val)=>
{
    console.log(val*val*val);
}
num1.forEach(calcube);
console.log("\n");


//Another way
let num2=[1,2,3,4,5,6];
function calsquare(val)
{
     console.log(val*val);
}
num2.forEach(calsquare);
console.log("\n");

//Map in Array Method
let num3=[1,2,3,4,5,6];

let newArr=num3.map((val)=>{
    return(val*2);
}
);
console.log(newArr);   //this method stored the vlaues after operation in a new array
console.log("\n");

//Filter method in Array Method
let num4=[1,2,3,4,5,6];

let newArr2=num4.filter((val)=>
{
    return val%2==0;
});
console.log(newArr2);
console.log("\n");

//reduce method in Array Method

let arr=[1,2,3,4];
let output=arr.reduce((prev,curr)=>{
    return prev+curr;
});
console.log(output);
console.log("\n");

//Finiding maximum using Reduce method
let arr1=[5,8,2,7,6,12];

let max=arr1.reduce((prev,curr)=>{
   // prev=Math.max(prev,curr);       (in short)
    //if(curr>prev)          //Another way
    {
        prev=curr;
    }//  

    return prev>curr ? prev : curr;     //in one line
}
);

console.log(max);
*/


//Practice qs 2


let n=Number(prompt("Enter a Integer"));
let array=[];
for(let i=0;i<n;i++)
{
    array[i]=Number(prompt("Enter a element: "));
}
console.log(array);

let prev=0;
let curr=array[0];
const sum=array.reduce((prev,curr)=>{
      return prev*curr;
});
console.log(sum);




const arr=[1,2,4,8,10];
const newarr =arr.join();
console.log(arr);
console.log(newarr);
console.log(typeof(newarr));
console.log(arr.toString());