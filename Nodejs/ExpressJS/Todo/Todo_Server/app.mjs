import express from 'express'

const app=express()
app.use(express.json())

let Todolist = []

app.listen(8082,(err)=>{
    if(err) process.exit(1)
    console.log('Server Running');
})

app.get('/readtask',(req,res)=>{
    return res.status(200).send(Todolist)
})

app.post('/addtask',(req,res)=>{
    const todo=req.body
    Todolist.unshift(todo)
    return res.status(200).send(Todolist)
})

app.delete('/delete',(req,res)=>{
    const {id}=req.query
    Todolist = Todolist.filter(listItem => {
        if(listItem.id!=id){
            return listItem
        }
    })
    return res.status(200).send(Todolist)
})

app.patch('/update',(req,res)=>{
    const { id, task } = req.body
    Todolist = Todolist.map(listItem => {
        if(listItem.id==id){
            return {id:id,task:task}
        }
        return listItem
    })
    return res.status(200).send(Todolist)
})