import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { v4 as idGenerator } from 'uuid';

function TodoMethods() {

  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState([])
  const [editableIndex, setEditableIndex] = useState(-1)
  const [editedText, setEditedText] = useState('')

  const addTask = async (id, task) => {
    try {
      const { data } = await axios.post(`http://localhost:8081/addtask?id=${id}&task=${task}`)
      setTodoList(data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleAdd = (e) => {
    e.preventDefault()
    addTask(idGenerator(), todo)
    setTodo('')
    console.log(todoList)
  }

  const deleteTask = async (id) => {
    try {
      const { data } = await axios.post(`http://localhost:8081/delete?id=${id}`)
      setTodoList(data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = (id) => {
    deleteTask(id)
  }

  const loadTask = async () => {
    try {
      const { data } = await axios.get('http://localhost:8081/read')
      setTodoList(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadTask()
  }, [])

  const editTask = async (id, task) => {
    try {
      const { data } = await axios.post(`http://localhost:8081/update?id=${id}&task=${task}`)
      setTodoList(data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleEdit = () => {
    const task = todoList[editableIndex]
    editTask(task.id, editedText)
    setEditableIndex(-1)
  }

  return (
    <div>
      <form onSubmit={handleAdd}>
        <input type="text" className="border border-gray-200 w-auto p-3 rounded mt-4" name="todo" placeholder="Enter Task"
          value={todo}
          onChange={e => setTodo(e.target.value)}
        />
        <button className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 m-4" type="submit"
        >
          Add Task
        </button>
      </form>

      <div>
        {todoList.map((item, index) => {
          return <div key={item.id} className="border border-gray-200 w-auto p-3 rounded mt-4">
            {editableIndex == index ? <>
              <input type="text" name="" id="" value={editedText} onChange={e => { setEditedText(e.target.value) }}
                className='border border-gray-500 w-auto p-3 rounded mt-4'
              />
              <button onClick={handleEdit} className="bg-slate-200 font-bold uppercase text-sm p-3 m-4">Save</button>
            </> :
              <>
                <div>{item.task}</div>
                <button className="bg-slate-200 font-bold uppercase text-sm p-3"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
                <button className="bg-slate-200 font-bold uppercase text-sm p-3 m-4"
                  onClick={() => {
                    setEditableIndex(index)
                    setEditedText(item.task)
                  }
                  }
                >
                  Edit
                </button>
              </>
            }

          </div>
        }
        )}
      </div>
    </div>
  )
}

export default TodoMethods
