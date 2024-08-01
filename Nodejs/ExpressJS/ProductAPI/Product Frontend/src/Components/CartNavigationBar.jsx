import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function CartNavigationBar() {

    const navigate = useNavigate()
    return (
        <>
            <nav className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <img className="h-8 w-autos" src="/Logo.png" alt="Your Company" />
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <Link to={'/'} className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">PRODUCTS</Link>
                                    <img
                                        className="h-8 w-8 rounded-full"
                                        src="/shopping-cart.svg"
                                        alt=""
                                        onClick={() => navigate('/cart')}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Mobile menu, show/hide based on menu state. --> */}
                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        <Link to={'/'} className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">PRODUCTS</Link>
                        <img
                            className="h-8 w-8 rounded-full"
                            src="/shopping-cart.svg"
                            alt=""
                            onClick={() => navigate('/cart')}
                        />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default CartNavigationBar
