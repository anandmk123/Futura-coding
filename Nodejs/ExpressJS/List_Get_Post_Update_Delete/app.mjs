import express from 'express'

const app=express()
app.use(express.json())
let list=[]

app.listen(8081,(err)=>{
    if(err) process.exit(1)
    console.log('Server Running');
})

app.get('/getlist',(req,res)=>{
    return res.status(200).send(list)
})

app.post('/addlist',(req,res)=>{
    const {item}=req.body
    list.unshift(item)
    return res.status(200).send(list)
})

app.patch('/update',(req,res)=>{
    const {prev,item}=req.body
    list = list.map(listItem => {
        if(listItem==prev){
            return item
        }
        return listItem
    })
    return res.status(200).send(list)
})

app.delete('/delete',(req,res)=>{
    const {item}=req.query
    list = list.filter(listItem => {
        if(listItem!=item){
            return listItem
        }
    })
    return res.status(200).send(list)
})