import { v4 as idGenerator } from 'uuid';
export const modifyAddRequrst=(req,res,next)=>{
    console.log('modifyAddRequrst middleware called')
    const {taskname}=req.body
    const taskObject={
        id:idGenerator(),
        taskname:taskname,
        createdAt:new Date().toLocaleString({timeZone: 'Asia/Kolkata'}),
        updatedAt:new Date().toLocaleString({timeZone: 'Asia/Kolkata'})
    }
    req.body=taskObject
    next()
}