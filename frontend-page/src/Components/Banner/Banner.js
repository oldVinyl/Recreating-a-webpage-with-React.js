import React from 'react'
import '../styles/Banner.css'
import WA from '../../Resources/whatsapp.svg'
import FB from '../../Resources/facebook.svg'
import IG from '../../Resources/instagram.svg'
import TK from '../../Resources/tiktok.svg'
import logo from '../../Resources/react.svg'

function Banner() {
  return (
    <div className='top-section'>
      <nav className='navigation'>
        <img className='logo' src={logo} alt="TBP" />
        <div className="nav-cont">
          <button className="nav-btn">Home</button>
          <button className="nav-btn">About</button>
          <button className="nav-btn">BOOKING</button>
          <button className="nav-btn gallery-btn">Gallery</button>
          <button className="nav-btn">Contact</button>
        </div>
      </nav>
      <div className='main-text'>GALLERY</div>
      <div className='socials'>
        <div className="icons">
          <img src={WA} alt="WA" />
          <img src={FB} alt="FB" />
          <img src={IG} alt="IG" />
          <img src={TK} alt="TK" />
        </div>
      </div>
    </div>
  )
}

export default Banner
