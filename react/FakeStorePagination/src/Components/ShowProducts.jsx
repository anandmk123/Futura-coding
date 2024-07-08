import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function ShowProducts() {
    const {page}=useParams()
    const [productList,setProductList]=useState([])
    const [totalPage,setTotalPage]=useState()

    //console.log(page)

    const getProducts= async ()=>{
        try {
            const limit=10
            const skip= isNaN((page-1)*limit)?0:(page-1)*limit
            const {data}=await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
            const {products} = data
            setTotalPage(Math.ceil(data.total/limit))
            console.log(data)
            //console.log(totalPage)
            setProductList(products)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getProducts()
    },[page])

    const navigate = useNavigate()

    // console.log(productList)

  return (
    <>
        <h1>Product List</h1>
        <div className='d-flex flex-wrap gap-3 justify-content-left'>
            {productList.map(ele=>{
                return <Card style={{ width: '18rem' }} key={ele.id}>                  
                    <Card.Img variant="top" src={ele.thumbnail} />
                    <Card.Body>
                        <Card.Title>{ele.title}</Card.Title>
                    </Card.Body>
                </Card>
            }
            )
            }
        </div> 

        <div className='d-flex gap-5 my-5'>
            {
                new Array(totalPage).fill(0).map((_,index)=>index+1).map(ele=>{
                    return (
                        <button key={ele} 
                         onClick={()=>navigate(`/${ele}`)}
                         >
                        {ele}
                        </button>
                    )
                })
            }
        </div>
    </>
  )
}

export default ShowProducts
