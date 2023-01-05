import React , { useState, useEffect } from "react";
import "./webheader.css"


export default function Webheader() {
    const islogin = JSON.parse(localStorage.getItem("user"));
    const [avatar , setAvatar] = useState("https://mdbcdn.b-cdn.net/img/new/avatars/2.webp");
    const [userObj , setUserObj] = useState("");

    useEffect(() => {
        if(!islogin){
          window.location.replace('/signin');
        }
    },[islogin]);

    useEffect(() => {
      ReadData();
    },[]);

let userData =""

const ReadData = () => {
   userData = localStorage.getItem("user");
   setUserObj(JSON.parse(userData));
}

const LogOut = () => {
  localStorage.clear()
  window.location.replace('/signin');
  
}


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
                                    <img
                                        src={ userObj.email === "test@ddrs.com" ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLuYWNUxlV-B8JIYGhC8HHdm8AJBXvSENdwG5qbKijYKAiu1YJfw-dL5lnn_Nw7ShqsUg&usqp=CAU" : avatar }
                                        className="rounded-circle header-profile-pic "
                                        alt="Profile Pic"
                                        loading="lazy"
                                    /> 

                                     <div className="web-menu-user-name">{userObj.fName} {userObj.lName}</div>
                                    </a>
                                    <a onClick={() => LogOut()} className="logout-header">
                                      <div> <i class="fa-solid fa-right-from-bracket"></i> </div>
                                    </a>
                         </div>
                                {/* <!-- Right elements --> */}
                    </div>

    </div>
  )
}
