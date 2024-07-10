//hoisting is possible in function declaration. 
printhello()

function printhello(){
    console.log('Print Hello')
}
//hoisting does not occur on function expressions. because here printname is considered as a vairable and let variable can not hoisted
printname('Anand')//ReferenceError: Cannot access 'printname' before initialization
let printname=function(name){
    console.log(name)
}