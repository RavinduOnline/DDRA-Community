import Header from '../../../Header/header'
import Footer from '../../../Footer/footer'
import './forumview.css'
import Img from '../ForumImage/forum01.png'
import ReplyHome  from '../../Reply/ReplyHome/ReplyHome'
import React,{useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
  

export default function Forumview() {

    const [forum , setForum] = useState([]);

    const {id} = useParams()

    useEffect(() => {
        Getforum(id);
  },[]);

  const Getforum = (id) =>{
    fetch("/forumget/one/" + id).then(res=>res.json())
        .then(response=>{
          console.log(response);
          setForum(response);
      })
      .catch((err)=>{
          console.log("Err - ",err)
      })
}
  return (
    <div>
        <Header/>

            <div className='forumview-view'>
                <div className='forumview-topic'>
                    <h1 >{forum.Title}</h1>
                    <p className='forumview-topic-txt'>{forum.Created_at}</p>
                </div>

                <hr/>

                <div className='forumview-topic-desc'>
                    <div>{forum.Body}</div>

                    <img src={forum.Pic} />

                </div>
            </div>

            <div className='forumview-reply'>
                <div className='forumview-btn-container'>
                    <div className='forumview-topic-txt'>
                        <h6 className='forumview-topic-txt-reply'>Replies</h6>
                    </div>
                </div>

                <br/>
                <hr/>

                <div className='forumview-reply-card'>
                   
                </div>
                
                <ReplyHome/> 
            </div>

        <Footer/>
    </div>
  )
}
