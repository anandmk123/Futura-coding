//Function Declaration -->To declare a function, you use the function keyword and specify a name for the function.
function returnName(name){
    return 'Hi ' +name
}
const hiname=returnName('Anand')
console.log(hiname)

//Function Expression -->create a function expression and assign it to a variable that can be called

//Function Expressions with the function keyword
const byeName=function(name){
    return 'bye '+name
}
const a=byeName('Unni')
console.log(a)

//Arrow function expressions
const deyName=(name)=>{
    return 'dey ' +name
}
const b=deyName('Vis')
console.log(b)

//Immediately Invoked Function Expressions (IIFEs) -->IIFEs are functions that are immediately invoked after creation.
(function(){
    console.log('IIFE using function keyword')
})(); 
