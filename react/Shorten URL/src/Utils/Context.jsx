import {createContext, useContext, useState } from "react";

const URLContext = createContext()

export const URLProvider = ({ children }) => {

    const [shortURL, setShortURL] = useState('')
    const [showURLFlag,setShowURLFlag]=useState(false)
    const [history,setHistory]=useState([])

    return (
        <URLContext.Provider value={{ shortURL, setShortURL,showURLFlag,setShowURLFlag,history,setHistory }}>
            {children}
        </URLContext.Provider>
    )

}

export const useURLContext = () => {
    return useContext(URLContext)
}