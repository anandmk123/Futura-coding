fetch('https://dummyjson.com/products')
.then((result)=>{return result.json()})
.then((result)=>{
    console.log(result)

})
.catch((err)=>{console.log(err)})