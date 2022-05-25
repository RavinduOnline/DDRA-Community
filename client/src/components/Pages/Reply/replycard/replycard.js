import React , { useState, useEffect } from "react";
import './replycard.css'

export default function Replycard({getForumid}) {

    const [ReplyObj , setReplyObj] = useState([])

    useEffect(() => {
      getreply();
    }, []);


    const getreply = () =>{
      const id = getForumid;
      console.log(id)
      fetch("/reply/single/" + id).then(res=>res.json())
          .then(response=>{
            console.log(response);
            setReplyObj(response);
            console.log(ReplyObj);
        })
        .catch((err)=>{
            console.log("Error - ",err)
        })
    }

  return (
    <div>
        { ReplyObj.map(getReplies=> (

        <div className='replycard-mainbox'>

            <div className='replycard-container'>
                
                <p><b>{getReplies.name}</b></p>
                <p>{getReplies.reply}</p>
                <i class="fa-solid fa-heart"></i>
                <i class="fa-solid fa-trash-can"></i>
                <a href="/replyupdate"><i class="fa-solid fa-pen-to-square"></i></a>

            </div>

        </div>
   
        ))}
        
      
    </div>
  )
}
