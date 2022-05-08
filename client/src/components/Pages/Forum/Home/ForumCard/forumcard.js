import React from 'react'
import './forumcard.css'
import '../../ForumView/forumview'
import '../../../Reply/replycard/replycard'

export default function forumcard() {
  return (
    <div>
     
        <div className='forumcard-mainbox'>

          <div className='forumcard-container'>
          <a href="view-forum"><h4><b>Welcome to Developers & Designers Runtime Support Community's Forum</b></h4></a>
            <p>Welcome to free code camp's forum</p>
            <p>Please introduce yourself by replying to this thread with:)</p>
          </div>
          
          <span>
            <h5>40</h5>
            <i class="fa-solid fa-heart"></i>
          </span>

          <div className='forumcard-category-box'>
            General
          </div>
          
        </div>




        <div className='forumcard-mainbox'>

          <div className='forumcard-container'>
          <a href="view-forum"><h4><b>Welcome to Developers & Designers Runtime Support Community's Forum</b></h4></a>
            <p>Welcome to free code camp's forum</p>
            <p>Please introduce yourself by replying to this thread with:)</p>
          </div>
          
          <span>
            <h5>40</h5>
            <i class="fa-solid fa-heart"></i>
          </span>
          
          <div className='forumcard-category-box'>
            General
          </div>
          
        </div>

    </div>
  )
}
