import { configureStore } from "@reduxjs/toolkit";
import couterReducer from './counterSlice';//default importing
import  todoReducer from './TodoSlice';

export const Store =configureStore({
    reducer:{
        counter:couterReducer,
        todo:todoReducer //will be called in useselector
    }
}
)