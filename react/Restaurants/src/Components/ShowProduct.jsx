import React from 'react'
import { useSelector } from 'react-redux'

function ShowProduct({setViewProduct,viewIndex,setViewIndex}) {

    const {restaurantList}=useSelector(state=>state.restaurant)
    const viewrestaurant=restaurantList[viewIndex]

  return (
        <div className="flex flex-col rounded-lg bg-gray-200 shadow-secondary-1 dark:bg-surface-dark w-96">            
            <div className='self-end'>            
                <img
                className="h-8 w-8 rounded-full"
                src="/Close.png"
                alt=""
                onClick={()=>{setViewProduct(false)
                    setViewIndex(-1)
                }
                }
               />
            </div>
            <div>
                <img 
                className="rounded-t-lg h-96 w-screen"
                src={viewrestaurant.image}
                alt="" />
            </div>
            <div className="p-6 text-surface dark:text-slate-950">
                <h5 className="mb-2 text-xl font-medium leading-tight">{viewrestaurant.restaurantname}</h5>
                <p className="mb-4 text-base">Location : {viewrestaurant.location}</p>
                <p className="mb-4 text-base">Phone : {viewrestaurant.phone}</p>
            </div>
        </div>
  )
}

export default ShowProduct
