let modebtn=document.querySelector("#mode");
let body=document.querySelector("body");
let currMode="lightMode";



modebtn.addEventListener("click",()=>{
    if(currMode=="lightMode")
    {
        currMode="darkMode";
        body.classList.add("dark");
        body.classList.remove("light");
        modebtn.setAttribute("id","darkmode");
    }
    else{
        currMode="lightMode";
        body.classList.add("light");
        body.classList.remove("dark");
        modebtn.setAttribute("id","mode");
    }
    //console.log(currMode);

});