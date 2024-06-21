import React from 'react'
import './MainHeader.css'
import esy_video from './esy-home.mp4'

function MainHeader() {
  return (
    <header className='mainheader_style'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <h1>An Award Winning
                    <span style={{color:'#d82445',display:'block'}}>Software Development</span>
                    Company
                    </h1>
                    <p className='font-weight-light mb-2 mt-4'>
                        Being a trusted software development company in India, we employ industry best methodologies to deliver secure, robust and scalable software for diversified domains
                    </p>
                </div>
                <div className="col-lg-6">
                    <video autoPlay muted loop className='Video_style'>
                        <source src={esy_video}/>
                    </video>
                </div>
            </div>
        </div>
    </header>
  )
}

export default MainHeader
