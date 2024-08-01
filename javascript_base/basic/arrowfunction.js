//Example of arrow function
const add=(a,b)=>{
    return a+b
}
console.log(add(3,5))

//arrow function with one line--> we can remove {} and return statement
const add2=(a,b)=>a+b
console.log(add2(4,5))

//arrow function with one argument-> we can remove () on arguments
const add100=a=>a+100
console.log(add100(4))

//arrow function to return string
 const hello=()=>"Hello world"
 console.log(hello());

//arrow function to return array
 const array=()=>[1,2,3,4,6]
 console.log(array());

 //arrow function to return object .add() isnted of {}
 const object=()=>({
    Name:'Anand',
    Age:27
 })
 console.log(object());
