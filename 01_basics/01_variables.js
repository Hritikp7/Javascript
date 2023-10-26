const accountId = 123232; //const: can't be redeclared or reassigned (block Scope)
let accountEmail = "hritikpawar@gmail.com"; //let: can't be redeclared , can be reassigned (block Scope)
var accountPassword = "1234";//var: can be redeclared or reassigned (global Scope)
accountCity = "Pune"; //Not a good practice
let accountStatus;

// accountId = 2; // will give an error as it is const it cannot be reassigned
accountEamil = "hritk@gmailcom";
accountPassword = 453345;
{
    var accountPassword = 34534;
    console.log(accountId);
    console.log(accountPassword);
}
console.log(accountPassword);

console.table([accountId,accountEmail,accountPassword,accountCity])

console.log(accountStatus);// will give undefined 