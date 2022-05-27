import React,{useState, useEffect} from 'react'
import Header from '../../../Header/header'
import './profile.css'
import ForumCard from '../../Forum/Home/Forum Profile/forumprofile'
import ReplyCard from '../../Reply/profile reply/profilereply'
import Ppic from'./Profile.jpg'
import Footer from '../../../Footer/footer'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Profile() {

  useEffect(() => {
    retrieveUser();
  }, []);
    
  const [user , setUser] = useState([]);

    const retrieveUser = () =>{
      const userDetails = JSON.parse(localStorage.getItem("user"))
      console.log(userDetails._id)
      fetch("/user/usersetting/"+userDetails._id).then(res=>res.json())
          .then(response=>{
            console.log(response);
            setUser(response);
            console.log(user.lName)
        })
        .catch((err)=>{
            console.log("Err Axios - ",err)
        })
  
      }

  return (
    <div>
      <Header/>

        <div className='profile-mainbox'>

            <div className='profile-container'>
              <table className='profile-table'>
                <tr>
                  <td className='profile-td'>
                    <img src={Ppic} width="150" height="150"/>
                  </td>
                  <td >
                    <h4>{user.fName} {user.lName}</h4>
                    <p>{user.country}</p>
                    <p>{user.email}</p>
                  </td>
                  <td>
                    
                  </td>
                </tr>
            </table>
            
              <a href="/usersetting">
                  <button type="submit" className='profile-button'>Settings</button>
              </a>
            
            </div>

        </div>

        <div className='profile-filter-container'>
               <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                          <button class="profile-filter-btn active" id="Forum-tab" data-bs-toggle="tab" data-bs-target="#Forum" type="button" role="tab" aria-controls="Forum" aria-selected="false">Forum</button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="profile-filter-btn" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Replies</button>
                        </li>
              </ul>
        </div>

        {/* <div>
          <form >
            <input id="profile-searchNav" type="search" placeholder="Search" aria-label="Search" /> 
          </form>
        </div>

        <div className='profile-topic-txt'>
            <h6 className='profile-topic-txt-topic'>Topic</h6>
            <h6 className='profile-topic-txt-reply'>Reply</h6>
        </div> */}

        <div class="tab-content" id="myTabContent">
              <div class="tab-pane fade show active" id="Forum" role="tabpanel" aria-labelledby="Forum-tab">
                              <div className='home-card-container'>
                                <ForumCard/>
                              </div>
          
              </div>
              <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"> 
                                  <div className='home-card-container'>
                                  <ReplyCard/>
                                  </div>
                </div>
              </div> 

        <Footer/>

    </div>
  )
}