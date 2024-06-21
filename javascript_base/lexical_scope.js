
parent()
function parent(){
    let str1
    function child(){
        str1="ANAND"
        function grandchild(){
            console.log(str1)
        }
        grandchild()
    }
    child()
}
//Lexical scope is the ability for a function scope to access variables from the parent scope. 