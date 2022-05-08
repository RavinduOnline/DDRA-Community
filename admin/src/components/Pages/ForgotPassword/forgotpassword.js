import React from 'react'
import './forgotpassword.css'
import DarkLogo from '../../SideMenu/DDRS-Logo_DarkBlue.png'


export default function forgotpassword() {
  return (
    <div>
        {/* -------- All CSS connected from Login Sidebar CSS file -------- */}

      <div className='FogPassword-body-box'>
      
              <div className='fogPassword-body-box-2'></div>


              <nav className="sidebar-mainbox"> 

                    <header className="sidebar-logo-box">
                        
                    <div>
                              {/* <!-- brand --> */}
                        <a href="#Logo">
                            <img className="sidemenu-logo" src={DarkLogo } alt="DDRS Logo"loading="lazy"/>
                        </a>
                    </div> 

                    </header>

                        <div className='side-bar-down-box'>
                                {/* <!-- Down elements --> */}
                                        <div className="side-bar-title">
                                            Forgot Password
                                        </div>

                                        <div className="side-bar-item">

                                            <form action='/'  className="side-bar-form"> 

                                                <input type='Password' placeholder="New Password" required />

                                                <input type='password'  placeholder="Reenter New Password" required />

                                                <button>Change</button>

                                            </form>


                                        </div>
                                
                        
                        </div>

                </nav>

            </div>
    </div>
  )
}
