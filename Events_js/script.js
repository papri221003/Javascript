let btn1=document.querySelector("#btn1");
btn1.onclick=()=>{
    window.open('https://github.com/papri221003', '_blank');
}
let div=document.querySelector("div");
div.onmouseover=(e)=>{
    alert("You are on inside div");
    console.log(e);
    console.log(e.target);
    console.log(e.type);
    console.log(e.clientX,e.clientY);

}
let btn2=document.querySelector("#btn2");
btn2.addEventListener("dblclick",()=>{
    console.log("The button was clicked twice");
});
let clickme=()=>{
    console.log("Do double click to open!!");
}
btn2.addEventListener("click",clickme);
btn2.removeEventListener("click",clickme); //event listner removed



