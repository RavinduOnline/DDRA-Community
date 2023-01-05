import '../ForumCard/forumcard.css'

import React , { useState, useEffect } from "react";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BackendURL from '../../../../url';

export default function Forumprofile() {

    const [forum , setForum] = useState([]);
    const [SearchWord , setSearchWord] = useState("");
    const [searchText , setSearchText ]  = useState("")
  
    useEffect(() => {
      retrieveForum();
    }, []);
  
  
    const retrieveForum = () =>{

    const userDetails = JSON.parse(localStorage.getItem("user"))
    console.log(userDetails._id)

      fetch( BackendURL + "/forum/user/"+userDetails._id).then(res=>res.json())
          .then(response=>{
            console.log(response);
            setForum(response);
        })
        .catch((err)=>{
            console.log("Err Axios - ",err)
        })
  
      }


    const ForumDelete = (id) =>{

        fetch( BackendURL + '/forum/delete/' + id, {
          method: 'DELETE',
        }).then(res=>res.json())
        .then((data) =>{
      
          if(data.error){ 
            toast.error(data.error,{
              theme: "colored",
            });
          }
          else{
            toast.error(data.message,{
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              icon: false,
            });
            retrieveForum();
          }
      
        })
        .catch((err)=>{
          console.log(err)
         })
      }

      /*--------------------------------- Search FU Start -------------------------------*/

      useEffect(() => {
        if(SearchWord){
          handleSearchArea();
        }
        if(SearchWord === ""){
          retrieveForum();
        }
  }, [SearchWord]);
          
 const   handleSearchArea = () =>{
   console.log(forum)

    const userDetails = JSON.parse(localStorage.getItem("user"))
    console.log(userDetails._id)
                  
        fetch( BackendURL + "/forum/user/"+userDetails._id).then(res=>res.json())
              .then(result =>{
                if(result){
                  filterData(result,SearchWord.toLowerCase());
                }

              });
  }

  const filterData = (forum,searchKey) => {

    const result = forum.filter((forum) =>
        forum.Title.toLowerCase().includes(searchKey) || forum.Body.toLowerCase().includes(searchKey) ||
        forum.Description.toLowerCase().includes(searchKey)
        );
        setForum(result)

  }


/*--------------------------------- Search FU End -------------------------------*/
  
      
  
    return (
      <div className='update-forum-profile'>
          <ToastContainer/>

          <input 
            id="profile-searchNav" 
            type="search" 
            placeholder="Search Your Problems....." 
            aria-label="Search" 
            value={SearchWord}
            onChange={(e) => setSearchWord(e.target.value)}
            /> 

  { forum.map(getforum=> (
       
          <div className='forumcard-mainbox'>
  
            <div className='forumcard-container'>
            <a href={`/view-forum/${getforum._id}`}><h4><b>{getforum.Title}</b></h4></a>
            
  
              <p>{getforum.Description}</p>
            </div>
            
            <span>
                <a onClick={() => ForumDelete(getforum._id)} ><i class="fa-solid fa-trash-can"></i></a>
                <a href={"/forumupdate/"+getforum._id}><i class="fa-solid fa-pen-to-square"></i></a>
            </span>
  
            <div className='forumcard-category-box'>
            {getforum.FCategory}
            </div>
            
          </div>
   ))}
      </div>
  
      
    )
  }
  