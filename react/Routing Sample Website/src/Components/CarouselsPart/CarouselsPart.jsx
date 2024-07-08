import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './CarouselsPart.css'

function CarouselsPart() {
  return (
        <Carousel interval={1000} className='bg-light'>
            <Carousel.Item>
             <div className="d-flex justify-content-center">
               <img src="https://www.esynergysoft.com/img/elearning.jpg" alt=""className="carouselstyle"/>
            </div>
            </Carousel.Item>
            <Carousel.Item>
             <div className="d-flex justify-content-center">
               <img src="https://www.esynergysoft.com/img/sdk.jpg" alt=""className="carouselstyle "/>
            </div>
            </Carousel.Item>
            <Carousel.Item>
             <div className="d-flex justify-content-center">
               <img src="https://www.esynergysoft.com/img/ai.jpg" alt=""className="carouselstyle"/>
            </div>
            </Carousel.Item>
        </Carousel>        
  )
}

export default CarouselsPart
