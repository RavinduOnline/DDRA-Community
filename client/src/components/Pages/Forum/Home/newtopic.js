import React from 'react'
import Header from '../../../Header/header'
import './newtopic.css'
import Footer from '../../../Footer/footer'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css' //quill's css important
import axios from 'axios'

import {useSelector} from 'react-redux'
import {selectUser} from '../../../../feature/userSlice'
import Editor from "react-quill/lib/toolbar";

import { ref, uploadBytes, getDownloadURL, listAll,list } from "firebase/storage";
import { storage } from "../../../Firebase Storage/firebase";

import { v4 } from "uuid";
import { useState, useEffect , useRef} from "react";

export default function Home() {

const[Title, setTitle] = useState("")
const[FCategory, setFCategory]= useState("")
const[MiniDescription, setMiniDescription] = useState("")
const [userInfo, setuserInfo] = useState({description:''});

const [imageUpload, setImageUpload] = useState("");
    const [url,setUrl] = useState("")
      useEffect(() => {

        if(url){
          console.log(url)
          TopicCreate();
        }

      }, [url]);

const uploadFile =  () => {
  if (imageUpload == null){
    return;
  }     
  else{
        const imageRef = ref(storage, `posts/${imageUpload.name + v4()}`);
         uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((imageurl) => {
              console.log(imageurl) //test
              setUrl(imageurl)
              console.log("URL - " + url)
              
          });
        });
  }   

}


const TopicCreateData =  () =>{

  if(imageUpload){
        uploadFile()
        console.log("URL - " + url)
  }
  else{
    TopicCreate();
  }


}


    const ondescription = (value) => {
      console.log(value)
      setuserInfo({ ...userInfo,
        description:value
      });
    } 


    const TopicCreate = () =>{
      console.log("URL - " + url)
      console.log("Topic Created " )
      if(!Title || !FCategory || !MiniDescription ||!userInfo ){
              
        alert("Fill All")
        return
      }
      if(userInfo.description.length < 10){
        alert('Required, Add description minimum length 50 characters');
        return;
      }

      fetch("/forumcreate",{
        method:"post",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({

          Title:Title, 
          FCategory:FCategory, 
          Description:MiniDescription,
          Body:userInfo.description,
          Pic:url,

        })
    }).then(res=>res.json())
    .then(data => {

        if(data.error){ 
              alert("Error" + data.error)
        }
        else{
          alert(data.message)
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
        <Header/>
        <div className='newtopic-forum'>
          <div className='newtopic-forum-container'>
              <div className='newtopic-head-title'>
                <h1>Create Topic</h1>
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
                      
                        <select onChange ={(e) =>setFCategory(e.target.value)}>
                            <option value={FCategory}  selected="selected">Select forum category</option>
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
                    <div class="mb-3">
                        <label for="formFile" className="form-label">Upload Image</label>
                        <input className="form-control" type="file" id="formFile"
                        onChange={(event) => {
                                  setImageUpload(event.target.files[0]);
                                }}/>
                    </div>
                    </div>
                  </div>

                  <div className='newtopic-question-option'> 
                    <div className='newtopic-title'>
                      <small>Include all information someone would need to answer your question</small>
                          <div className='react-quill-box'>
                            <ReactQuill 
                                theme="snow"
                                value={userInfo.description}
                                onChange={ondescription}
                                modules={Editor.modules}
                                className="newtopic-react-quill" 
                                placeholder={"Include all information someone would need to answer your question..."}
                                />
                          </div>
                      </div>
                      
                  </div>


                </div>
              </div>
              <div className='newtopic-button'>

                <button
                    type='submit'
                    onClick={() => TopicCreateData() }
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