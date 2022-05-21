import React, { useState } from 'react'
import Header from '../../../Header/header'
import Footer from '../../../Footer/footer'
import './ReplyHome.css'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import Replycard from '../replycard/replycard'


export default function ReplyHome() {

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

    fetch("/replycreate",{
      method:"post",
      headers:{
          "Content-Type":"application/json",
      },
      body:JSON.stringify({

        forum_id:'627661cf493cdb58d452400a',
        reply:replyInfo.reply,
        user:'627796f69c7c7904f0c9ccbc',
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
        
        <Replycard/>

        
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
               <button className='replyhome-button-close'>Close</button>
          </div>


    </div>
  )
}