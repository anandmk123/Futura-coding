import express from 'express'
import * as db from "./Config/db.connection.mjs"
import todoRouter from './Routes/todo.route.mjs'
import cors from 'cors'

const app=express()
db.config()
app.use(express.json())
app.use(cors({
    origin:"*",
    methods:"*"
}))
app.use('/todo',todoRouter)

app.listen(process.env.PORT || 8080,(err)=>{
    if(err) 
        return process.exit(1);
    console.log('Server is running');
})