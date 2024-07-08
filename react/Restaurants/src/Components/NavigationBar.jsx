import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import RestaurantList from './RestaurantList';


function NavigationBar() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
    <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                <img className="h-8 w-autos" src="/restaurant.png" alt="Your Company"/>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                    <Link to={'/'}  className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">RESTAURANTS</Link>
                    <button onClick={()=>setShowModal(true)} className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">Add resturant</button>
                </div>
                </div>
            </div>
            </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
            <Link to={'/'}  className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">RESTAURANTS</Link>
            <button onClick={()=>setShowModal(true)} className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white mx-2">Add resturant</button>
            </div>
        </div>
    </nav>
    <RestaurantList showModal={showModal} setShowModal={setShowModal}></RestaurantList>
    </>
  )
}

export default NavigationBar
