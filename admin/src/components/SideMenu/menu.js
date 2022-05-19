import React,{useState, useEffect} from 'react'
import './menu.css'
import Logo from "./DDRS-Logo_White.png"
import {Link} from 'react-router-dom'


export default function Menu() {

  const islogin = JSON.parse(localStorage.getItem("admin"))

  useEffect(() => {
    console.log(islogin)
      if(islogin){
        ReadData();
      }
      else{
        window.location.replace('/login');
      }
  },[islogin]);
  
  let userData =""
  let usrtObj = ""

  const ReadData = () => {
     userData = localStorage.getItem("admin");
     usrtObj = JSON.parse(userData);
  }


  return (
    <div>

      <nav class="sidemenu-mainbox"> 

          <header className="sidemenu-avatar-box">
            
          <div>
                                    {/* <!-- brand --> */}
             <a href="#Logo">
                   <img className="sidemenu-logo" src={Logo} alt="DDRS Logo"loading="lazy"/>
              </a>
          </div> 

            <div className='sidemenu-avatar-sub-box'>
                <div className='sidemenu-avatar-sub-box-2'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRk5HT_MiST8gvuAiCijxgSvKCFtpJPMh7Yvlxc5ZTqfKGuVAAsEls2By-MBbrk0Ncxx4&usqp=CAU" alt='profile-pic' />
                    <p>{usrtObj.fName +" "+ usrtObj.lName} </p> 
                </div>
                <div className='sidemenu-avatar-sub-box-3'>
                  <a  href="/"><i className="fa-solid fa-right-from-bracket"></i> Logout</a>
                </div>
            </div>

          </header>
          <hr/>

            <div className='side-menu-a-div'>
                     {/* <!-- Down elements --> */}
                            <Link className='side-menu-link nav-link text-white text-uppercase' to="/">
                                    <div className="side-menu-item">
                                                Dashboard
                                    </div>
                            </Link>
                    
                            <Link className='side-menu-link nav-link text-white text-uppercase' to="/topicmanagement"> 
                                    <div className="side-menu-item">
                                        Topic Management
                                    </div>
                            </Link>

                            <Link className='side-menu-link nav-link text-white text-uppercase' to="/wordfilter">
                                    <div className="side-menu-item">
                                                Word Filter
                                    </div>
                            </Link>
            </div>

      </nav>


    </div>
  )
}
