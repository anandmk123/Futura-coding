import React from 'react'
import { useFormik } from 'formik'
import * as yup from "yup"

function FormValidationYup() {

    const validation=yup.object().shape({
        username:yup
                .string()
                .required("Username is required..!!")
                .min(4,"Minimu 4 character is required")
                .max(16,"Maximum 16 char are allowed"),
        password:yup
                .string()
                .required("Password is required..!!")
                .matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,"Password must contain atleast one lowercase letter, one uppercase letter, one special character , one digit and  must be 8-16 characters long")
    }
    )

    const formik = useFormik({
        initialValues:{
            username:"",
            password:""
        },
        onSubmit:(values)=>{
            console.log(values)
        },
        validationSchema:validation

    }
    )
  return (
    <div>
    <h1>Form Validation With Yup</h1>
    <form onSubmit={formik.handleSubmit}>
        <input type="text" name="username" placeholder='Enter Username' value={formik.values.username} onChange={formik.handleChange}/>
        <div>{formik.errors.username}</div>
        <input type="password" name="password" placeholder='Enter Password' value={formik.values.password} onChange={formik.handleChange}/> 
        <div>{formik.errors.password}</div>
        <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default FormValidationYup
