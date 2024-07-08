import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useProduct } from '../Hooks/UseProduct'
import { toast } from 'react-toastify'


function ViewProduct() {
    const {page} = useParams()
    const [singleProduct,setSingleProduct]=useState([])
    const {cartList,setCartList}=useProduct()

    const loadSingleProduct=async()=>{
      try {
          const {data}=await axios.get(`https://dummyjson.com/products/${page}`);
          setSingleProduct(data)
      } catch (error) {
          console.log(error);
      }
  }

  //invoke a function on page load
  useEffect(()=>{
    loadSingleProduct()
  },[])

const addToCart=(e)=>{
  let flag=false
  cartList.forEach(element => {
      if(element.id===singleProduct.id)
          flag=true
  })
  if(flag===true)
      {
          toast.error('Item already exists in cart')
      }
  else{
      setCartList(prev=>{
          return [...prev,singleProduct]
      })
      toast.success('Item added to cart')
  }

}

  // // console.log(singleProduct)
  // console.log(cartList)

  return (
    <div className="bg-white">
    <div className="pt-6">

      <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
        {singleProduct.images?.map((ele,index) => (
                  <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8" key={index}>
                    <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                      <img
                    src={ele}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                </div>
                
                ))}
      </div>    

      {/* Product info */}
      <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{singleProduct.title}</h1>
        </div>

        {/* Price */}
        <div className="mt-4 lg:row-span-3 lg:mt-0">
          <h2 className="sr-only">Product information</h2>
          <p className="text-3xl tracking-tight text-gray-900">${singleProduct.price}</p>

            <button
              className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 "
              onClick={()=>addToCart()}
            >
              Add to bag
            </button>
        </div>

        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
          {/* Description and details */}
          <div>
            <h3 className="sr-only">Description</h3>
            <div className="space-y-6">
              <p className="text-base text-gray-900">{singleProduct.description}</p>
            </div>
          </div>


          <div className="mt-10">
            <h3 className="text-sm font-medium text-gray-900">Reviews</h3>
            <div className="mt-4">
              <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                {singleProduct.reviews?.map((ele) => (
                  <li key={ele.reviewerEmail} className="text-gray-400">
                    <span className="text-gray-600">{ele.comment}</span>
                    <span className="text-gray-900">---{ele.reviewerName}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

  )
}

export default ViewProduct
