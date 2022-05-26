import React , { useState, useEffect } from "react";
import '../replycard/replycard.css'

export default function Profilereply() {
    const [ReplyObj , setReplyObj] = useState([])

    useEffect(() => {
      getreply();
    }, []);


    const getreply = () =>{

        const userDetails = JSON.parse(localStorage.getItem("user"))
        console.log(userDetails._id)

        fetch("/reply/user/"+userDetails._id).then(res=>res.json())
          .then(response=>{
            console.log(response);
            setReplyObj(response);
        })
        .catch((err)=>{
            console.log("Error - ",err)
        })
    }

  return (
    <div>
         <input id="profile-searchNav" type="search" placeholder="Search" aria-label="Search" /> 
         
        { ReplyObj.map(getReplies=> (

        <div className='replycard-mainbox'>

            <div className='replycard-container'>
                <a href={'/view-forum/'+ getReplies.forum_id._id}><p><b>{getReplies.forum_id.Title}</b></p></a>
                <p>Reply :-</p>
                <div dangerouslySetInnerHTML={{__html: getReplies.reply}}></div>
                <i class="fa-solid fa-heart"></i>
                <i class="fa-solid fa-trash-can"></i>
                <a href="/replyupdate"><i class="fa-solid fa-pen-to-square"></i></a>

            </div>
            <hr/>

        </div>
   
        ))}
        
      
    </div>
  )
}
