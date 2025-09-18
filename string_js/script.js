/*
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


*/

//********************************//
//Practice

/*********String Interpolation**********/
let meow={
    headcound: 5,
    name: "billu",
    work: "sleeping"
};

console.log(`The name of the cat is ${meow.name} and it's only work is ${meow.work}. There are total ${meow.headcound} cats`);

let greet=new String(" Hello ");
console.log(greet.length);
console.log(greet.toUpperCase());
console.log(greet.trim());
console.log(greet.charAt(2));
console.log(greet.indexOf('H'));
console.log(greet.replace('l','p'));
console.log(greet.replaceAll('l','p'));
console.log(greet.slice(1,5));

const newgreet=greet.substring(1,4);
console.log(newgreet);

console.log(greet.includes('p'));
const sentence="hello world myself papri";
console.log(sentence.split(' '));

const str1="Papri";
const str2=" Bhattacharjee";

console.log(str1.concat(str2));    



///to generate random value we use math.random()

console.log(Math.random());   
