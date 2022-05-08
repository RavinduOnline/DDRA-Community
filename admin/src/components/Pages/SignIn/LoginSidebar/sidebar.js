import React,{useState,useContext,} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'
import './sidebar.css'
import DarkLogo from '../../../SideMenu/DDRS-Logo_DarkBlue.png'


export default function Sidebar() {

    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
  
    const AdminLogin = (e)=>{

            e.preventDefault();

       console.log(password);
       console.log(email);


     axios.post('/adminlogin', {
        email,
        password
      }).then(data=>{
        console.log(data)
       if(data.error){
        console.log(data.err)
       }
       else{
           alert('done');
           localStorage.setItem("jwt",data.token)
           localStorage.setItem("admin",JSON.stringify(data.admin))
           navigate('/')

       }
    }).catch(err=>{
        console.log("jo")
    })
    }
  
    return (
      <div>
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
  
                                              <form  className="side-bar-form"> 
  
                                                  <input name='email' type='email' placeholder="Email" required
                                                  value={email}
                                                  onChange={(e) =>{ setEmail(e.target.value); }}
                                                  />
  
                                                  <input name='password' type='password'  placeholder="Password" required 
                                                  value={password}
                                                  onChange={(e) => { setPassword(e.target.value); }}
                                                  />
  
                                                  <button onClick={(e)=>AdminLogin(e)} >Login</button>
  
                                              </form>
  
  
                                          </div>
                                  
                                          <div className="side-bar-item">
                                                  <a className='nav-link' href="/forgotpassword">
                                                      Forget Password
                                                  </a>
                                          </div>
                                          
                          </div>
  
                  </nav>
          
              </div>
      
      </div>
    )
  
}


