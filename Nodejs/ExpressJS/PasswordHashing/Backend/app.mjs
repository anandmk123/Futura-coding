import express from 'express'
import passwordRoute from './Routes/password.route.mjs'

const app=express()
app.use(express.json())

app.use('/password',passwordRoute)


app.listen(8081,(err)=>{
    if(err) process.exit(1)
    console.log('Server Running');
})