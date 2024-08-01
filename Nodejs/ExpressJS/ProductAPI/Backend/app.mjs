import express from 'express'
import productRoute from './Routes/product.route.mjs'
import cartRoute from './Routes/cart.route.mjs'

const app=express()
app.use(express.json())

app.use('/product',productRoute)
app.use('/cart',cartRoute)

app.listen(8080,(err)=>{
    if(err) process.exit(1)
    console.log('Server Running');
})