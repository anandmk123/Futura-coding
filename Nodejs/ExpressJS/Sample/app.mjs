import express from 'express'

const app=express()

//get the body
app.use(express.json())

//send-->can be send only once in a request. Automatically find the return type and send
app.get('/',(req,res)=>{
    return res.send({name:'Anand',Age:23})
})

//status - 200ok
app.get('/status',(req,res)=>{
    return res.status(200).send('Send Response with status code')
})

//400-  bad request
app.get('/badrequest',(req,res)=>{
    return res.status(400).send('Response to bad request')
})

// 401-Unauthorized
app.get('/unauthor',(req,res)=>{
    return res.status(401).send('Response to Unauthorized request')
})

//502-Bad Gateway
app.get('/badgateway',(req,res)=>{
    return res.status(502).send('Response to Bad Gateway ')
})

app.listen(8080,(err)=>{
    if(err) process.exit(1)
    console.log('Server Running');

})

//get params and query
app.get('/:para1/:para2',(req,res)=>{

    const params=req.params
    const {para1,para2}=req.params
    console.log(params)
    console.log(para1,para2);

    const query=req.query
    console.log(query)
    const {username,id}=query
    console.log(username,id);

     return res.status(200).send('parameter and query')
})

//pass the body with post operation (For get the body add app.use(express.json())
//body is not available in get and delete method(available in post and patch)

app.post('/upload',(req,res)=>{
    const body=req.body
    return res.status(200).send(body)
})

//patch-->update
app.patch('/update',(req,res)=>{
//same as post
})

app.delete('/delete',(req,res)=>{
//same as get
})
