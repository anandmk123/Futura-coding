import React, { useState } from 'react'
import { useProduct } from '../Context'
import axios from 'axios'
import { toast } from 'react-toastify'

function ShowIndividualProduct({ setViewProduct, viewIndex, setViewIndex }) {

    const { productList, setProductList, cartList, setCartList } = useProduct()
    const individualProduct = productList[viewIndex]

    const addCart = async () => {
        try {
                const { data } = await axios.post('http://localhost:8080/cart/addcart', individualProduct);
                setCartList(data)
                toast.success('Item added successfully');
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }


    const handleAddtoCart = () => {
        addCart()

    }
    console.log(cartList)

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

            <img
                className="h-26 w-16 rounded-full"
                src="/add-to-cart-3046.svg"
                alt=""
                onClick={() => {
                    handleAddtoCart()
                }
                }
            />

        </div>
    )
}

export default ShowIndividualProduct
