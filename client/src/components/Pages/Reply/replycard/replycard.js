import React , { useState, useEffect } from "react";
import './replycard.css'

export default function Replycard(getForumid) {

    const [forumaid , setforumID] = useState("")
    const [getReply , setGetReply] = useState("")

    useEffect(() => {
        getreply();
      }, []);


    const getreply = () =>{

        setforumID(getForumid)
        console.log(forumaid)

        fetch("/reply/" + forumaid).then(res=>res.json())
            .then(response=>{
              console.log(response);
              setGetReply(response.word);
              setGetReply(response.wcategory);
              setGetReply(response);
          })
          .catch((err)=>{
              console.log("Err - ",err)
          })
    }

  return (
    <div>

        <div className='replycard-mainbox'>


            <div className='replycard-container'>
                
                <p><b>Janith Dilshan</b></p>
                <p>This was a good start. These files have a name sapace associated with them,which does throw in a curve ball. <br/>
                The easiest way to handle the namespaces is to strip them out.Also,ensure the  correct file is referenced in the xml_find() functions.</p>
                <i class="fa-solid fa-heart"></i><i class="fa-solid fa-trash-can"></i><a href="/replyupdate"><i class="fa-solid fa-pen-to-square"></i></a>
                

            </div>


        </div>
        
        <div className='replycard-mainbox'>


            <div className='replycard-container'>
                
                <p><b>Sudhari Sandamini</b></p>
                <p>Images should have an alt property. The alternate property comes into picture in several cases like the card not getting downloaded,<br/> 
                incompatible browsers, or the image getting corrupt. You need to pass in a prop called alt to the image.</p>
                <i class="fa-solid fa-heart"></i><i class="fa-solid fa-trash-can"></i><a href="/replyupdate"><i class="fa-solid fa-pen-to-square"></i></a>
                

            </div>


        </div>








    </div>
  )
}
