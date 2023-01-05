import Header from '../../../Header/header'
import Footer from '../../../Footer/footer'
import './forumview.css'
import Img from '../ForumImage/forum01.png'
import ReplyHome  from '../../Reply/ReplyHome/ReplyHome'
import React,{useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Replycard from '../../Reply/replycard/replycard'
import jspdf from 'jspdf'
import "jspdf-autotable";
import BackendURL from '../../../url'

export default function Forumview() {

    let userData =""
    const [userObj , setUserObj] = useState("")

    const [forum , setForum] = useState([]);

    const {id} = useParams()



    useEffect(() => {
        Getforum(id);
        getUser();
  },[]);


const getUser= () =>{
    userData = localStorage.getItem("user");
     setUserObj(JSON.parse(userData))
     console.log(userObj.fName +" "+ userObj.lName)
}

  const Getforum = (id) =>{
    fetch(BackendURL+"/forumget/one/" + id).then(res=>res.json())
        .then(response=>{
          console.log(response);
          setForum(response);
      })
      .catch((err)=>{
          console.log("Err - ",err)
      })
}


// generate pdf ______________________
const generatePDF = tickets => {

    
    var doc = new jspdf("landscape");    
    const date = Date().split(" ");        
    const dateStr = date[1] + "-" + date[2] + "-" + date[3];
  
  doc.setTextColor(0, 0, 255);
  doc.text("Developers & Designers Runtime Support Community", 35, 20).setFontSize(13);
  doc.setTextColor(100);
  doc.text("Forum Name - " + tickets.Title , 14, 45).setFontSize(13);
  doc.text("Forum Body" , 14, 55).setFontSize(13);
  doc.text(tickets.Body , 14, 64).setFontSize(13);
  doc.text(`Report Generated Date - ${dateStr}`, 14, 75);
  
  //right down width height
//   doc.addImage(tickets.Pic, 'JPEG', 170, 8, 25, 25);
    
  doc.save(tickets.Title + " Forum - DDRS Community.pdf");
  
  };
  
  

  return (
    <div className='forum-view-box-main'>
        <Header/>

            <div className='forumview-view'>
                <div className='forumview-topic'>
                    <h1 >{forum.Title}</h1>
                    <p className='forumview-topic-txt'>{forum.Created_at}</p>
                </div>
                <div className='forum-dwn-btn-div'>
                    <button className='Forum-Print-Btn' onClick={() => generatePDF(forum)} ><i className="fa-solid fa-file-arrow-down"></i> &nbsp; Print Forum </button>
                </div>
                <hr/>

                <div className='forumview-topic-desc'>
                    <div id="forum-body" dangerouslySetInnerHTML={{__html: forum.Body}}></div>

                    {forum.Pic && 
                         <div className='forum-img'> <img src={forum.Pic} /></div>
                    }

                </div>
            </div>

            <div className='forumview-reply'>
                <div className='forumview-btn-container'>
                    <div className='forumview-topic-txt'>
                        <h6  className='forumview-topic-txt-reply'>Replies</h6>
                    </div>
                </div>

                <br/>
                <hr/>

                <div className='forumview-reply-card'>
                   
                </div>
                
                <ReplyHome  getForumid={forum._id} GetUser={userObj} /> 
                <div className='forum-reply-view'>
                    <Replycard  getForumid={id} />
                </div>
            </div>

        <Footer/>
    </div>
  )
}
