import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function PasswordHashing() {

    const [password, setPassword] = useState('')
    const [hashedPassword, setHashedPassword] = useState('')

    const navigate = useNavigate()

    const generateHash = async () => {
        try {
            const { data } = await axios.post('http://localhost:8081/password/hash/generate', {
                password: password
            })
            setHashedPassword(data.hashedPassword)

        } catch (error) {
            console.log(error);

        }
    }

    const handlegenerateHash=()=>{
        if(password.length==0)
            toast.error('Please enter a password')
        else
            generateHash()
    }

    const clearHash = () => {
        setPassword('')
        setHashedPassword('')
    }


    return (
        <div className="h-full">
            <div className="container pt-8 md:pt-12 mx-auto flex flex-wrap flex-col md:flex-row items-center justify-center">
                <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
                    <h1 className="my-4 text-3xl md:text-5xl text-red-200 opacity-75 font-bold leading-tight text-center md:text-left">
                        Generate.
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                            Hashing
                        </span>
                    </h1>

                    <form className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4 flex flex-col sm:flex-row">
                            <label className="block text-blue-300 py-2 font-bold mb-2 mt-5 text-4xl">
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full m-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out "
                                type="text"
                                name='password'
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="flex gap-4 pt-4 flex-col justify-center sm:flex-row">
                            <button
                                className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                                type="button"
                                onClick={handlegenerateHash}
                            >
                                Generate Hash
                            </button>

                            <button
                                className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                                type="button"
                                onClick={clearHash}
                            >
                                clear
                            </button>
                        </div>

                        <div className="mb-4">
                            <label className="block text-blue-300 py-2 font-bold mb-2 mt-5 text-4xl">
                                Hashed Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out "
                                type="text"
                                name='hashedPassword'
                                placeholder="Hashed Password"
                                value={hashedPassword}
                                readOnly
                            />
                        </div>

                        <button
                            className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 mx-48 my-10 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                            type="button"
                            onClick={() => navigate('/validateHash')}
                        >
                            Validate Hash
                        </button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default PasswordHashing