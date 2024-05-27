const axios = require('axios') //package can be installed using 'npm i axios'

//fetch already in json format--> need to use respon.data
axios.get('https://dummyjson.com/products')
 .then((respon)=>{console.log(respon.data)})
 .catch((err)=>{console.log(err)})