import React, { useEffect, useState } from 'react'

function FormValidation() {

    const [formData,setFormData]=useState(
        {
            username:'',//this field name should be same as name field of html input element
            password:''
        }
    )
    const [errorData,setErrorData]=useState(
      {
        username:'',
        password:''
      }
    )

    const [colorData,setColorData]=useState(
      {
        username:'',
        password:''
      }
    )

    const handleFormChange=(e)=>{
        const key=e.target.name
        const value=e.target.value
        setFormData({...formData,[key]:value})
    }

    const validateForm = ()=>{
      const usernameRegex=/^[A-Za-z][A-Za-z0-9_]{7,29}$/
      const passwordRegex=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/
      if(!usernameRegex.test(formData.username))
        {
          setErrorData(prev=>({...prev,username:'Username should start with an alphabet. All other characters can be alphabets, numbers or an underscore.Length should be atleast 8 character'}))
          setColorData(prev=>({...prev,username:'red'}))
        }
      else
      {
        setErrorData(prev=>({...prev,username:'Valid Username'}))
        setColorData(prev=>({...prev,username:'green'}))
      }

      if(!passwordRegex.test(formData.password))
        {
          setErrorData(prev=>({...prev,password:'Password must contain atleast one lowercase letter, one uppercase letter, one special character , one digit and  must be 8-16 characters long'}))
          setColorData(prev=>({...prev,password:'red'}))
        }
      else
      {
        setErrorData(prev=>({...prev,password:'Valid Password'}))
        setColorData(prev=>({...prev,password:'green'}))
      }
      
    }

    useEffect(()=>{
      validateForm()
    },[formData])

    const handleSubmit=(e)=>{
      e.preventDefault()
    }

  return (
    <div className='mt-4'>
      <h1>Form Validation</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" id="username" className='m-2'value={formData.username} onChange={handleFormChange}/>
            <div  className='m-2' style={{color:`${colorData.username}`}}>{errorData.username}</div>
            <input type="password" name="password" id="password" className='m-2' value={formData.password} onChange={handleFormChange}/>
            <div  className='m-2' style={{color:`${colorData.password}`}}>{errorData.password}</div>
            <button type="submit" className='m-2'>Submit</button>
        </form>
    </div>
  )
}

export default FormValidation
