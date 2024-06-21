const { default: axios } = require("axios")
let producttitle
;(async ()=>{
    try {
        const {data}=await axios.get('https://dummyjson.com/products')
        const {products}=data

        //reduce(accumulator,current)
        //accumulator is a temporaray variable and value can be given as second argument of reduce
        //current --> pointing to current element
        let totalprice=products.reduce((acc,cur)=>{
            acc=acc+cur.price
            return acc
        },0)
        console.log(totalprice)

        let totalprice1=products.reduce((acc,cur)=>acc+=cur.price,0)
        console.log(totalprice1)

    } catch (error) {
        console.error(error)
    }
})()