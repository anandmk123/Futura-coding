//variable shadowing using let and let
function test(){
    let variable1=34

    {
        let variable1=32
        console.log("value at inside scope "+variable1)
    }
    console.log("value at outside scope "+variable1)

}
test()

//variable shadowing using var and let
function test1(){
    var variable1=56

    {
        let variable1=78
        console.log("value at inside scope "+variable1)
    }
    console.log("value at outside scope "+variable1)
}
test1()

//illegal shadowing --> can not shadow let varible by var

function test2(){
    let variable1=12

    {
        // var variable1=16 --> not possible
        console.log(variable1)
    }
}
test2()
