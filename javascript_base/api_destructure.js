const { default: axios } = require("axios")

;(async ()=>{
    try {
        const {data}=await axios.get('https://dummyjson.com/products')
        const {products}=data
        // console.log(products)

        //for each -->higher order methods and does not return anything
        products.forEach(element => {
            console.log(element.title)
        });
    } catch (error) {
        console.error(error)
    }

})()