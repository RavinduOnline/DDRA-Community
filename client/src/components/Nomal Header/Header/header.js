import React from 'react'
import "./header.css"
import Web from "./web/webheader";
import Logo from "./DDRS-Logo_White.png"


export default function header() {
  return (
            <div>
                                     {/* <!-- Navbar --> */}
               <nav className="navbar navbar-expand-sm text-white header-main-box">
                    {/* <!-- Container wrapper --> */}
                    <div className="container-fluid">
                            {/* <!-- Collapsible wrapper --> */}
                            <div className='navbar-nav header-user-box'>
                                    {/* <!-- Navbar brand --> */}
                                    <a href="#Logo">
                                        <img
                                        className="header-logo"
                                        src={Logo}
                                        alt="DDRS Logo"
                                        loading="lazy"
                                        />
                                    </a>
                            </div> <br/> 
                          {/* Web Header Call */}
                         <Web/>

                     </div>

                </nav>
                    {/* <!-- Navbar --> */}

                   

            </div>
  )
}
