import express from 'express'
import todoRoute from './Routes/todo.route.mjs'
import morgan from 'morgan'
import cors from 'cors'
import { requestLog } from './Middleware/log.mjs'

const app=express()

//middleware-->Working between a request and its response. Will work for all request 
//All middlewares are given in app.use()
//Application middleware --> Inbuild Middlewares like express.json()
app.use(express.json())

//Costum middleware --> Created by us
app.use((req,res,next)=>{
    console.log('Middleware checking')
    next()

})

//third party middleware- morgan, corse
//morgan-Get the details of a Request (Method,url,Response status code,time required between request and response)(npm i morgan)
// app.use(morgan('dev'))

//cors-Cross Origin Resource Sharing (specify which all site can send the request and which all methods can be send)(npm i cors)
app.use(cors({
    // origin:["google.com","netflix.com"],
    origin:'*',//use * for all site
    methods:["POST","GET","PATCH","DELETE"], //* for all methods
}))

//import Costum middleware from other file --> 
// app.use(requestLog)

//Important Note -->these middleware are applicable for all request. Suppose we want to apply middleware to a particular route then
//give the middleware as a second parameter of a router function in router file

app.use('/todo',todoRoute)

app.listen(8080,(err)=>{
    if(err) process.exit(1)
    console.log('Server Running');
})