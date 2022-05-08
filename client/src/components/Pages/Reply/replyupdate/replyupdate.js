import React from 'react'
import Header from '../../../Header/header'
import './replyupdate.css'
import Footer from '../../../Footer/footer'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css' //quill's css important


export default function replyupdate() {
  return (
    <div>
        <Header/>
        
        <div className='replyupdate-marjin'>
             <h2>Janith Dilshan</h2><br></br>

            <p><h4>Proxy does not work with the react build version</h4></p>
                 <ReactQuill className="replycard-react-quill" theme='snow'/>
                 <hr></hr>
          
          
          

                 <div className='replyhome-button'>
                     <a href='/view-forum'><button className='replyhome-button-create'>Post</button></a>
                     <a href='/'><button className='replyhome-button-close'>Close</button></a>
                 </div>

       
          </div>
        <Footer/>

    </div>
    
  )
}