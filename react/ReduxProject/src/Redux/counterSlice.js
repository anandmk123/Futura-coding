import { createSlice } from "@reduxjs/toolkit";

const initialState={
    counter:0
}

const counterSlice=createSlice(
    {
        name:"counter",
        initialState:initialState,
        reducers:{
            counterPlus:(state,action)=>{
                state.counter=state.counter+action.payload.counter//this counter is from ui action component
            },
            counterMinus:(state,action)=>{
                state.counter=state.counter-action.payload.counter
            }            
        }
    }
)
 export const {counterPlus,counterMinus}=counterSlice.actions
 export default counterSlice.reducer