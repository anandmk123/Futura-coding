import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { v4 as idGenerator } from 'uuid';
import { remove, unshift } from '../Redux/TodoSlice';

function TodoUsingRedux() {

    const [inputvalue,setInputValue]=useState('')
    const {todoList}=useSelector((state)=>state.todo)
    const dispatch=useDispatch()


    const handleSubmit=(e)=>{
        e.preventDefault()
        const task={taskname:inputvalue,id:idGenerator()}
        dispatch(unshift({task:task}))
        setInputValue('')
    }

    const handleRemove=(ele)=>{
        dispatch(remove({task:ele}))
    }
    console.log(todoList)

  return (
    <div>
        <h1>Add Task</h1>
      <form onSubmit={handleSubmit}> 
        <input type="text" name="" id="" placeholder='Enter Task'
        value={inputvalue}
        onChange={e=>setInputValue(e.target.value)}
        />
        <button type="submit">Add task</button>
      </form>

      <h1>Task List</h1>
      <ul>
        {
           todoList.map(ele=>{
            return(
                <li key={ele.id}>{ele.taskname}
                <button style={{margin:'20px'}} onClick={()=>handleRemove(ele)}>Remove</button>
                </li>
            )
           }) 
        }
      </ul>

    </div>
  )
}

export default TodoUsingRedux
