"use strict"; //treats all JS Code as newwe version
let name = "Hritik"
let age = 23
let islogged = true
let s = undefined
let n = null
let bi = 23736178251835125253612351267n;


console.log(typeof name); // string
console.log(typeof age);// number
console.log(typeof islogged); // boolean
console.log(typeof s);// undefined
console.log(typeof n); // object
console.log(typeof bi); // bigint

// symbol => for Unique values

// Based on how the value is stored and accessed from memory, the datatypes are categorized into 2 types:
// 1. Primitive(call by value)
//    Gets stored in stack memory, copy is given instead of original value, so no changes in original values
//     a. Number
//     b. Null
//     c. Boolean
//     d. BigInt
//     e. String
//     f. Symbol
//     g. undefined
// 2. Non-primitive(call by reference)
//    Gets stored in Heap memory, reference of original value is given, so changes in original values

//    a. Objects
//    b. Arrays
//    c. Functions


const myArr = [1,2,3,4]
const myObj = {
    name: "hritik",
    age: 23,
    email: "hritik@gmail.com"
}

const myFunc = function (){
    return 3 + 2
}

console.log(typeof myArr);
console.log( typeof myObj);
console.log( typeof myFunc);
