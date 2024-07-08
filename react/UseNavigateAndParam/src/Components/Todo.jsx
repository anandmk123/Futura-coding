import React, { useState } from 'react'
import { useTodos } from '../Hooks/UseTodos'
import { alreadyExist } from '../Utils/exist'
import toast from 'react-hot-toast'
import { todoObject } from '../Utils/generateTodo'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form';

function Todo() {
    const [todo,setTodo]=useState("")
    const {todos,setTodos}=useTodos()

    const navigate = useNavigate()

    const handleAdd=(e)=>{
        e.preventDefault() 
        const resp=alreadyExist(todos,todo)
        if(resp!=true) 
            return toast.error(resp)
        const task=todoObject(todo)
        setTodos(prev=>([task,...prev]))
        setTodo('')
    }

    const handleRemove=(id)=>{
        const res=todos.filter(ele=>ele.id!=id)
        setTodos(res)
    }

  return (
    <div>
        <form onSubmit={handleAdd} className='form-control text-light bg-info'>
            <Form.Label className='h3'>Enter Task :</Form.Label>
            <input type="text" name="todo" id="" value={todo} onChange={e=>setTodo(e.target.value)} className='bg-secondary text-light'/>
            <button className='m-4 bg-secondary text-light'>Add Task</button>
        </form>

        <div>
            {
                todos.map(ele=>{
                    return(
                        <div key={ele.id} className='form-control text-light bg-primary'>
                            <span className='h3'>Task Name :</span> {ele.task} 
                            <div><span className='h3'>Date and Time :  </span> {ele.dateOfAdded}</div>
                            <button onClick={()=>handleRemove(ele.id)} className='m-3 bg-secondary text-light'>Remove Task</button>
                            <button onClick={()=>navigate(`/update-task/${ele.id}`)} className='m-3 bg-secondary text-light'>Update Task</button>
                        </div>
                    )
                })
            }
        </div>


    </div>
  )
}

export default Todo
