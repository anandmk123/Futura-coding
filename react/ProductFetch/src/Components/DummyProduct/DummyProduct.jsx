import React, { useEffect, useState } from 'react'
import { api } from '../../Axios'
import axios from 'axios'

function DummyProduct() {

    const [productsFetch,setProductsFetch]=useState([])
    const [limit,setLimit]=useState(1)

    const [productsAxios,setproductAxios]=useState([])

    const getProductsFetch= async ()=>{
        try {
            const response = await fetch(`https://dummyjson.com/products?limit=${limit}`)
            const res = await response.json()
            setProductsFetch(res.products)
        } catch (error) {
            console.log(error)
        }
    }

    const getProductsAxios= async ()=>{
        try {
            const {data} = await api.get('/products',
                {
                    params:{
                        limit:limit
                    }
                }
            )
            setproductAxios(data.products)
        } catch (error) {   
            console.log(error)
        }
    }


    useEffect(()=>{
        getProductsFetch()
        getProductsAxios()
    },[limit])

    console.log('productsFetch')
   console.log(productsFetch)
   console.log('productsAxios')
   console.log(productsAxios)


  return (
    <div>
      <button onClick={()=>setLimit(10)}>set limit=10</button>
    </div>
  )
}

export default DummyProduct
