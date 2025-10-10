if(true)
{
    let a=5;
const b=60;
var c=300;
}
//console.log(a,b,c); //a,b is bloced scope
console.log(c); //c is function scoped

/*var c=8;
if(true)
{
    var c=80;
}
console.log(c); //var can be redeclared again and again*/
 
let ab=5;
if(true)
{
    ab=85;
} 
console.log(ab); //it cant be redeclared but can be redefined