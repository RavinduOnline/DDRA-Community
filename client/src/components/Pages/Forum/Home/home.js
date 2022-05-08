import React from 'react'
import Header from '../../../Header/header'
import ForumCard from '../Home/ForumCard/forumcard'
import './home.css'
import './newtopic'
import Footer from '../../../Footer/footer'

export default function home() {
  return (
    <div>
        <Header/>
        

        <div>
          <form >
            <input id="home-searchNav" type="search" placeholder="Search" aria-label="Search" /> 
          </form>
        </div>

        
        <div className='home-btn-container'>

          <div className='home-filter'>
            <button className='home-filter-btn' onclick="filterSelection('popular')"> Popular</button>
            <button className='home-filter-btn' onclick="filterSelection('latest')"> Latest</button>
          </div>

          <a href ="/add-forum">
            <button className='home-new-btn'>
              <i class="fa-solid fa-plus"></i>&nbsp;&nbsp;NEW TOPIC
            </button>
          </a>   
          

          <div className='home-topic-txt'>
            <h6 className='home-topic-txt-topic'>Topic</h6>
            <h6 className='home-topic-txt-reply'>Reply</h6>
          </div>

        </div>


        <br/>
        <hr/>
        
        <div className='home-card-container'>
          <ForumCard/>
        </div>
    

        <Footer/>

    </div>
    
  )
}
