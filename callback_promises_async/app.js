//Asynchronus programming_in JS
/*
console.log("one");
console.log("two");

setTimeout(()=>{
    console.log("Hello");
},4000);

console.log("three");
console.log("four");
console.log("five");
console.log("six");
console.log("seven");

setTimeout(()=>{
    console.log("Hello2");
},2000);   //this will print prev than hello ..though it is after the hello still it has 2sec to execute whereas hello has 4sec to execute
*/

//Callback
/*
function calculator(a,b,sumcallback){
    sumcallback(a,b);
}
calculator(1,2,(a,b)=>{
    console.log(a+b);
})
*/

function getData(dataId,getNextData)
{
    setTimeout(()=>{
        console.log("Data: ",dataId);
        if(getNextData)
        {
            getNextData();
        }
    },2000);
}
//callback hell
getData(1,()=>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4,()=>{
                getData(5); 
            })
        });
    });
})