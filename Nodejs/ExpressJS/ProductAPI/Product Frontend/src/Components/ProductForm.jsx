import React, { useState } from 'react'
import axios from 'axios'
import { useProduct } from '../Context'


function ProductForm({ setShowModal, editableIndex, editFlag, setEditFlag }) {

    const { productList, setProductList,cartList, setCartList } = useProduct()
    const editedProduct = productList[editableIndex]

    const [formData, setFormData] = useState({
        id: editFlag ? editedProduct?.id : '',
        productname: editFlag ? editedProduct?.productname : '',
        price: editFlag ? editedProduct?.price : '',
        image: editFlag ? editedProduct?.image : ''
    })


    const addProduct = async () => {
        try {
          const { data } = await axios.post('http://localhost:8080/product/addproduct',formData);
          setProductList(data)
        } catch (error) {
          console.log(error);
        }
      }

      const updateProduct = async () => {
        try {
          const { data } = await axios.patch('http://localhost:8080/product/update',formData);
          setProductList(data)
        } catch (error) {
          console.log(error);
        }
      }
      const updateCart = async () => {
        try {
          const { data } = await axios.patch(`http://localhost:8080/cart/update/${formData.id}`);
          console.log(data);
          setCartList(data)
        } catch (error) {
          console.log(error);
        }
      }

    //   const updateCart = async () => {
    //     try {
    //       const { data } = await axios.patch('http://localhost:8080/cart/update/',formData);
    //       console.log(data);
    //       setCartList(data)
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }



    const handleFormChange=(e)=>{
        const key=e.target.name
        const value=e.target.value
        setFormData(prev=>({...prev,[key]:value}))
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(editFlag){
            updateProduct()
            updateCart()
        }
        else{
            addProduct()
        }
        setShowModal(false)
        setEditFlag(false)
    }


    return (
        <>
            <div className="bg-gray-200 flex flex-col">
                <form className='container max-w-xl mx-auto flex-1 flex flex-col items-center justify-center px-2 m-5' onSubmit={handleSubmit}>
                    <h1 className="mb-8 text-3xl text-center">Add Product</h1>
                    <input
                        type="text"
                        className="block border border-gray-200 w-full p-3 rounded mt-4"
                        name="productname"
                        placeholder="Product Name"
                        value={formData.productname}
                        onChange={handleFormChange}
                    />
                    <input
                        type="text"
                        className="block border border-gray-200 w-full p-3 rounded mt-4"
                        name="price"
                        placeholder="Price"
                        value={formData.price}
                        onChange={handleFormChange}
                    />
                    <input
                        type="text"
                        className="block border border-gray-200 w-full p-3 rounded mt-4"
                        name="image"
                        placeholder="Image"
                        value={formData.image}
                        onChange={handleFormChange}

                    />
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => {
                                setShowModal(false)
                                setEditFlag(false)
                            }}
                        >
                            Close
                        </button>
                        <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="submit"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ProductForm
