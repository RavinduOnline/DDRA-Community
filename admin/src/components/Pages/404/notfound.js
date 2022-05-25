import React from 'react'
import './notfound.css'
import DarkLogo from '../../SideMenu/DDRS-Logo_White.png'



export default function notfound() {
  return (
    <div>
      <div className='notfound-box-main'>

        <img className="sidemenu-logo" src={DarkLogo } alt="DDRS Logo"loading="lazy"/>

        <a href='/' ><i class="fa-solid fa-house-chimney"></i> Back to Home</a>

      </div>

       <div className='notfound-box'></div>
    </div>
  )
}
