// const obj = {
//     username: "Hritk",
//     price: 999,
//     greeting: function() {
//         console.log(`${this.username}, welcome to website`);
//     }
// }
// obj.greeting()
// obj.username= "Sam"
// obj.greeting()

function chai1(){
    const username = "Hritk"
    console.log(this);
}

chai1()

const chai2 = function() {
    const username = "Hritk"
    
    console.log(this);
}

chai2()
const chai3 = ()=> {
    const username = "Hritk"
    console.log(this);
}
chai3()
console.log(this)
