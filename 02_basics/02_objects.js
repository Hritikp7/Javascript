// const obj = {
//     name: "Hritik Pawar",
//     age: 23,
//     email: "hritik525@gmail.com",
//     location:"Pune"

// }

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


const {email,fullname,cars} = user
console.log(email);
console.log(fullname);

const {firstname:fname, lastname:lname} = fullname

console.log(fname);

const [myBrand] = cars
console.log(myBrand);
