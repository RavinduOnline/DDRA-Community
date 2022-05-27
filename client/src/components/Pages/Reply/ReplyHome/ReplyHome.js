import React , { useState, useEffect } from "react";
import Header from '../../../Header/header'
import Footer from '../../../Footer/footer'
import './ReplyHome.css'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'



export default function ReplyHome({getForumid,GetUser}) {

  const [replyInfo, setreplyInfo] = useState({reply:''});



  const onreply = (value) => {
    console.log(value)
    setreplyInfo({ ...replyInfo,
      reply:value
    });
  } 
  const ReplyCreate = () =>{


    

    if(!replyInfo ){
            
      alert("Fill All")
      return
    }
    if(replyInfo.reply.length < 10){
      alert('Required, Add reply minimum length 10 characters');
      return;
    }





    const UserName = GetUser.fName +" "+ GetUser.lName;
  

    fetch("/replycreate",{
      method:"post",
      headers:{
          "Content-Type":"application/json",
      },
      body:JSON.stringify({

        forum_id:getForumid,
        reply:replyInfo.reply,
        name:UserName,
        user:GetUser._id,
      })
  }).then(res=>res.json())
  .then(data => {

      if(data.error){ 
            alert("Error" + data.error)
      }
      else{
        alert("Error" + data.message)
        setTimeout(function(){
          window.location.replace('/');
        },1000);
      }
        

    console.log("data create -", data)
  }).catch((err)=>{
    console.log("Error - ", err)
  })

}




  return (
    <div>
        
        
          <div className='reply-quil-boc'>
              <ReactQuill className="ReplyHome-react-quill" 
              theme='snow'
              value={replyInfo.reply}
              onChange={onreply}
              />

          </div>


          <div className='replyhome-button'>
               <button 
                onClick={() => ReplyCreate() }
               className='replyhome-button-create'>Post</button>
               <a href="/"><button  className='replyhome-button-close'>Close</button></a>
          </div>


    </div>
  )


  
  }

