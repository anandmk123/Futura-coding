import React from 'react'
import { useTodos } from '../context'
import { v4 as idGenerator } from 'uuid';
import { useState } from "react"


function Context_Testing() {

    const {todos,setTodos}=useTodos()
    const [inputvalues,setInputValues]=useState('')
    const submitText = (e)=>{
        e.preventDefault()
        setTodos(prev=>{
            return [...prev,{username:inputvalues,userstatus:false,id:idGenerator()}]
        })
        setInputValues('')
    }
    // console.log(todos)
  return (
    <div>
      <h1>Context</h1>
      <form className="form-control d-flex justify-content-center" onSubmit={submitText}>
          <input type="text" name="" id="" 
            value={inputvalues}
            onChange={e=>{setInputValues(e.target.value)}}          
          />
          <button type="submit" className="mx-2"
          >Add</button>
      </form>
      <ul>
        {todos.map(ele=>{
            return <li key={ele.id}>
            {ele.username}
            </li>            
        }
        )
        }
      </ul>      
    </div>
  )
}

export default Context_Testing
