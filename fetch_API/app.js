let URL="https://catfact.ninja/facts";
const getPara=document.querySelector(".fact");
const btn=document.querySelector(".btn");

/* using async await*/

const getFacts= async()=>{
    console.log("Fetching the Details............");
    let response=await fetch(URL);
    console.log(response);
    let data=await response.json();
    getPara.innerText=(data.data[1].fact);
};

//using promise chaining
/*
function getFacts(){
    console.log("Fetching the data.......");
    fetch(URL)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        getPara.innerText=(data.data[1].fact);
    })
}
    */

btn.addEventListener("click",getFacts);
