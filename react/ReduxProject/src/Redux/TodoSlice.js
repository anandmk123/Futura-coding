import { createSlice } from "@reduxjs/toolkit";

const initialState={
    todoList:[]
}

const todoSlice=createSlice({
    name:"todo",
    initialState:initialState,
    reducers:{
        unshift:(state,action)=>{
            state.todoList=[action.payload.task,...state.todoList]
        },
        remove:(state,action)=>{
            state.todoList=state.todoList.filter(item=>item.id!=action.payload.task.id)
        }
    }
})

export const {unshift,remove}=todoSlice.actions
export default todoSlice.reducer