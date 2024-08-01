
//callback function --> A callback function in JavaScript is a function that is passed as an argument to another function.
//The calling function can then execute the callback function at a later time

 console.log('Start');

//A function can be act as normal function or callback function based on how it is called
function myFunction(e){
    console.log(e)
}

//Normal function call
myFunction(10)

//callback function. Here argument to callback function is passed by the onclick event. Arguement is not passed by us.
//Asynchronous Callback Function- Will be executed outside the normal synchronous flow
//This is an example of Asynchronous Callback. Because it is only execute once the button is called 
document.getElementById('button1').onclick=myFunction;

//Synchronous Callback Function--Will be executed with the normal synchronous flow
a=[2,4,5,6,7,8]
a.forEach(myFunction);

//Callback without function name --> Anonymous function
a.forEach(function(e){
    console.log('hi '+e)
})

console.log('Finished');


