import React from 'react'
import './signin.css'
import {Link} from 'react-router-dom'
import Header from '../../../Header/header'
import Footer from '../../../Footer/footer'

export default function signin() {
  return (
    <div>
      <Header/>
        <div className='sigin-form-body'>

        <div className='sigin-form-body-box'></div>
              <div className='sigin-form-box'>
                    <form action='./'>
                        <h4>Hi....</h4>
                        <label for="fname">User Name</label><br/>
                        <input type="text" id="fname" name="fname"/><br/><br/>
                        <label for="lname">Password</label><br/>
                        <input type="text" id="lname" name="lname"/><br/><br/>
                        <button className='signin-button' type='submit' >Login</button><br/><br/>
                        <Link className='nav-link ' to="/signup">Don't have an Account? | New User</Link>
                    </form>
              </div>
          </div>
          <Footer/>
    </div>
  )
}