let firstname='Anand' //global lexical environment
let lastname='M K' //global lexical environment
function parent(){
    let year=1999 //parent lexical environment
    console.log(firstname+year)
    function child1(){
        let namechild1='unni' //child1 lexical environment
        console.log(firstname+lastname+year+namechild1)
    }
    function child2(){
        let namechild2='vis'//child2 lexical environment
        console.log(firstname+lastname+year+namechild2)
    }
    child1()
    child2()
}
parent()