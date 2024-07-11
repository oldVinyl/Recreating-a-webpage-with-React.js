import React from 'react'
import Footer from '../styles/Footer.css'
import map from '../../Resources/fake-map.jpg'
import WA from '../../Resources/whatsapp.svg'
import FB from '../../Resources/facebook.svg'
import IG from '../../Resources/instagram.svg'
import TK from '../../Resources/tiktok.svg'
import logo from '../../Resources/react.svg'
import arrow from '../../Resources/enter.svg'

function FooterWasAlsoTakenWHAT() {
  return (
    <div className='container'>
      <div className="left-div">
        <p>VISIT US</p>
        <img src={map} alt="the-map" className='fake-map'/>
        <p>All rights reserved 2024</p>
      </div>
      <div className="right-div">
        <p>JOIN THE COMMUNITY</p>
        <div className="input-field">
          <input type="text" placeholder='Email' />
          <button className="arrow-btn">
            <img src={arrow} alt="arrow-svg" />  
          </button>
        </div>
        <div className="propaganda">
          <img src={logo} alt="TBP logo" className="logo" />
          <p><span className='fancy-text'>TaxBank Parlour</span></p>
        </div>
        <div className="socials">
          <img src={WA} alt="WA"/>
          <img src={FB} alt="FB"/>
          <img src={IG} alt="IG"/>
          <img src={TK} alt="TK"/>
        </div>
      </div>
    </div>
  )
}

export default FooterWasAlsoTakenWHAT
