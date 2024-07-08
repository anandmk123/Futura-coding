import React, { useEffect, useState } from 'react'
import { api } from '../Axios';
import Card from 'react-bootstrap/Card';

function ShowProduct() {
    const [productList,setProductList]=useState([])

    const [formData,setFormData]=useState({
        title:'',
        price:'',
        description : '',
        image:'',
        category:''
    })

    const getProducts = async ()=>{
        try {
            const {data}= await api.get('/products')
            setProductList(data)
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getProducts()
    },[])

    //console.log(productList)

    const handleFormChange = (e)=>{
        const key=e.target.name
        const value=e.target.value
        setFormData((prev)=>({...prev,[key]:value}))
    }
    //console.log(formData)

    const addProduct=async ()=>{
        try {            
            const {data}=await api.post('/products',formData)
            console.log(data)
            setProductList(prev=>{
                return [...prev,data]
            })
        } catch (error) {
            console.log(error)
        }
    }

    const handleAdd=(e)=>{
        e.preventDefault()
        addProduct()
    }

    const deleteProduct =async (ele)=>{
        const {data}=await api.delete(`/products/${ele.id}`)
        //console.log(data)
        setProductList(prev=>{
            return prev.filter(element=>element.id!=data.id)
        })
    }
    // console.log(productList)


  return (
    <>
    <div className='bg-light'>
        <h1 className='p-5'>Product List</h1>
        <div className='d-flex flex-wrap gap-3 justify-content-center'>
             {productList.map(ele=>{
                return <Card style={{ width: '18rem' }} key={ele.id}>
                    <i className="bi bi-x" style={{fontSize:'50px'}}
                         onClick={()=>deleteProduct(ele)}                    
                    ></i>                    
                    <Card.Img variant="top" src={ele.image} style={{height:'300px'}}/>
                    <Card.Body>
                        <Card.Title style={{height:'130px'}}>{ele.title}</Card.Title>
                    </Card.Body>
                </Card>
            }
            )
            }
        </div>   
    </div>       
    </>
  )
}

export default ShowProduct
