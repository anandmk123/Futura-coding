import { useState } from "react"
import uuid from "react-uuid" // uuid can be used two ways
import { v4 as idGenerator } from 'uuid';
import {toast} from 'react-toastify';
import NamesContainer from "../NamesContainer/NamesContainer";


function Form_Logic() {
    
  const [listnames,setListNames]=useState([])
  const [inputvalue,setInputValue]=useState('')
  const handleSubmit=(e)=>{
      e.preventDefault() // to prevent reload on submit
      let userdetails={username:inputvalue,userstatus:false}
      let flag=false
      if(inputvalue!=''){
        listnames.forEach(element => {
          if(element.username===inputvalue)
            flag=true
        });
        if(flag===true)
          {
          notify('Value already exists')
          }
        else
        {
          userdetails={...userdetails,id:idGenerator()}
          setListNames((previousState)=>{return [...previousState,userdetails]})
        }
      }
      else
        notify('Input can not be empty')

      setInputValue('')
  }
  // console.log(listnames)
  
  const notify =(msg)=>{
    toast.error(msg)
  }

  const deletenames=(namevalue)=>{
    setListNames(prev=>{
      return prev.filter(ele=>ele.id!==namevalue.id)
    })
  }

  const changeStatus=(namevalue)=>{
    setListNames(prev=>{
      return prev.map(ele=>ele.id===namevalue.id?{...ele,userstatus:!ele.userstatus}:ele)
    })
  }


return (
    <div>
      <h1>State</h1>
      <form className="form-control d-flex justify-content-center" onSubmit={handleSubmit}>
          <input type="text" name="" id="toDo" 
              value={inputvalue}
              onChange={(e)=>{setInputValue(e.target.value)}}
          />
          <button type="submit" className="mx-2">Add</button>
      </form>
      <NamesContainer listnames={listnames} deletenames={deletenames} changeStatus={changeStatus} setListNames={setListNames}/>
    </div>
)
}

export default Form_Logic
