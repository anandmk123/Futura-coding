// Hoisting - Variables are available to use before it is declared
//Hoisting var variables --> Var variable is initialised with undefined during creation phase of execution context
console.log(a) // print undefined 
var a=5

//Can not Hoisting const and let variables --> const and let variable are not initialised with any value during creation phase of execution context
console.log(b) // ReferenceError: Cannot access 'a' before initialization
let b=7

console.log(c)// ReferenceError: Cannot access 'a' before initialization
const c=2
