import { useFormik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'

function FormValidation() {

    const formik = useFormik({
        initialValues:{
            username:"",
            password:""
        },
        onSubmit:(values)=>{
            console.log(values)
        },

        validate:(values)=>{
            const error = {}
            if(values.username=="")
                error.username="Username is required"
            if(values.password=="")
                error.password="Password is required"
            return error
        }
    }
    )

  return (
    <div>
        <h1>Form Validation Without Yup</h1>
        <form onSubmit={formik.handleSubmit}>
            <input type="text" name="username" placeholder='Enter Username' value={formik.values.username} onChange={formik.handleChange}/>
            <div>{formik.errors.username}</div>
            <input type="password" name="password" placeholder='Enter Password' value={formik.values.password} onChange={formik.handleChange}/> 
            <div>{formik.errors.password}</div>
            <button type="submit">Submit</button> <br />
            <Link to={'/formvalidationyup'}>Navigate Form Validation using Yup</Link>
        </form>
    </div>
  )
}

export default FormValidation
