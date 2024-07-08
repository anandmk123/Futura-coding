import { v4 as uuidv4 } from "uuid"

export const todoObject =(task)=>{
    const obj={
        id:uuidv4(),
        task:task,
        dateOfAdded:new Date().toLocaleString('en-IN')

    }
    return obj
}