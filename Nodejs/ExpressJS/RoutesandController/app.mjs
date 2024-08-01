import express from 'express'
import todoRoute from "./Routes/todo.route.mjs"

const app=express()
app.use(express.json())

app.use('/todo',todoRoute)

app.listen(8081,(err)=>{
    if(err) process.exit(1)
    console.log('Server Running');
})