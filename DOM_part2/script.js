/*
let div=document.querySelector("div");
console.dir(div);
 console.log(div.getAttribute("class"));
 console.dir(div.getAttribute("name"));
 div.setAttribute("name","newname");
 div.style.backgroundColor="green";
 div.style.color="white";
 div.style.border="2px solid black";
 div.style.fontSize="40px";
 let a=document.querySelector(".box");
 a.innerText="Papri";


 let p=document.querySelector("p");
 console.log(p.getAttribute("id"));
 p.setAttribute("id","paragraph");

 */
 let heading=document.createElement("h1");
 heading.innerHTML="<b>Papri Bhattacharjee</b>";
 let div=document.querySelector("div");
 div.before(heading);


 let btn=document.createElement("button");
 btn.innerText="Click Me!";
 div.after(btn);
 btn.style.backgroundColor="green";
 btn.style.margin="10px";
//btn.remove();