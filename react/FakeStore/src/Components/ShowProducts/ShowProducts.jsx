import React, { useEffect, useState } from 'react'
import { api } from '../../Axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ShowProducts() {
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
        <h1>Product List</h1>
        <div className='d-flex flex-wrap gap-3 justify-content-left'>
            {productList.map(ele=>{
                return <Card style={{ width: '18rem' }} key={ele.id}>
                    <i className="bi bi-x" style={{fontSize:'50px'}}
                         onClick={()=>deleteProduct(ele)}                    
                    ></i>                    
                    <Card.Img variant="top" src={ele.image} />
                    <Card.Body>
                        <Card.Title>{ele.title}</Card.Title>
                            <Card.Text>
                               {ele.description}
                            </Card.Text>
                    </Card.Body>
                </Card>
            }
            )
            }
        </div>

        <h1>Add Product</h1>
        <form className='form-control'  onSubmit={handleAdd}>
            <label htmlFor="" className='p-2'>Title:</label>
            <input type="text" name="title" id="title" value={formData.title} onChange={handleFormChange} className='ms-5'/> <br/>
            <label htmlFor="" className='p-2'>Price:</label>
            <input type="text" name="price" id="price" value={formData.price} onChange={handleFormChange} className='ms-5'/><br />
            <label htmlFor="" className='p-2'>Description:</label>
            <input type="text" name="description" id="description" value={formData.description} onChange={handleFormChange}/> <br/> 
            <label htmlFor="" className='p-2'>Image:</label>
            <input type="text" name="image" id="image" value={formData.image} onChange={handleFormChange} className='ms-4'/> <br/>  
            <label htmlFor="" className='p-2'>Category:</label>
            <input type="text" name="category" id="category" value={formData.category} onChange={handleFormChange} className='ms-1'/> <br/> 
            <button type="submit" className='m-3'>Add Product</button>   
        </form>            
    </>
  )
}

export default ShowProducts
