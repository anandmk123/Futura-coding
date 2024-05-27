const { default: axios } = require("axios")

;(async ()=>{
    try {
        //await --> to wait for data loading 
        const {data}= await axios.get('https://dummyjson.com/products') // object dereference
        console.log(data)
              
    } catch (error) {
        console.log(error)
    }
})()//automatically call the function
