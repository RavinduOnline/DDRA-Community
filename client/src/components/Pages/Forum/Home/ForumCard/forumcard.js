import './forumcard.css'
import '../../ForumView/forumview'
import '../../../Reply/replycard/replycard'
import BackendURL from '../../../../url'

import React , { useState, useEffect } from "react";

export default function Forumcard({searchKey}) {

  const [forum , setForum] = useState([]);
  const [SearchWord , setSearchWord] = useState("");
  const [searchText , setSearchText ]  = useState("")

  useEffect(() => {
    retrieveForum();
  }, []);

  useEffect(() => {
    setSearchWord(searchKey)
    console.log(searchKey)
  }, [searchKey]);

  const retrieveForum = () =>{
    fetch(BackendURL + "/forumget").then(res=>res.json())
        .then(response=>{
          console.log(response);
          setForum(response);
      })
      .catch((err)=>{
          console.log("Err Axios - ",err)
      })

    }

        /*--------------------------------- Search FU Start -------------------------------*/

    useEffect(() => {
      console.log(SearchWord)
          if(SearchWord){
            setSearchText(SearchWord)
            handleSearchArea();
          }
          if(SearchWord === ""){
            retrieveForum();
          }
    }, [SearchWord]);    
          
    const   handleSearchArea = () =>{
                  
          fetch(BackendURL + "/forumget").then(res=>res.json())
                .then(result =>{
                  if(result){
                    filterData(result,SearchWord.toLowerCase());
                  }

                });
    }

    const filterData = (forum,searchKey) => {
      console.log(forum)
      const result = forum.filter((forum) =>
         forum.Title.toLowerCase().includes(searchKey)        );
         setForum(result)
  
    }


  /*--------------------------------- Search FU End -------------------------------*/

    

  return (
    <div>

{ forum.map(getforum=> (
     
        <div className='forumcard-mainbox'>

          <div className='forumcard-container'>
          <a href={`/view-forum/${getforum._id}`}><h4><b>{getforum.Title}</b></h4></a>
          

            <p>{getforum.Description}</p>
          </div>
          
          <span>
            <i class="fa-solid fa-heart"></i>
          </span>

          <div className='forumcard-category-box'>
          {getforum.FCategory}
          </div>
          
        </div>
 ))}
    </div>

    
  )
}
