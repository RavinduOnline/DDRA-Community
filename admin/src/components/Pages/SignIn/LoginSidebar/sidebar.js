import React,{useState} from 'react'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom'
import './sidebar.css'
import DarkLogo from '../../../SideMenu/DDRS-Logo_DarkBlue.png'


export default function Sidebar() {

  const [emailAddress , setEmailAddress] = useState("");
  const [password , setPassword] = useState("");

  const AdminLogin = () =>{
          
        document.getElementById("signin-alert").style.display = "hide";

        if(!emailAddress || !password){
          
          document.getElementById("signin-alert").style.display = "flex";
          document.getElementById("signin-alert").innerHTML = "⚠️  &nbsp; &nbsp;Please fill all the field!";
          return
        }

        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (!emailAddress.match( /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
          
          document.getElementById("signin-alert").style.display = "flex";
          document.getElementById("signin-alert").innerHTML = "⚠️  &nbsp; &nbsp;Please enter valid email";
          return

        } 
        
                fetch("/adminlogin",{
                    method:"post",
                    headers:{
                        "Content-Type":"application/json",
                    },
                    body:JSON.stringify({

                      email:emailAddress, 
                      password:password

                    })
                }).then(res=>res.json())
                .then(data => {

                    if(data.error){ 
                          document.getElementById("signin-alert").style.display = "flex";
                          document.getElementById("signin-alert").innerHTML = data.error;  
                    }
                    else{
                      localStorage.setItem("jwt", data.token)
                      localStorage.setItem("admin", JSON.stringify(data.admin))
                      toast.success(data.message,{
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                      });
                      setTimeout(function(){
                        window.location.replace('/');
                      },1000);
                    }
                      
                }).catch((err)=>{
                  console.log("Error - ", err)
                })
      
   }
  
    return (
      <div>
                          {/* //For Tost Messages */}
                          <ToastContainer />
          <div className='Sidebar-body-box'>
  
                      <div className='sidebar-body-box-2'></div>
  
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
                                               Login
                                          </div>
  
                                          <div className="side-bar-item">
                                          
                                              <div  className="side-bar-form"> 
  
                                                  <input name='email' type='email' placeholder="Email" required
                                                  value={emailAddress}
                                                  onChange={(e) =>{ setEmailAddress(e.target.value); }}
                                                  />
  
                                                  <input name='password' type='password'  placeholder="Password" required 
                                                  value={password}
                                                  onChange={(e) => { setPassword(e.target.value); }}
                                                  />

                                                  <button onClick={(e)=>AdminLogin()} >Login</button>
  
                                              </div>

                                              <div class="alert " id="signin-alert" role="alert"></div>
  
  
                                          </div>
                                  
                                          <div className="side-bar-item">
                                                  <a className='nav-link forget-password' href="/forgotpassword">
                                                      Forgot Password
                                                  </a>
                                          </div>
                                          
                          </div>
  
                  </nav>
          
              </div>
      
      </div>
    )
  
}


