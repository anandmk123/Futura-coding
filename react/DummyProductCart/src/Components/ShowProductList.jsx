import React, { useEffect } from 'react'
import { useProduct } from '../Hooks/UseProduct'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ShowProductList() {

    const {productList,setProductList}=useProduct()

    const loadProduct=async()=>{
        try {
            const {data}=await axios.get('https://dummyjson.com/products');
            const {products} = data
            setProductList(products)
        } catch (error) {
            console.log(error);
        }
    }

    //invoke a function on page load
    useEffect(()=>{
        loadProduct()
    },[])
    
    // console.log('Product List')
    // console.log(productList)

    const navigate = useNavigate()


  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Product List</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {productList.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.thumbnail}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a onClick={()=>navigate(`/product/${product.id}`)}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}                      
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ShowProductList
