import Header from '../../../Header/header'
import Footer from '../../../Footer/footer'
import './forumview.css'
import Img from '../ForumImage/forum01.png'
import ReplyHome  from '../../Reply/ReplyHome/ReplyHome'
import React,{useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
  

export default function Forumview(props) {

    const {id} = useParams()

    useEffect(() => {
        GetforumID();
  },[]);

    const GetforumID = () => {
       
         console.log(id)
    }
  return (
    <div>
        <Header/>

            <div className='forumview-view'>
                <div className='forumview-topic'>
                    <h1 >Proxy does not work with the React build version</h1>
                    <p className='forumview-topic-txt'>Dec 13,2022 at 2:04</p>
                </div>

                <hr/>

                <div className='forumview-topic-desc'>
                    <p>I'm bit annoyed that the ENTSO-E only provides XML responses and no JSON formats for their API. Does anyone have experienced with converting text/xml responses to data frames in R? I usually use @data_life Sorry there was a typo in the lapps () definition, which I corrected. One shouldn't name variables with the same name as a function. "file" in this case. Sometimes, I should take my own advise :)-
                    </p>

                    <img src={Img} />

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
