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


//Filter method
const arr2=[4,5,8,12,96,79];
let newarr=arr2.filter((val)=>
{
    return val>10;
})
//console.log(newarr);

const products = [
  { id: 1, name: "Laptop", brand: "HP", price: 65000, category: "Electronics", stock: 12, rating: 4.5 },
  { id: 2, name: "Headphones", brand: "Sony", price: 2500, category: "Accessories", stock: 50, rating: 4.2 },
  { id: 3, name: "Smartphone", brand: "Samsung", price: 48000, category: "Electronics", stock: 0, rating: 4.6 },
  { id: 4, name: "Keyboard", brand: "Logitech", price: 1200, category: "Accessories", stock: 30, rating: 4.1 },
  { id: 5, name: "Mouse", brand: "Dell", price: 800, category: "Accessories", stock: 40, rating: 4.3 },
  { id: 6, name: "Smartwatch", brand: "Apple", price: 35000, category: "Wearable", stock: 15, rating: 4.8 },
  { id: 7, name: "Tablet", brand: "Lenovo", price: 25000, category: "Electronics", stock: 10, rating: 4.4 },
  { id: 8, name: "Charger", brand: "Mi", price: 699, category: "Accessories", stock: 60, rating: 4.0 },
  { id: 9, name: "Bluetooth Speaker", brand: "Boat", price: 1999, category: "Audio", stock: 22, rating: 4.5 },
  { id: 10, name: "Power Bank", brand: "Ambrane", price: 1299, category: "Accessories", stock: 33, rating: 4.1 }
];

let desiredProduct=products.filter((data)=>
{
    return data.price>35000 && data.category==="Electronics";
})
//console.log(desiredProduct);


//Reduce method

const array=[1,2,3,4,5];

let total=array.reduce((prev_value,curr_value)=>
{
    return prev_value+curr_value;
});
console.log(total);
