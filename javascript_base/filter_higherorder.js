const { default: axios } = require("axios")
let producttitle,producttitle2

;(async ()=>{
    try {
        const {data}=await axios.get('https://dummyjson.com/products')
        const {products}=data

        //filter -->always return the array of length which iS having a value. Does not return the undefined cases
        producttitle=products.filter(single_product=>single_product.price>100 && single_product.title)
        // console.log(producttitle)

        producttitle2=products.filter(single_product=>{
            if(single_product.price>100)
                return single_product.title
        })
        console.log(producttitle2)

    } catch (error) {
        console.error(error)
    }

})()