import React from 'react'
import { Link } from 'react-router-dom'

function NavigationBar() {
  return (
    <div className="w-full container mx-auto">
      <div className="w-full flex items-center justify-between">
        <Link to={'/'} className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
          URL .<span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500"> Shortener</span>
        </Link>
      </div>
    </div>
  )
}

export default NavigationBar
