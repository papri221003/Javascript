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

//callback hell understanding
/*
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

*/



//Promise
/*
let getPromise = ()=>{
return new Promise((resolve,reject)=>{
    console.log("I am a promise");
    reject("there is some error");
})
};

let promise=getPromise();
promise.then((res)=>
{
    console.log("promise fulfilled",res);
});
promise.catch((err)=>{
    console.log("rejected",err);
});
*/


/*function getData(dataId,getNextData)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("Data: ",dataId);
        resolve("Success");
        if(getNextData)
        {
            getNextData();
        }
    },5000);
    }) ;
}*/
//Promise chain
function async()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("Succuess");
        },4000);
    })
}
function async2()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("Succuess again");
        },4000);
    })
}
console.log("Fetching data1............");
let p1=async();
p1.then((res)=>{
   // console.log(res);
    console.log("Fetching data2............");
    let p2=async2();
    p2.then((res)=>{
        //console.log(res);
    })
})
