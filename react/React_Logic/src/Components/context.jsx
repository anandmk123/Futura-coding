import { createContext, useContext, useState } from "react";

const MyContext=createContext()

// create a context and make the <App /> inside the provider of created context and pass the global state to all child as objects

export const MyProvider =({children})=>{ //children --<App />
    
    const [todos,setTodos]=useState([])

    return(
        <MyContext.Provider value={{todos,setTodos}}>
            {children}  
        </MyContext.Provider>
    )
}

//we can consume the global state using useContext(MyContext). To simplify that we create a extra function that returns the  state to as objects
export const useTodos=()=>{
    return useContext(MyContext)
}