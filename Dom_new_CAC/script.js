let para=document.getElementById('new_para');
para.style.backgroundColor='green';

console.log(para.textContent)
console.log(para.innerHTML)
console.log(para.innerText)
let tag=para.tagName;
console.log(tag);


let body=document.querySelector('body');
//console.log(body);

body.style.backgroundColor='white';
body.style.color='black';

console.dir(document.querySelectorAll('h1'));
console.dir(document.querySelector('h1'));


//document.querySelectorAll('li');
let mylist=document.querySelectorAll('li');
/*
mylist[0].style.backgroundColor="blue";
mylist[2].style.backgroundColor="purple";
mylist[1].style.backgroundColor="violet";
mylist[3].style.backgroundColor="pink";
*/

mylist.forEach((val)=>{
   // val.style.backgroundColor="pink";
})

let newlist=document.getElementsByClassName("list_item");//gives HTML Collection
let newlistArray=Array.from(newlist);//convert HTML collection into the array
newlistArray.forEach((li)=>{
    li.style.backgroundColor="violet";
})


