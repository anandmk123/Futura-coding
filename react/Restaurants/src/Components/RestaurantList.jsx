import React, { useState } from 'react'
import RestaurantForm from './RestaurantForm';
import { useSelector, useDispatch } from 'react-redux'
import { removeRestaurant } from '../Redux/restaurantSlice';
import ShowProduct from './ShowProduct';


function RestaurantList({ showModal, setShowModal }) {

  const { restaurantList } = useSelector(state => state.restaurant)
  const dispatch = useDispatch()

  const handleRemove = (ele) => {
    dispatch(removeRestaurant({ restaurant: ele }))
  }

  const [editableIndex, setEditableIndex] = useState(-1)

  const [editFlag, setEditFlag] = useState(false)
  const [viewProduct, setViewProduct] = useState(false)
  const [viewIndex, setViewIndex] = useState(-1)

  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {restaurantList.length == 0 ?
              <>
                <div>
                  <h3 className="text-2xl text-gray-700">
                    Restaurant List is Empty
                  </h3>
                </div>
              </>
              : restaurantList.map((restaurant, index) => {
                return <div key={restaurant.id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={restaurant.image}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      onClick={() => {
                        setViewIndex(index)
                        setViewProduct(true)
                      }}
                    />
                  </div>
                  <div className="mt-4 flex gap-3 content-baseline">
                    <h3 className="text-2xl text-gray-700">
                      {restaurant.restaurantname}
                    </h3>
                    <img src="/deleteicon.svg" alt="" className='h-8' onClick={() => handleRemove(restaurant)} />
                    <img src="/editicon.svg" alt="" className='h-8' onClick={() => {
                      setEditableIndex(index)
                      setEditFlag(true)
                      setShowModal(true)
                    }
                    } />
                  </div>
                </div>
              })
            }
          </div>
        </div>
      </div>

      {
        showModal ? <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <RestaurantForm setShowModal={setShowModal} editableIndex={editableIndex} editFlag={editFlag} setEditFlag={setEditFlag} />
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </> : null
      }

      {viewProduct ? <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <ShowProduct setViewProduct={setViewProduct} viewIndex={viewIndex} setViewIndex={setViewIndex} />
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </> : null
      }

    </div>
  )
}

export default RestaurantList
