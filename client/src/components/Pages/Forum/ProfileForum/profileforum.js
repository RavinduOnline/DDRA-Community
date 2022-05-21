import React , { useState, useEffect } from "react";
import '../ProfileForum/profileforum.css';

export default function ProfileForum() {
    const [forum , setForum] = useState([]);
      
    useEffect(() => {
      retrieveForum();
    }, []);
  
    const retrieveForum = () =>{
      fetch("/forumget").then(res=>res.json())
          .then(response=>{
            console.log(response);
            setForum(response);
        })
        .catch((err)=>{
            console.log("Err Axios - ",err)
        })
  
  
      }
  return (
      <div>

          <div>
            <form >
              <input id="home-searchNav" type="search" placeholder="Search" aria-label="Search" /> 
            </form>
          </div>

          <div className='home-btn-container'>

            <div className='home-topic-txt'>
              <h6 className='home-topic-txt-topic'>Topic</h6>
              <h6 className='home-topic-txt-reply'>Reply</h6>
            </div>
            <br/>
            <hr/>
          </div>

       
     
      { forum.map(getforum=> (
           
              <div className='forumcard-mainbox'>
      
                <div className='forumcard-container'>
                <a href="view-forum"><h4><b>{getforum.Title}</b></h4></a>
                  <p>{getforum.Description}</p>
                  <p>{getforum.Body}</p>
                </div>
                
                <span>
                  <h5>40</h5>
                  <i class="fa-solid fa-heart"></i>
                  <i class="fa-solid fa-pen-to-square"></i>
                  <i class="fa-solid fa-trash-can"></i>
                </span>
                
      
                <div className='forumcard-category-box'>
                {getforum.FCategory}
                </div>
                
              </div>
       ))}
          </div>
      
          
        )
      }
      
