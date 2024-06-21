import React from 'react'
import './BottomPart.css'

function BottomPart() {
  return (
    <footer className='background_style'>
        <section className='pt-5'>
            <div className="container mt-5 mb-5">
                <div className="row justify-content-center">
                    <div className="col-8 text-center">
                        <h1>
                            <span style={{color:'#d82445'}}>We Breathe </span>
                            VC++, C#, PHP, Laravel, Javascript, Python & AWS
                        </h1>
                    </div>
                </div>
        </div>
        </section>

        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col text-center pt-5">
                    <a href="https://www.facebook.com/esynergysoftwares/"><img src="https://www.esynergysoft.com/img/facebook.svg" alt="" className='footer_icons'/></a>
                    <p className='logo_disc'>Copyright © 2024 eSynergy Software Technologies. All rights reserved.</p>

                </div>
            </div>
        </div>
    </footer>
  )
}

export default BottomPart
