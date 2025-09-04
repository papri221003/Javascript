let i=0;
for(i=0;i<6;i++)
{
    console.log("Papri Bhattacharjee");
}
console.log("loop ended");

//while loop
let j=0;
while(j<=5)
{
    console.log(j);
    j++;
}

//sum of n numbers
/*
let num=prompt("Enter the number: ");
let k=0;
let sum=0;

while(k<=num)
{
    sum=sum+k;
    k++;
}
console.log(sum);
*/
//do while loop
let count =5;
do{
    console.log("Hello! World");
    count--;

}while(count>0);

//print all even numbers from 0to100
let num=1;
while(num<=100)
{
    if(num%2==0)
    {
    console.log(num);
    num++;
    continue;
    }
    else{
        num++;
    }
}

//guessing game
let target=25;
let k=prompt("Guess the value: ");

while(k!=target)
{
    k=prompt("You entered wrong number ..Guess the value again.: ");
}
console.log("Congratulations!!");
