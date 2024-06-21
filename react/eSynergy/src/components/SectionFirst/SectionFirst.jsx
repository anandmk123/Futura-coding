import React from 'react'
import './SectionFirst.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SectionFirst() {
  return (
    <section className='mb-5'>
        <div className="container">
            <div className="row">
                <div className="col-12 text-center mb-5">
                    <h1 className='heading_style'>
                        We create 
                        <span style={{color:'#d82345'}}> awesome </span>
                        online tools 
                    </h1>
                    <p>From online school platforms - to AI powered online design tools - to online content sharing platforms & much more, we're committed to making your online experience as simple as possible, bringing together deep industry expertise and the latest IT advancements to deliver products that perfectly fit the needs and behavior of users</p>
                </div>

                <div className="col-lg-4 col-12 mb-4">
                    <Card className='card_style'>
                        <Card.Body className='card_body_style'>
                            <Card.Title> <h5><img src="https://www.esynergysoft.com/img/time.svg" alt="time" className='card_img_style'/> On Time</h5></Card.Title>
                            <Card.Text style={{fontSize:'14px',lineHeight:'22px'}}>Industry standard systematic approaches adopted to ensure on time delivery</Card.Text>
                        </Card.Body>
                    </Card>                    
                </div>
                <div className="col-lg-4 col-12 mb-4">
                    <Card className='card_style'>
                        <Card.Body className='card_body_style'>
                            <Card.Title> <h5><img src="https://www.esynergysoft.com/img/quality.svg" alt="time" className='card_img_style'/> Quality kings</h5></Card.Title>
                            <Card.Text style={{fontSize:'14px',lineHeight:'22px'}}>Integrated Quality monitoring practices adapted to ensure the highest quality of our products</Card.Text>
                        </Card.Body>
                    </Card>  
                </div>
                <div className="col-lg-4 col-12 mb-4">
                    <Card className='card_style'>
                        <Card.Body className='card_body_style'>
                            <Card.Title> <h5><img src="https://www.esynergysoft.com/img/support.svg" alt="time" className='card_img_style'/> 24/7 Support</h5></Card.Title>
                            <Card.Text style={{fontSize:'14px',lineHeight:'22px'}}>24*7 tech support availability & reach without boundaries via phone, email & live Chat</Card.Text>
                        </Card.Body>
                    </Card>  
                </div>
            </div>
        </div>
    </section>
  )
}

export default SectionFirst
