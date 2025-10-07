
const JSuser={
    name: "Papri",
    age: 22,
    location: "Konnagar",
    Email: "pb@gmail.com",
}

console.log(JSuser);


JSuser.Email="jhv@gmail.com";
console.log(JSuser.Email);

console.log(JSuser["Email"]);



//Adding Function into the object using arrow function
JSuser.greet2=function(){
    console.log(`Hello!! welcome to the JS world,${this.name}`);
}


//Adding Function into the object using arrow function
JSuser.greet=()=>{
    console.log(`Hello!! welcome to the JS world,${JSuser.name}`);
}

JSuser.greet();
JSuser.greet2();

