// Object literals

const obj = {
    name: "Hritik Pawar",
    age: 23,
    email: "hritik525@gmail.com",
    location:"Pune"

} // not a singleton object

// obj.greeting = ()=>{
//     console.log("Hello World");
// }

// console.log(obj.greeting());

const user = {
    email: "some@gmail.com",
    fullname: {
        firstname:"Hritik",
        lastname: "Pawar"
    },
    cars: ["Volvo","Ford","BMW"]
}

console.log(user.fullname?.firstname);

const obj2 = {
    1:"a",
    2:"b"
}
const obj3 = {
    3:"c",
    4:"d"
}


// const obj4 = Object.assign({},obj2,obj3)
// console.log(obj4);

const obj5 = {...obj2,...obj3}
// console.log(obj5);

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

const {email,fullname,cars} = user
console.log(email);
console.log(fullname);

const {firstname:fname, lastname:lname} = fullname

console.log(fname);

const [myBrand] = cars
console.log(myBrand);
