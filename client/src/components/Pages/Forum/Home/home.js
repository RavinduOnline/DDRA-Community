import React , { useState } from "react";
import Header from '../../../Header/header'
import ForumCard from '../Home/ForumCard/forumcard'
import ForumCardPopular from '../Home/ForumCard/forumcardpopuler'

import './home.css'
import './newtopic'
import Footer from '../../../Footer/footer'

export default function Home() {

  const [SearchWord , setSearchWord] = useState("");


  return (
    <div>
        <Header/>
        

        <div>
          <form >
            <input id="home-searchNav" 
                   type="search" 
                   placeholder="Search.." 
                   aria-label="Search" 
                   value={SearchWord}
                   onChange={(e) => setSearchWord(e.target.value)}
            /> 
          </form>
        </div>

        
        <div className='home-btn-container'>
                <a href ="/add-forum">
                  <button className='home-new-btn'>
                    <i class="fa-solid fa-plus"></i>&nbsp;&nbsp;NEW TOPIC
                  </button>
                </a>   
                

              <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                          <button class="active home-filter-btn" id="latest-tab" data-bs-toggle="tab" data-bs-target="#latest" type="button" role="tab" aria-controls="latest" aria-selected="true">Latest</button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="home-filter-btn" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Popular</button>
                        </li>
              </ul>

              <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="latest" role="tabpanel" aria-labelledby="latest-tab">
                        <div className='home-topic-txt'>
                          <h6 className='home-topic-txt-topic'>Topic</h6>
                          <h6 className='home-topic-txt-reply'></h6>
                        </div>
                        <br/>
                        
                        <div className='home-card-container'>
                          <ForumCard searchKey={SearchWord} />
                        </div>
    
                    </div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div className='home-topic-txt'>
                              <h6 className='home-topic-txt-topic'>Topic</h6>
                              <h6 className='home-topic-txt-reply'></h6>
                            </div>
                            <br/>
                            <hr/>
                            
                            <div className='home-card-container'>
                              <ForumCardPopular/>
                            </div>
                    </div>
              </div>
                

        </div>

        <Footer/>

    </div>
    
  )
}
