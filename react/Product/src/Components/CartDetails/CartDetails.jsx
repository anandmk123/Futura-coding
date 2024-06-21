import React from 'react'
import Card from 'react-bootstrap/Card';
import { useProduct } from '../Context';

function CartDetails() {
    const {cartList,setCartList}=useProduct();
    console.log('Cart List')
    console.log(cartList)

    const removeFromCart=(ele)=>{
        setCartList(prev=>{
            return prev.filter(element=>element.id!==ele.id)
        })
    }

  return (
    <>
        <h1>Cart</h1>
        <div className='d-flex justify-content-left gap-3' style={{flexWrap:'wrap'}}>
            {cartList.map(ele=>{
            return  <Card style={{ width: '18rem' }} key={ele.id}>
                        <i className="bi bi-x" style={{fontSize:'50px'}}
                         onClick={()=>removeFromCart(ele)}
                        ></i>
                        <Card.Img variant="top" src={ele.thumbnail}/>
                        <Card.Body>
                            <Card.Title>{ele.title}</Card.Title>
                            <Card.Text>
                                {ele.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>            
            })}
        </div>
    </>
  )
}

export default CartDetails
