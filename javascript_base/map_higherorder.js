///A higher order function is a function that takes one or more functions as arguments, or returns a function as its result

const { default: axios } = require("axios")
let productprice
let productpricefilter1
let productpricefilter2
let productpricefilter3
let productpricefilter4
;(async ()=>{
    try {
        const {data}=await axios.get('https://dummyjson.com/products')
        const {products}=data

        //map -->always return the array of length of called element. 
        productprice=products.map((single_element)=>{
            return single_element.title
        })
        //console.log(productprice) // return all title as array of strings

        productpricefilter1 = products.map(single_element=>single_element.price>100?single_element.title:'')
        //console.log(productpricefilter1) // return all title having price>100 and remaing title as ''

        productpricefilter2 = products.map(single_element=>single_element.price>100 && single_element.title)
        //console.log(productpricefilter2) // return all title having price>100 and remaing title as false
 
        productpricefilter3 = products.map(single_element=>single_element.price>100??single_element.title)
        //console.log(productpricefilter3) // return true or false
        
        productpricefilter4=products.map(single_element=>{
            if(single_element.price>100)
                return single_element.title
        })
        console.log(productpricefilter4) //return all title having price>100 and remaing title as undefined

    } catch (error) {
        console.error(error)
    }

})()