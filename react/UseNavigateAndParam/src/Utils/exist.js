export const alreadyExist=(todos,todo)=>{
    if(todo==='') 
        return 'Task Field is empty'
    const exist=todos.find(item=>item.task===todo)
    if(exist) 
        return 'Task already exist'
    return true
}