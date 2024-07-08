import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as idGenerator } from 'uuid';
import { addRestaurant, editRestaurant} from '../Redux/restaurantSlice';

function RestaurantForm({setShowModal,editableIndex,editFlag,setEditFlag}) {

    const {restaurantList}=useSelector(state=>state.restaurant)
    const dispatch=useDispatch()
    const editedResturant=restaurantList[editableIndex]
    const [formData,setFormData]=useState({
        id:editFlag?editedResturant?.id:'',
        restaurantname:editFlag?editedResturant?.restaurantname:'',
        location:editFlag?editedResturant?.location:'',
        phone:editFlag?editedResturant?.phone:'',
        image:editFlag?editedResturant?.image:''
    })

    const handleFormChange=(e)=>{
        const key=e.target.name
        const value=e.target.value
        setFormData(prev=>({...prev,[key]:value}))
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(editFlag){
            dispatch(editRestaurant({editIndex:editableIndex,editedRestaurant:formData}))
        }
        else{
            const newRestaurant={...formData,id:idGenerator()}
            dispatch(addRestaurant({newRestaurant:newRestaurant}))
        }
        setShowModal(false)
        setEditFlag(false)
    }

    console.log(restaurantList)


  return (
    <>
        <div className="bg-gray-200 flex flex-col">
            <form className='container max-w-xl mx-auto flex-1 flex flex-col items-center justify-center px-2 m-5' onSubmit={handleSubmit}>
                <h1 className="mb-8 text-3xl text-center">Add Restaurant</h1>
                <input 
                    type="text"
                    className="block border border-gray-200 w-full p-3 rounded mt-4"
                    name="restaurantname"
                    placeholder="Restaurant Name"
                    value={formData.restaurantname}
                    onChange={handleFormChange}
                />
                <input 
                    type="text"
                    className="block border border-gray-200 w-full p-3 rounded mt-4"
                    name="location"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleFormChange}
                />
                <input 
                    type="text"
                    className="block border border-gray-200 w-full p-3 rounded mt-4"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
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
                        onClick={() => {setShowModal(false)
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

export default RestaurantForm
