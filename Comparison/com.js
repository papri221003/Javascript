console.log(2>4);
console.log(2!=2);


//not comparing with same datatype
console.log("2"<1); //(here 2 is string and 1 is number still it is comparing both considering 2 as number)
console.log(Number("Papri")>Number(1));  //so before comparing 2 elements we at first type cast the element to desired datatype acc to our choice in which we want to compare for safety
console.log();

console.log(null>=0);
console.log(null==0);
console.log(null<=0);
console.log();

console.log("2"==2); //it gives true beacause it just compare the value not the datatype
console.log("2" === 2);//it gives false beacause it compare the values as well as the datatype