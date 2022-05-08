import React from 'react'
import './signupforum.css'

export default function signupforum() {
  return (
    <div> 

        <form action='/signin'>
          <div className='signup-details'>
            <h1>Welcome to.........!</h1>
                <hr/>

                <table>
                  <tr>
                    <td className='signup-td'><label for="fname"><b>First Name<br/></b></label></td>
                    <td className='signup-input'><input type="text" placeholder="Enter First Name" name="fname" required/></td><br/><br/>
                  </tr>

                  <tr>
                    <td className='signup-td'><label for="lname"><b>Last Name<br/></b></label></td>
                    <td className='signup-input'><input type="text" placeholder="Enter Last Name" name="lname" required/></td><br/><br/>
                  </tr>

                  <tr>
                    <td className='signup-td'><label for="email"><b>Email<br/></b></label></td>
                    <td className='signup-input'><input type="text" placeholder="Enter Email" name="email" required/></td><br/><br/>
                  </tr>

                  <tr>
                    <td className='signup-td'><label for="gender"><b>Gender<br/></b></label></td>
                    
                    <td className='signup-input'>
                      <input type="radio" id="male" name="male" value="male"/>
                      <label for="male">Male</label>
                      <input type="radio" id="female" name="female" value="female"/>
                      <label for="female">Female</label>
                      <input type="radio" id="other" name="other" value="other"/>
                      <label for="other">Other</label>
                    </td><br></br><br/>
                  </tr>
                    

                  <tr>
                    <td className='signup-td'><label for="interested"><b>Interested<br/></b></label></td>
                    <td className='signup-input'><input type="text" placeholder="Enter interested" name="interested" required/></td><br/><br/>
                  </tr>

                  <tr>
                  <td className='signup-td'><lable for="country"><b>Country</b></lable></td>
                    <td>
                      <select name="country" id="country">
                        <option value="united kingdom">Sri Lanka</option>
                        <option value="united states">United States</option>
                        <option value="australia">Australia</option>
                        <option value="japan">Japan</option>
                      </select>
                    </td><br/><br/>
                  </tr>


                  <tr>
                    <td className='signup-td'><label for="psw"><b>Password</b></label></td>
                    <td className='signup-input'><input type="password" placeholder="Enter Password" name="psw" required/></td><br/><br/>
                  </tr>

                  <tr>
                    <td className='signup-td'><label for="psw-repeat"><b>Re-enter Password</b></label></td>
                    <td className='signup-input'><input type="password" placeholder="Confirm Password" name="psw-repeat" required/></td><br/><br/>
                  </tr>
                </table>

                <label>
                <input type="checkbox" checked="checked" name="remember" /> Agree to the teams and condition
                </label><br/>

                <div class="signup-button">
                <button type="submit" class="signup-button">Sign Up</button>
                </div>

          </div>

                
        </form>

    </div>
  )
}
