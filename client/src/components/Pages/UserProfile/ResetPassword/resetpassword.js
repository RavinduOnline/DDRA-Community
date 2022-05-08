import React from 'react'
import './resetpassword.css'
import {Link} from 'react-router-dom'
import Header from '../../../Header/header'
import Footer from '../../../Footer/footer'

export default function resetpassword() {
  return (
    <div>
      <Header/>
        <div className='resetp-form-body'>

        <div className='resetp-form-body-box'></div>
              <div className='resetp-form-box'>
                    <form action='./'>
                        <h4>Hi....</h4>
                        <label for="pwd">New Password</label><br/>
                        <input type="text" id="pwd1" name="pwd1"/><br/><br/>
                        <label for="pwd">Re - Password</label><br/>
                        <input type="text" id="pwd2" name="pwd2"/><br/><br/>
                        <button className='resetp-button' type='submit' >Reset</button><br/><br/>
                        <Link className='nav-link ' to="/usersetting">Back</Link>
                    </form>
              </div>
          </div>
          <Footer/>
    </div>
  )
}