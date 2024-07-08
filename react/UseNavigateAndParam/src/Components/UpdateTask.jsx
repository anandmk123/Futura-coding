import React, { useState } from 'react'
import { useTodos } from '../Hooks/UseTodos'
import { useNavigate, useParams } from 'react-router-dom'
import { alreadyExist } from '../Utils/exist'
import toast from 'react-hot-toast'


function UpdateTask() {

  const {updateId} = useParams()
  const {todos,setTodos}=useTodos()
  const [todo,setTodo]=useState(todos[todos.findIndex(i=>i.id==updateId)]?.task)

  const navigate=useNavigate()

  const handleUpdate =(e)=>{
    e.preventDefault() 
    const res=alreadyExist(todos,todo)
    if(res!=true) 
      return toast.error(res)
    const result=todos.map(ele=>{
      if(ele.id==updateId){
        return {...ele,task:todo}
      }
      return ele
    }
    )
    setTodos(result)
    navigate('/')
  }

  return (
    <div>
        <form onSubmit={handleUpdate} className='form-control text-light bg-info'>
          <label className='h3'>Edit Task  : </label>
          <input type="text" name="todo" id="" value={todo} onChange={e=>setTodo(e.target.value)} placeholder='Enter Task' className='bg-secondary text-light ms-2'/>
          <button className='m-4 bg-secondary text-light'>Update Task</button>
        </form>

    </div>
  )
}

export default UpdateTask
