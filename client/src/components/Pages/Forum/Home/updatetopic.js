import React from 'react'
import Header from '../../../Header/header'
import {useParams} from 'react-router-dom'
import './newtopic.css'
import Footer from '../../../Footer/footer'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css' //quill's css important
import Editor from "react-quill/lib/toolbar";
import { useState, useEffect } from "react";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Updatetopic() {
 
  const [ForumObj , setForumObj] = useState("")
  const [Forum , setForum] = useState("")
  const [forumInfo, setforumInfo] = useState({forum:''});
  const {id} = useParams()
  const[Title, setTitle] = useState("")
  const[FCategory, setFCategory]= useState("")
  const[MiniDescription, setMiniDescription] = useState("")

  useEffect(() => {
    getForum();
  },[]);

  const onforum = (value) => {
    console.log(value)
    setforumInfo({ ...forumInfo,
      forum:value
    });
  } 

  const getForum = () =>{

    console.log(id)

    fetch("/forumget/one/"+id).then(res=>res.json())
      .then(response=>{
        console.log(response.Body);
        setTitle(response.Title)
        setFCategory(response.FCategory)
        setMiniDescription(response.Description)
        onforum(response.Body)
    })
    .catch((err)=>{
        console.log("Error - ",err)
    })
}

const ForumUpdate = (id) =>{

  if(!forumInfo.forum){
    document.getElementById("replyUpdate-alert").style.display = "flex";
    document.getElementById("replyUpdate-alert").innerHTML = "Please fill all the field!";
    return
  }
  
          fetch("/forum/update/"+id,{
              method:"PUT",
              headers:{
                  "Content-Type":"application/json",
              },
              body:JSON.stringify({

                Title:Title,
                FCategory:FCategory,
                Description:MiniDescription,
                Body:forumInfo.forum,

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
                toast.success("Forum Updated",{
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                });
                setTimeout(function(){
                  window.location.replace('/view-forum/'+id);
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
        <div className='newtopic-forum'>
          <div className='newtopic-forum-container'>
              <div className='newtopic-head-title'>
                <h1>Update Topic</h1>
              </div>
              <hr/>
              
              <div className='newtopic-question-container'>
                <div className='newtopic-question'>

                  <div className='newtopic-question-option'> 
                    <div className='newtopic-title'>
                      <div className='newtopic-title-title'>
                        <input 
                            value = {Title} 
                            onChange ={(e) =>setTitle(e.target.value)} 
                            type="text" 
                            placeholder='Add Question Title'/>
                      
                        <select onChange ={(e) =>setFCategory(e.target.value)} value={FCategory}>
                            <option value=""  selected="selected">Select forum category</option>
                            <option value="General" >General</option>
                            <option value="JavaScript" >JavaScript</option>
                            <option value="HTML/CSS" >HTML/CSS</option>
                            <option value="Backend" >Backend</option>
                            <option value="Frontend" >Frontend</option>
                            <option value="Other" >Other</option>
                        </select>
                        
                      </div>
                    </div>
                  </div>

                  <div className='newtopic-question-option'> 
                    <div className='newtopic-title'>
                      <input 
                          type="text" 
                          placeholder='Mini Description' 
                          maxLength="100"
                          value={MiniDescription}
                          onChange={(e) => setMiniDescription(e.target.value)}
                          />
                    </div>
                  </div>


                  <div className='newtopic-question-option'> 
                    <div className='newtopic-title'>
                      <small>Include all information someone would need to answer your question</small>
                          <div className='react-quill-box'>
                            <ReactQuill 
                                theme="snow"
                                value={forumInfo.forum}
                                onChange={onforum}
                                className="newtopic-react-quill" 
                                />



                {/* <ReactQuill
                  value={this.state.content}
                  readOnly={true}
                  theme={"bubble"}
                /> */}



                          </div>
                      </div>
                      
                  </div>


                </div>
              </div>
              <div className='newtopic-button'>

                <button
                    type='submit'
                    onClick={() => ForumUpdate(id) }
                    className='newtopic-button-create'>Create
                </button>

                <a href ="/"><button className='newtopic-button-close'>Close</button></a>
              </div>

          </div>

        </div>

        <div>

            

        </div>
        <footer>
            <p  className='footer-copyright'>COPYRIGHTS <a href="#">TEAM X</a></p>
        </footer>
    </div>
  )
}