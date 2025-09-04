/*function myFunc()  //function creation without parameter
{
    console.log("I am learning JS now.........   :)");
}
myFunc();
myFunc(); //function call withour argument



let a;
let b;
function sum(a,b)  //with parameter
{
    let sum=a+b;
    console.log(sum);
}

sum(2,4); //function call with argument


//with return statement
function multiply(x,y)
{
    let mul=x*y;
   return mul; 
}
console.log(multiply(12,12));


//sum function using arrow function
let sum1=(a,b)=>{
    return a+b;
}
console.log(sum1(1,2));
//arrow function without argument

let print=()=>
{
    console.log("Hello!!");
}
print();
*/

//practice question: "Creation a function using the function keyword that takes a String as an argument and returns the number of vowels in the string"

function countVowel(str)
{
    let count=0;
    for(let i=0;i<str.length;i++)
    {
        let c=str[i];
        if(c=='a'||c=='e'||c=='i'||c=='o'||c=='u')
        {
            count++;
        }
    }
    return count;
}

let val=prompt("Enter a string");

console.log(countVowel(val));

