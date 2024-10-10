import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function TodoMethods() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    Name: '',
    Age: 0,
    Place: ''
  })

  const [editFormData, setEditFormData] = useState({
    id: '',
    Name: '',
    Age: '',
    Place: ''
  })

  const [todoList, setTodoList] = useState([])
  const [editableIndex, setEditableIndex] = useState(-1)
  const [searchName, setSearchName] = useState('')

  const handleFormDataChange = (e) => {
    const key = e.target.name
    const value = e.target.value
    setFormData(prev => ({ ...prev, [key]: value }))
  }

  const handleEditDataChange = (e) => {
    const key = e.target.name
    const value = e.target.value
    setEditFormData(prev => ({ ...prev, [key]: value }))
  }

  const handleAdd = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post('http://localhost:8080/todo/create', formData)
      loadDetails()
      setFormData({ Name: '', Age: '', Place: '' })
      toast.success('Data added successfully')
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  const loadDetails = async () => {
    try {
      const { data } = await axios.get(`http://localhost:8080/todo/searchbyname?search=${searchName}`)
      setTodoList(data.result)
    } catch (error) {
      console.log(error)
    }
  }

  const handleEdit = async () => {
    try {
      const { data } = await axios.patch('http://localhost:8080/todo/updatebyid', editFormData)
      loadDetails()
      setEditableIndex(-1)
      setEditFormData({ id: '', Name: '', Age: '', Place: '' })
      toast.success('Edited successfully')
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(`http://localhost:8080/todo/deletebyid?id=${id}`)
      loadDetails()
      toast.success('Deleted successfully')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadDetails()
  }, [])
  useEffect(() => {
    loadDetails()
  }, [searchName])

  return (
    <div className='flex flex-col'>

      <form className='flex flex-col w-1/4' onSubmit={handleAdd}>
        <input
          type="text"
          name="Name"
          placeholder='Enter your name'
          value={formData.Name}
          onChange={handleFormDataChange}
          className='border border-gray-400 p-2 m-3 bg-gray-100'
        />

        <input
          type="number"
          name="Age"
          placeholder='Enter your Age'
          value={formData.Age}
          onChange={handleFormDataChange}
          className='border border-gray-400 p-2 m-3  bg-gray-100'
        />

        <input
          type="text"
          name="Place"
          placeholder='Enter your Place'
          value={formData.Place}
          onChange={handleFormDataChange}
          className='border border-gray-400 p-2 m-3  bg-gray-100'
        />

        <button type="submit" className='border border-gray-400 w-28 self-center bg-gray-100'>
          ADD
        </button>
      </form>

      <input
          type="text"
          name="Search"
          placeholder='Enter Name to search'
          value={searchName}
          onChange={(e)=>{setSearchName(e.target.value)
            loadDetails()
          }
        }
          className='border border-gray-400 p-2 m-3 bg-gray-100 self-end'
        />


      <div>
        {todoList.map((item, index) => {
          return <div key={item._id} className='border border-gray-400 p-2 m-3 bg-gray-100'>
            {editableIndex === index ?
              <>
                <input
                  type="text"
                  name="Name"
                  placeholder='Enter your name'
                  value={editFormData.Name}
                  onChange={handleEditDataChange}
                  className='border border-gray-400 p-2 m-3 bg-gray-100'
                />
                <input
                  type="number"
                  name="Age"
                  placeholder='Enter your Age'
                  value={editFormData.Age}
                  onChange={handleEditDataChange}
                  className='border border-gray-400 p-2 m-3  bg-gray-100'
                />

                <input
                  type="text"
                  name="Place"
                  placeholder='Enter your Place'
                  value={editFormData.Place}
                  onChange={handleEditDataChange}
                  className='border border-gray-400 p-2 m-3  bg-gray-100'
                />

                <button className='border border-gray-400 w-28 self-center bg-red-400 m-2'
                  onClick={() => {
                    handleEdit()
                  }}>
                  SAVE
                </button>

              </>
              :
              <>
                <div>{item.Name}</div>
                <div>{item.Age}</div>
                <div>{item.Place}</div>

                <button className='border border-gray-400 w-28 self-center bg-red-400 m-2'
                  onClick={() => {
                    setEditableIndex(index)
                    setEditFormData({ id: item._id, Name: item.Name, Age: item.Age, Place: item.Place })
                  }}
                >
                  EDIT
                </button>

                <button className='border border-gray-400 w-28 self-center bg-red-400 m-2'
                  onClick={() => handleDelete(item._id)}
                >
                  DELETE
                </button>

              </>
            }
          </div>
        })
        }
      </div>
    </div>
  )
}

export default TodoMethods
