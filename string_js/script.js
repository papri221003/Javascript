let str="Papri Bhattacharjee";
let k=str.length;
console.log(k);
console.log(str[0]);

let str1="papri";
let str2=" bhattacharjee";
console.log(str1+str2);

//template literal
let sentence=`this is literal template`;
console.log(sentence);  

let obj={
    item:"Pen",
    price:10,
};
let output=`The product is ${obj.item} and the price is ${obj.price}`;
console.log(output);

let string=" papri bhattacharjee ";
let upper=string.toUpperCase();
console.log(upper);
console.log(upper.toLowerCase());
console.log(string.trim()); //removes white space in start and end not in middle
console.log(string.slice(0,4));
console.log(string.charAt(1));
console.log(string.replace("p","a"));
console.log(string.replaceAll("p","a"));
let a="hello";
let b=" world";
console.log(a.concat(b));
