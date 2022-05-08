import React, { useState } from 'react'
import Header from '../../../Header/header'
import './newtopic.css'
import Footer from '../../../Footer/footer'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css' //quill's css important
import axios from 'axios'

import {useSelector} from 'react-redux'
import {selectUser} from '../../../../feature/userSlice'
import Editor from "react-quill/lib/toolbar";


export default function home() {

  const user = useSelector(selectUser);
  var toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], // remove formatting button
  ];
  Editor.modules = {
    syntax: false,
    toolbar: toolbarOptions,
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };

  Editor.formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];


const[Title, setTitle] =React.useState("")
const[FCategory, setFCategory]= React.useState("")
const[Description, setDescription] = React.useState("")
const[Body, setBody] = React.useState("")

const handleQuill = (value) => {
  setBody(value)
}

const handleSubmit = async (e) =>{
  e.preventDefault()

  if(Title !=="" && Body !==""){
    const bodyJSON = {
        Title:Title,
        FCategory:FCategory,
        Description:Description,
        Body:Body,
        user:user
    }
    await axios.post('/forumcreate', bodyJSON)
    .then((res)=>{
      alert('Forum Added Successfully')
    }).catch((err) => {
      console.log(err)
    })
  }
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
                      
                        <select>
                            <option value={FCategory} onChange ={(e) =>setFCategory(e.target.value)} selected="selected">Select forum category</option>
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
                          value = {Description} 
                          onChange ={(e) =>setDescription(e.target.value)} 
                          type="text" 
                          placeholder='Mini Description' 
                          maxLength="100"/>
                    </div>
                  </div>

                  <div className='newtopic-question-option'> 
                    <div className='newtopic-title'>
                      <small>Include all information someone would need to answer your question</small>
                      <ReactQuill 
                          value={Body} 
                          onChange ={handleQuill} 
                          modules={Editor.modules}
                          className="newtopic-react-quill" 
                          theme='snow'/>
                      </div>
                  </div>


                </div>
              </div>
              <div className='newtopic-button'>
              <a href ="/view-forum">
                <button
                    type='submit'
                    onClick={handleSubmit}
                    className='newtopic-button-create'>Create
                </button>
              </a>
                <a href ="/"><button className='newtopic-button-close'>Close</button></a>
              </div>

          </div>

        </div>

        <Footer/>
    </div>
  )
}