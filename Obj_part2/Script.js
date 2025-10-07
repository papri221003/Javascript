const singleTone_obj={
    email: "bhpapri@gmail.com",
    username:{
        fullname:{
            firstname:"Papri",
            lastname:"Bhattacharjee",
        }
    }
}

console.log(singleTone_obj.username.fullname.firstname);
console.log(singleTone_obj.username.fullname);


//More on objects
console.log(Object.keys(singleTone_obj));  //it shows what are the keys in my object
console.log(Object.values(singleTone_obj));   //it shows what are the values in my object
console.log(Object.entries(singleTone_obj));   //it shows both key and value pair in 1st object not the nested one(It just shows the key and respective values acc to our given input as per our entry)



//Part 2
//Object Destructure
const course={
    coursename: "JS lecture",
    courseInstructor: "Hitesh",
    coursePrice: 999,
}

const {courseInstructor:ins}=course;
console.log(ins);