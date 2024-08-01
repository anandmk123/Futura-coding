import React, { useEffect, useState } from 'react'
import { useProduct } from '../Context'
import axios from 'axios'
import ShowIndividualCart from './ShowIndividualCart'

function ShowCartList() {
  const { cartList, setCartList } = useProduct()
  const [viewProduct, setViewProduct] = useState(false)
  const [viewIndex, setViewIndex] = useState(-1)

  const loadCart = async () => {
    try {
      const { data } = await axios.get('http://localhost:8080/cart/getcartlist');
      setCartList(data)
    } catch (error) {
      console.log(error);
    }
  }

  const deleteCart = async (id) => {
    try {
      const { data } = await axios.delete(`http://localhost:8080/cart/deletecart/${id}`);
      setCartList(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadCart()
  }, [])

  const handleRemove = (ele) => {
    deleteCart(ele.id)
  }

  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {cartList.length == 0 ?
              <>
                <div>
                  <h3 className="text-2xl text-gray-700">
                    Cart List is Empty
                  </h3>
                </div>
              </>
              : cartList.map((product, index) => {
                return <div key={product.id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={product.image}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      onClick={() => {
                        setViewIndex(index)
                        setViewProduct(true)
                      }}
                    />
                  </div>
                  <div className="mt-4 flex gap-3 content-baseline">
                    <h3 className="text-2xl text-gray-700">
                      {product.productname}
                    </h3>
                    <img src="/deleteicon.svg" alt="" className='h-8' onClick={() => handleRemove(product)} />
                  </div>
                </div>
              })
            }
          </div>
        </div>
      </div>

      {viewProduct ? <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <ShowIndividualCart setViewProduct={setViewProduct} viewIndex={viewIndex} setViewIndex={setViewIndex} />
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </> : null
      }

    </div>
    
  )
}

export default ShowCartList
