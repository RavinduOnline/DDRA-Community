import React from 'react'
import Header from '../../../Header/header'
import './profile.css'
import ForumCard from '../../Forum/Home/ForumCard/forumcard'
import Ppic from'./Profile.jpg'
import Footer from '../../../Footer/footer'

export default function profile() {
  return (
    <div>
      <Header/>

        <div className='profile-mainbox'>

            <div className='profile-container'>
              <table className='profile-table'>
                <tr>
                  <td className='profile-td'>
                    <img src={Ppic} width="150" height="150"/>
                  </td>
                  <td >
                    <h4>Janith Dilshan</h4>
                    <p>Sri Lanka</p>
                    <p>janith@gmail.com</p>
                  </td>
                  <td>
                    
                  </td>
                </tr>
            </table>
            
              <a href="/usersetting">
                  <button type="submit" className='profile-button'>Settings</button>
              </a>
            
            </div>

        </div>

        <div className='profile-filter-container'>
          <div className='profile-filter'>
            <button className='profile-filter-btn' onclick="filterSelection('popular')"> Popular</button>
            <button className='profile-filter-btn' onclick="filterSelection('latest')"> Forum</button>
            <button className='profile-filter-btn' onclick="filterSelection('latest')"> Replies</button>
          </div>
        </div>

        <div>
          <form >
            <input id="profile-searchNav" type="search" placeholder="Search" aria-label="Search" /> 
          </form>
        </div>

        <div className='profile-topic-txt'>
            <h6 className='profile-topic-txt-topic'>Topic</h6>
            <h6 className='profile-topic-txt-reply'>Reply</h6>
        </div>

        <br/>
        <hr/>

        <div className='profile-card-container'>
          <ForumCard/>
        </div> 

        <Footer/>

    </div>
  )
}