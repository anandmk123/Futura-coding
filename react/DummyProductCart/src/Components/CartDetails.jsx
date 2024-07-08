import React, { useEffect } from 'react'
import { useProduct } from '../Hooks/UseProduct'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CartDetails() {
  const {cartList,setCartList}=useProduct()
  
  // console.log('Cart List')
  // 

  const navigate = useNavigate()

  const removeFromCart=(product)=>{
    setCartList(prev=>{
        return prev.filter(element=>element.id!==product.id)
    })
}


return (
  <div className="bg-white">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Cart List</h2>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {cartList.map((product) => (
          <div key={product.id} className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                className="h-8 w-8 rounded-full"
                src="/Close.png"
                alt=""
                onClick={()=>removeFromCart(product)}
              />
              <img
                  src={product.thumbnail}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  onClick={()=>navigate(`/product/${product.id}`)}
                />
            </div>
            
            <h3 onClick={()=>navigate(`/product/${product.id}`)}>{product.title}</h3>
          </div>
        ))}
      </div>
    </div>
  </div>
)
}

export default CartDetails
