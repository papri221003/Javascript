//For of loop

const arr=[1,2,1,5,8,9,45];

for(const num of arr)
{
   //  console.log(num);
}


//Maps in array

const map=new Map();
map.set('In',"India");
map.set('Fn',"france");
map.set('USA',"United state of America");

//iteration map using for of loop
for(const [key,value] of map)
{
   // console.log(`${key} :-> ${value}`);
}



//Iteration of objects key,value can't be possible using for of loop as object is not any iterator
const myobj ={
    JS:"Javascript",
    CSS:"Cascade style sheet",
    rb:"ruby"
}
for(const key in myobj)
{
    //console.log(`${key} is stands for ${myobj[key]}`);
}

//FOr in loops in array
const programming=['JS','CSS','JAVA','Py'];
for(const key in programming)
{
    //console.log(key);
    //console.log(programming[key]);
}

//For Each loop(call back function)

const coding=['JS','CSS','JAVA','Py'];
coding.forEach((lang)=>{
    //console.log(lang); 
})

