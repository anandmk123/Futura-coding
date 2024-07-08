import { useFormik } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as yup from 'yup'

function SignUpForm() {

    const validation=yup.object().shape(
        {
            fullname:yup.string().required('Name is required...!!!')
                        .min(4,"Minimum 4 character is required")
                        .max(16,"Maximum 16 character are allowed"),

            email:yup.string().required("Email is required...!!")
                        .matches(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,})$/,"Invalid Email"),
            
            password:yup.string().required("Password is required...!!")
                        .matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,"Password must contain atleast one lowercase letter, one uppercase letter, one special character , one digit and  must be 8-16 characters long"),

            confirmpassword:yup.string().required("Confirm Password is required...!!")
                                .oneOf([yup.ref('password')],"Password is not Matching")

        }
    )


    const formik=useFormik(
        {
            initialValues:{
                fullname:"",
                email:"",
                password:"",
                confirmpassword:""
            },
            onSubmit:(values)=>{
                console.log(values)
            },
            validationSchema:validation
        }
    )

  return (
    <>
        <div className="bg-gray-200 min-h-screen flex flex-col">
                <form className="container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2" onSubmit={formik.handleSubmit}>
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                        <input 
                            type="text"
                            className="block border border-gray-200 w-full p-3 rounded mt-4"
                            name="fullname"
                            placeholder="Full Name" 
                            value={formik.values.fullname}
                            onChange={formik.handleChange}
                            />
                        <div className='text-red-600 bg-gray-50 mt-1'>{formik.errors.fullname}</div>
                        <input 
                            type="text"
                            className="block border border-gray-200 w-full p-3 rounded mt-8"
                            name="email"
                            placeholder="Email" 
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            />
                        <div className='text-red-600 bg-gray-50 mt-1'>{formik.errors.email}</div>

                        <input 
                            type="password"
                            className="block border border-gray-200 w-full p-3 rounded mt-8"
                            name="password"
                            placeholder="Password" 
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            />
                        <div className='text-red-600 bg-gray-50 mt-1'>{formik.errors.password}</div>
                            
                        <input 
                            type="password"
                            className="block border border-gray-200 w-full p-3 rounded mt-8"
                            name="confirmpassword"
                            placeholder="Confirm Password" 
                            value={formik.values.confirmpassword}
                            onChange={formik.handleChange}
                            />
                        <div className='text-red-600 bg-gray-50 mt-1'>{formik.errors.confirmpassword}</div>
                            
                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-900 focus:outline-none my-1 mt-8"
                        >Create Account</button>

                        <div className="text-center text-sm text-gray-800 mt-4">
                            By signing up, you agree to the 
                            <a className="no-underline border-b border-gray-800 text-gray-800" href="/">
                                Terms of Service
                            </a> and 
                            <a className="no-underline border-b  border-gray-800  text-gray-800" href="/">
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                    <div className="text-gray-700 mt-6">
                    Already have an account? 
                    <a className="no-underline border-b border-blue-500 text-blue-700" href="../login/">
                        Log in
                    </a>.
                    </div>
                </form>
        </div>    
      
    </>
  )
}

export default SignUpForm
