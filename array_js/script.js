/*
//object
let student={
    marks:89,
    class:10,
    roll:27,
};
console.log(student);

//Array
let array=[91,89,75,10,23];
console.log(array);
console.log(array[0]);
console.log(array.length);
console.log(typeof array); //nothing but a special type of object    


//for loop 
console.log("For Loop: ")
for(let i=0;i<array.length;i++)
{
    console.log(array[i]);
}

//for of loop
console.log("For of Loop: ");
for(let num of array)
{
    console.log(num);
}

                               
let student_marks=[85,97,44,37,76,60];
let size=student_marks.length;
let sum=0;
for(let j=0;j<size;j++)
{
   sum=sum+student_marks[j];
}
let avg=sum/size;
console.log(`Average marks of student is: ${avg}`);

//changing the price after applying offer of 10%
let price=[250,645,300,900,50];
for(let k=0;k<price.length;k++)
{
    console.log(`Before offer at ${k} price ${price[k]}`);
    price[k]=price[k]-(price[k]*0.1);
    console.log(`After offer at ${k} new price ${price[k]}`);
}


let score=[91,89,75,10,23];
score.push(100); //add item at end
console.log(score); 
score.pop(); //remove item from last
console.log(score);
score.unshift(185);
console.log(score);
score.shift();
console.log(score);
console.log(score.slice(1,3));


let a1=["papri","krittika","payel","sontai"];
let a2=["parushi","souma","poulami","niladri"];
console.log(a1.concat(a2));  

*/

//practice question
let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
companies.splice(0,1,"Uber","Ola");
console.log(companies);
companies.push("Amazon");
console.log(companies);