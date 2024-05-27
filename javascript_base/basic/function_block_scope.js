//var -->functional scope 
//let --> block scope
function test(){
    if(2<3){
        let a=2;
        var b=3;
    }
    console.log(b)//no error --> b is accessible anywhere in the function
    console.log(a)// error --> a is not accessible outside the block
}
console.log(b)// error --> b is not accessible outside the function
test()