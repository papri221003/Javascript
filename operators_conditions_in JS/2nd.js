console.log(2 ** 2);
console.log(3 ** 2);
console.log(3/2);
console.log(3%2);



let a=console.log("1"+2);
// adding a string with a number(1 here is a string and 2 is integer (naturally 1+2=3) but here we write "1" and 2 is number so it will be 12) // 
console.log(typeof a); 


//prefix and postfix increment and decrement

let gamecounter=100;
console.log(++gamecounter);
console.log(gamecounter++);
console.log(gamecounter);
console.log(--gamecounter);




//Template Literals
let obj={
    item:"Pen",
    price:10,
};
let output=`The product is ${obj.item} and the price is ${obj.price}`;
console.log(output);