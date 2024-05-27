const axios = require('axios') //package can be installed using 'npm i axios'

//do
axios.get('https://dummyjson.com/products')
 .then((respon)=>{
    for(let i=0;i<respon.data.products.length;i++)
        {
            if(respon.data.products[i].price > 100)
                console.log(respon.data.products[i].title)
        }
})
 .catch((err)=>{console.log(err)})