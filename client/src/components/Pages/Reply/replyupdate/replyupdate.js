import React , { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'
import Header from '../../../Header/header'
import './replyupdate.css'
import Footer from '../../../Footer/footer'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css' //quill's css important
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Replyupdate() {

  const [ReplyObj , setReplyObj] = useState("")
  const [reply , setReply] = useState("")
  const [replyInfo, setreplyInfo] = useState({reply:''});
  const {id} = useParams()

  useEffect(() => {
    getreply();
  },[]);

  const onreply = (value) => {
    console.log(value)
    setreplyInfo({ ...replyInfo,
      reply:value
    });
  } 

  const getreply = () =>{

    console.log(id)

    fetch("/reply/one/"+id).then(res=>res.json())
      .then(response=>{
        console.log(response);
        setReplyObj(response);
        setReply(response.reply)
        onreply(response.reply)
        console.log(replyInfo.reply);
        console.log(response.reply);
        console.log(reply);
    })
    .catch((err)=>{
        console.log("Error - ",err)
    })
}

const ReplyUpdate = (id) =>{

  if(!replyInfo.reply){
    document.getElementById("replyUpdate-alert").style.display = "flex";
    document.getElementById("replyUpdate-alert").innerHTML = "Please fill all the field!";
    return
  }
  
          fetch("/reply/update/"+id,{
              method:"PUT",
              headers:{
                  "Content-Type":"application/json",
              },
              body:JSON.stringify({

                reply:replyInfo.reply,

              })
          }).then(res=>res.json())
          .then(data => {

              if(data.error){ 
                    toast.error(data.error,{
                      hideProgressBar: true,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "colored",
                    });
              }
              else{
                toast.success("Reply Updated",{
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                });
                setTimeout(function(){
                  window.location.replace('/profile');
                },1000);
              }
              
          }).catch((err)=>{
            console.log("Error - ", err)
          })
}


  return (
    <div>
        <ToastContainer/>
        <Header/>
        
        <div className='replyupdate-marjin'>

              <h2>Reply Update</h2>

              <ReactQuill 
              className="replycard-react-quill " 
              theme='snow'
              value={replyInfo.reply}
              onChange={onreply}
              />
              <hr></hr>

              <div id="replyUpdate-alert" class="alert alert-danger" role="alert"/><br/>


              <div className='replyhome-button'>
                  <a onClick={() => ReplyUpdate(ReplyObj._id)}><button className='replyhome-button-create'>Update</button></a>
                  <a href='/'><button className='replyhome-button-close'>Close</button></a>
              </div>


       
          </div>
        <Footer/>

    </div>
    
  )
}