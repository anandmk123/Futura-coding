import React, { useState } from 'react'
import { useProduct } from '../Context'

function ShowIndividualCart({ setViewProduct, viewIndex, setViewIndex }) {

    const { cartList, setCartList } = useProduct()
    const individualProduct = cartList[viewIndex]

    return (
        <div className="flex flex-col rounded-lg bg-gray-200 shadow-secondary-1 dark:bg-surface-dark w-96">
            <div className='self-end'>
                <img
                    className="h-8 w-8 rounded-full"
                    src="/Close.png"
                    alt=""
                    onClick={() => {
                        setViewProduct(false)
                        setViewIndex(-1)
                    }
                    }
                />
            </div>
            <div>
                <img
                    className="rounded-t-lg h-96 w-screen"
                    src={individualProduct.image}
                    alt="" />
            </div>
            <div className="p-6 text-surface dark:text-slate-950">
                <h5 className="mb-2 text-xl font-medium leading-tight">{individualProduct.productname}</h5>
                <p className="mb-4 text-base">Price : {individualProduct.price}</p>
            </div>

        </div>
    )
}

export default ShowIndividualCart
