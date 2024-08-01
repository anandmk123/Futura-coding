//When a function is defined in another function, the inner function has access to the code defined in that of the outer function, and that of its parents. This behavior is called lexical scoping.
//However, the outer function does not have access to the code within the inner function.

let a='hello '
parent()
function parent(){
    let str1='Anand '
    function child(){
        let str2="Unni"
        function grandchild(){
            console.log(a+str1+str2)
        }
        grandchild()
    }
    child()
}