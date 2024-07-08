import { createContext, useContext, useState } from "react";

const ProductContext=createContext()

export const ProductProvider=({children})=>{

    const [productList,setProductList]=useState([])
    const [cartList,setCartList]=useState([])

    return (
        <ProductContext.Provider value={{productList,setProductList,cartList,setCartList}}>
            {children}
        </ProductContext.Provider>
    )   

}

export const useProduct=()=>{
    return useContext(ProductContext)
}