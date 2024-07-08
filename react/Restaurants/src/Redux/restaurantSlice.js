import { createSlice } from "@reduxjs/toolkit";

const initialState={
    restaurantList:[]
}

const restaurantSlice=createSlice({
    name:"restaurant",
    initialState:initialState,
    reducers:{
        addRestaurant:(state,action)=>{
            state.restaurantList=[...state.restaurantList,action.payload.newRestaurant]
        },
        removeRestaurant:(state,action)=>{
            state.restaurantList=state.restaurantList.filter(item=>item.id!=action.payload.restaurant.id)
        },
        editRestaurant:(state,action)=>{
            state.restaurantList[action.payload.editIndex]=action.payload.editedRestaurant
        }
    }
})

export const {addRestaurant,removeRestaurant,editRestaurant}=restaurantSlice.actions
export default restaurantSlice.reducer