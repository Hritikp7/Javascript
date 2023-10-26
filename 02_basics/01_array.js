const myArr = [1,2,3,4,5,"Hritik"]

// console.log(myArr[5]);
// console.log(typeof myArr);

const newArr = new Array(1,2,3,4,5)
// console.log(newArr);
// console.log(typeof newArr);



const obj = {
    myname: "Hritik",
    age: 23,
    email: "hritk252@gmail.com"
}

const arr1 = newArr.slice(1,3)
// console.log(arr1);
// console.log(newArr);

const arr2 = newArr.splice(1,3) // manipulates the original array
// console.log(arr2);
// console.log(newArr);

const arr3 = [1,2,3]
const arr4 = [9,8,7]

// arr3.push(arr4)
// console.log(arr3);

// const arr5 = arr3.concat(arr4)
// console.log(arr5);


const arr6 = [1,2,3]
const arr7 = [9,8,7]

const arr8 = [...arr6,...arr7]// spread operator: copies all existing elements of array/object into new array/object

// console.log(arr8);

const arr9 = [1,2,3,4,[4,5,2],5,6,[9,9,[8,3]]]
const arr10 = arr9.flat(Infinity)
// console.log(arr10);

let myname = Array.from("Hritik")
console.log(myname);

console.log(Array.from({name: "hritik"}));

const num1 = 10
const num2 = 20
const num3 = 30

const arr11 = Array.of(num1,num2,num3)
console.log(arr11);