const arr_even=[2,4,6,8,10]
const arr_odd=[1,3,5,7,9]


//merging using push
//arr_even.push(arr_odd);
//console.log(arr_even);


//merging using concat
//const new_arr=arr_even.concat(arr_odd)
//console.log(new_arr);


const new_arr2=[...arr_even,...arr_odd];
console.log(new_arr2);


const another_arr=[1,2,3,[4,5,6],7,8,[9,10,[11,12]]];

const clear_arr=another_arr.flat(Infinity)
console.log(clear_arr);