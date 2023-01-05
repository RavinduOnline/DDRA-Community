import React,{useState} from 'react'
import './resetpassword.css'
import {Link} from 'react-router-dom'
import Header from '../../../Header/header'
import Footer from '../../../Footer/footer'
import BackendURL from '../../../url';

export default function Resetpassword() {

  const [user , setUser] = useState([]);
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const changePassword = () =>{
    const userDetails = JSON.parse(localStorage.getItem("user"))
    console.log(userDetails._id)

    if(!oldPassword || !password || !rePassword){
      
      document.getElementById("resetpwd-alert").style.display = "flex";
      document.getElementById("resetpwd-alert").innerHTML = "Please fill all the field!";
      return
    }
    
    if(userDetails.email !== "test@ddrs.com" ){
            fetch(BackendURL + "/user/resetpassword/"+userDetails._id,{
                method:"PUT",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({

                  oldPassword,
                  password,
                  rePassword

                })
            }).then(res=>res.json())
            .then(data => {

              if(data.error){
                document.getElementById("resetpwd-alert").style.display = "flex";
                document.getElementById("resetpwd-alert").innerHTML = "Something has error";
                return
              }

              else{window.location.replace('/usersetting');}
                
            }).catch((err)=>{
              console.log("Error - ", err)
            })
          }else{
            alert("You are in an experience mood. You don't have permission to do this action.");
          }

    }

  return (
    <div>
      <Header/>
        <div className='resetp-form-body'>

        <div className='resetp-form-body-box'></div>
              <div className='resetp-form-box'>
                    <div>
                        <h4>Hi....</h4>
                        <label for="pwd">Old Password</label><br/>
                        <input type="password" 
                          id="opwd" 
                          name="opwd"
                          value={oldPassword}
                          onChange={(e) => setOldPassword(e.target.value)}/><br/><br/>

                        <label for="pwd">New Password</label><br/>
                        <input type="password" 
                          id="pwd1" 
                          name="pwd1"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}/><br/><br/>

                        <label for="pwd">Re - Password</label><br/>
                        <input type="password" 
                          id="pwd2" 
                          name="pwd2"
                          value={rePassword}
                          onChange={(e) => setRePassword(e.target.value)}/><br/><br/>

                        <div id="resetpwd-alert" class="alert alert-danger" role="alert"/><br/>

                        <button className='resetp-button' 
                          type='submit'
                          onClick={() => changePassword()} >Reset</button><br/><br/>
                        <Link className='nav-link ' to="/usersetting">Back</Link>
                    </div>
              </div>
          </div>
          <Footer/>
    </div>
  )
}