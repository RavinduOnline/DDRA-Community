import React , { useState, useEffect } from "react";
import './replycard.css'
import BackendURL from '../../../url';

export default function Replycard({getForumid}) {

    const [ReplyObj , setReplyObj] = useState([])

    useEffect(() => {
      getreply();
    }, []);


    const getreply = () =>{
      const id = getForumid;
      console.log(id)
      fetch(BackendURL + "/reply/single/" + id).then(res=>res.json())
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
                <div dangerouslySetInnerHTML={{__html: getReplies.reply}}></div>
            </div>

        </div>
   
        ))}
        
      
    </div>
  )
}
