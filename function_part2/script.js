//Adding unlimited items price through function(suppose in flipkart or amazon wheerre we have a unlimited items we added in cart and it gave the total price ...)

let sum=0;
function calculateCartPrice(num)
{
    sum=sum+num;
    return sum;
}

console.log(calculateCartPrice(4));
console.log(calculateCartPrice(6));

//if we want to add multiple number and add them through single function call we use (rest operator)denoted by "..."

function calculateCartPrice2(...num)
{
    let total=0;
    for(let i=0;i<num.length;i++)
    {
        total+=num[i];
    }
    return total;
}

console.log(calculateCartPrice2(4,5));
console.log(calculateCartPrice2(6,8,5,12,23,25));


const userdata={
    username:"papri",
    userAge:22,
}

function print(myobj){
    console.log(`The username is ${myobj.username} and the age is ${myobj.userAge}`);
}

print(userdata);


//This keyword
const user={
    username:"Hitesh",
    Age:22,
    greet:function(){
        console.log(`${this.username},Hello!!`);
        console.log(this);
    }
}

console.log(this);

user.greet();