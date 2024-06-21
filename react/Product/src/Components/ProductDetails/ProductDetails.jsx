import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useProduct } from '../Context';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CartDetails from '../CartDetails/CartDetails';
import {toast} from 'react-toastify';

function ProductDetails() {
    
    const {productList,setProductList,cartList,setCartList}=useProduct();

    const addToCart = (ele)=>{
        let flag=false
        cartList.forEach(element => {
            if(element.id===ele.id)
                flag=true
        })
        if(flag===true)
            {
                toast.error('Item already exists in cart')
            }
        else{
            setCartList(prev=>{
                return [...prev,ele]
            })
        }
    }

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
    
    console.log('Product List')
    console.log(productList)


  return (
    <>
        <h1>Products</h1>
        <div className='d-flex justify-content-center gap-3' style={{flexWrap:'wrap'}}>
            {productList.map(ele=>{
            return  <Card style={{ width: '18rem' }} key={ele.id}>
                        <Card.Img variant="top" src={ele.thumbnail}/>
                        <Card.Body>
                        <Card.Title style={{height:'50px'}}>{ele.title}</Card.Title>
                        <Card.Text style={{height:'150px'}}>
                            {ele.description}
                        </Card.Text>
                        <Button variant="primary" onClick={()=>addToCart(ele)}>Add to Cart</Button>
                        </Card.Body>
                    </Card>            
            })}
        </div>
        <CartDetails/>
    </>
  )
}

export default ProductDetails
