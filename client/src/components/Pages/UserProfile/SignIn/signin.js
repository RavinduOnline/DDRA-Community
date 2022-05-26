import React from 'react'
import { useState } from "react";
import './signin.css'
import {Link} from 'react-router-dom'
import Header from '../../../Nomal Header/Header/header'
import Footer from '../../../Footer/footer'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signin() {
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

  const PostSignin = () =>{
          
        document.getElementById("signin-alert").style.display = "hide";

        if(!email || !password){
          
          document.getElementById("signin-alert").style.display = "flex";
          document.getElementById("signin-alert").innerHTML = "Please fill all the field!";
          return
        }
        
                fetch("/user/signin",{
                    method:"post",
                    headers:{
                        "Content-Type":"application/json",
                    },
                    body:JSON.stringify({

                      email, 
                      password

                    })
                }).then(res=>res.json())
                .then(data => {

                    if(data.error){ 
                          document.getElementById("signin-alert").style.display = "flex";
                          document.getElementById("signin-alert").innerHTML = data.error;  
                    }
                    else{
                      localStorage.setItem("jwt", data.token)
                      localStorage.setItem("user", JSON.stringify(data.user))
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
      <Header/>
      <ToastContainer/>
        <div className='sigin-form-body'>

        <div className='sigin-form-body-box'></div>
              <div className='sigin-form-box'>
                    <div>
                        <h4>Hi....</h4>
                        <label for="email">Email</label><br/>
                        <input type="text" 
                          id="email" 
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}/><br/><br/>

                        <label for="pwd">Password</label><br/>
                        <input type="password" 
                          id="pwd" 
                          name="pwd"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}/><br/><br/>

                        <div id="signin-alert" class="alert alert-danger" role="alert"/><br/>

                        <button className='signin-button' 
                          type='submit' 
                          onClick={() => PostSignin() }>Login</button><br/><br/>
                        <Link className='nav-link ' to="/signup">Don't have an Account? | New User</Link>
                    </div>
              </div>
          </div>
          <Footer/>
    </div>
  )
}