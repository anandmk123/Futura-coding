import React, { useState } from 'react'
import { randomLower, randomNumber, randomSymbol, randomUpper } from '../Utils/random';
import { toast } from 'react-toastify';


function GeneratePassword() {

  const [password, setPassword] = useState('')
  const [passwordLength, setPasswordLength] = useState(8)
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);

  const generatepass = () => {
    let pass = '';
    if (passwordLength < 5)
      toast.error('Password Length must be minimum 5 characters')
    else if (passwordLength > 30)
      toast.error('Password Length must be less than or equal to 30 characters')
    else if (!numbers && !lowercase && !uppercase && !symbols)
      toast.error('Atleast one option must be checked')
    else {
      let len = 0, numberLength = 0, lowerLength = 0, upperLength = 0, symbolLength = 0
      while (len < passwordLength) {
        let choice = randomNumber(0, 4);
        if (numbers) {
          if (numberLength == 0) {
            pass = pass + randomNumber(1, 10)
            len++;
            numberLength++;
          }
          else if (choice == 0) {
            pass = pass + randomNumber(1, 10)
            len++;
          }
        }
        if (lowercase) {
          if (lowerLength == 0) {
            pass = pass + randomLower()
            len++;
            lowerLength++;
          }
          else if (choice == 1) {
            pass = pass + randomLower()
            len++;
          }
        }
        if (uppercase) {
          if (upperLength == 0) {
            pass = pass + randomUpper()
            len++;
            upperLength++;
          }
          else if (choice == 2) {
            pass = pass + randomUpper()
            len++;
          }
        }
        if (symbols) {
          if (symbolLength == 0) {
            pass = pass + randomSymbol()
            len++;
            symbolLength++;
          }
          else if (choice == 3) {
            pass = pass + randomSymbol()
            len++;
          }
        }
      }
    }
    console.log(pass)
    setPassword(pass)
  }

  const clearpass =()=>{
    setPassword('')
    setPasswordLength(8)
  }


  return (

    <div className="h-full">
      <div className="container pt-8 md:pt-12 mx-auto flex flex-wrap flex-col md:flex-row items-center justify-center">
        <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
          <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
            Password.
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
              Generator
            </span>
          </h1>
          <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
            Instantly generate a secure, random password
          </p>

          <form className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-blue-300 py-2 font-bold mb-2">
                Password Length
              </label>
              <input
                className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                type="number"
                name='passwordlength'
                placeholder="Password Length"
                value={passwordLength}
                onChange={e => { setPasswordLength(e.target.value) }}
              />
            </div>

            <div className="mb-4 flex flex-col sm:flex-row">
              <div>
                <label className="inline-block text-blue-300 font-bold ms-3">
                  Number
                </label>
                <input
                  className="border rounded m-1"
                  type="checkbox"
                  name='numbers'
                  defaultChecked={numbers} onChange={e => { setNumbers(e.target.checked) }}
                />
              </div>

              <div>
                <label className="inline-block text-blue-300  font-bold ms-3" >
                  Upper case
                </label>
                <input
                  className="border rounded m-1"
                  type="checkbox"
                  name='uppercase'
                  defaultChecked={uppercase} onChange={e => { setUppercase(e.target.checked) }}
                />
              </div>

              <div>
                <label className="inline-block text-blue-300  font-bold ms-3" >
                  Lower case
                </label>
                <input
                  className="border rounded m-1"
                  type="checkbox"
                  name='lowercase'
                  defaultChecked={lowercase} onChange={e => { setLowercase(e.target.checked) }}
                />
              </div>

              <div>
                <label className="inline-block text-blue-300  font-bold ms-3" >
                  Special Characters
                </label>
                <input
                  className="border rounded m-1"
                  type="checkbox"
                  name='symbols'
                  defaultChecked={symbols} onChange={e => { setSymbols(e.target.checked) }}
                />
              </div>

            </div>

            <div className="flex gap-4 pt-4 flex-col sm:flex-row">
              <button
                className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                type="button"
                onClick={generatepass}
              >
                Generate Password
              </button>

              <button
                className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                type="button"
                onClick={clearpass}
              >
                clear
              </button>
            </div>

            <div className="mb-4">
              <label className="block text-blue-300 py-2 font-bold mb-2 mt-5 text-4xl">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out "
                type="text"
                name='passwordlength'
                placeholder="Password Length"
                value={password}
                readOnly
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default GeneratePassword
