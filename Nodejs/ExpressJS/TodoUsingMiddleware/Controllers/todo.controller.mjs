import { v4 as idGenerator } from 'uuid';

let Todolist=[]

const handleStatus=(req,res)=>{
    return res.status(200).send({
        message:"Ok"
    })
}

const handleGetTodoList=(req,res)=>{
    return res.status(200).send(Todolist)
}

const handleAddTask=(req,res)=>{
    Todolist.unshift(req.body)
    return res.status(200).send(Todolist)
}

const handleDeleteTask=(req,res)=>{
    const {id}=req.params
    Todolist = Todolist.filter(listItem => {
        if(listItem.id!=id){
            return listItem
        }
    })
    return res.status(200).send(Todolist)
}

const handleUpdateTask=(req,res)=>{
    const { id,taskname } = req.body
    Todolist = Todolist.map(listItem => {
        if(listItem.id==id){
            return {...listItem,taskname:taskname,updatedAt:new Date().toLocaleString({timeZone: 'Asia/Kolkata'})}
        }
        return listItem
    })
    return res.status(200).send(Todolist)
}
export default {
    handleStatus,
    handleGetTodoList,
    handleAddTask,
    handleDeleteTask,
    handleUpdateTask
}