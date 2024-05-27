
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