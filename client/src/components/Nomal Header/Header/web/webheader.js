import React , { useState, useEffect } from "react";
import "./webheader.css"


export default function Webheader() {


  return (
    <div>

                        {/* <!-- Right elements --> */}
                 <div className="d-flex align-items-center  web-header-main-box">
                             <div className="web-menu-item">
                                    <a className='nav-link text-white text-uppercase' href="/">
                                        Home
                                    </a>
                            </div>
                    
                            <div className="web-menu-item">
                                    <a className='nav-link text-white text-uppercase' href="/#About">
                                        Categories
                                    </a>
                            </div>
                            <div className="web-menu-item">
                                    <a className='nav-link text-white text-uppercase' href="/aboutus">
                                        About Us
                                    </a>
                            </div>

                            <div className='web-menu-user-box'>
                                 <a  className="text-white web-menu-user-name-a" href="/profile" >
                                   
                                     <div className="web-menu-user-name">Signup / Signin</div>
                                    </a>
                         </div>
                                {/* <!-- Right elements --> */}
                    </div>

    </div>
  )
}
