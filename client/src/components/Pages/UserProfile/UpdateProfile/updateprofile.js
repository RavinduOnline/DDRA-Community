import React, { Component } from 'react'
import Header from '../../../Header/header'
import './updateprofile.css'
import Footer from '../../../Footer/footer'


export default class updateprofile extends Component {
  render() {
    return (
      <div>

        <form>
          <div className='updatepro-details'>
            <h1>Welcome to.........!</h1>
                <hr/>

                <table>
                  <tr>
                    <td className='updatepro-td'><label for="fname"><b>First Name<br/></b></label></td>
                    <td className='updatepro-input'><input type="text" placeholder="Enter First Name" name="fname" required/></td><br/><br/>
                  </tr>

                  <tr>
                    <td className='updatepro-td'><label for="lname"><b>Last Name<br/></b></label></td>
                    <td className='updatepro-input'><input type="text" placeholder="Enter Last Name" name="lname" required/></td><br/><br/>
                  </tr>

                  <tr>
                    <td className='updatepro-td'><label for="email"><b>Email<br/></b></label></td>
                    <td className='updatepro-input'><input type="text" placeholder="Enter Email" name="email" required/></td><br/><br/>
                  </tr>

                  <tr>
                    <td className='updatepro-td'><label for="gender"><b>Gender<br/></b></label></td>
                    
                    <td className='updatepro-input'>
                      <input type="radio" id="male" name="male" value="male"/>
                      <label for="male">Male</label>
                      <input type="radio" id="female" name="female" value="female"/>
                      <label for="female">Female</label>
                      <input type="radio" id="other" name="other" value="other"/>
                      <label for="other">Other</label>
                    </td><br></br><br/>
                  </tr>

                  <tr>
                  <td className='updatepro-td'><lable for="country"><b>Country</b></lable></td>
                    <td>
                      <select name="country" id="country">
                        <option value="united kingdom">Sri Lanka</option>
                        <option value="united states">United States</option>
                        <option value="australia">Australia</option>
                        <option value="japan">Japan</option>
                      </select>
                    </td><br/><br/>
                  </tr>

                </table><br/>

                <div className='updatepro-button-2'>
                <button type="submit">Cancel</button><br/>
                <button type="submit">Update Profile</button>
                </div>

          </div>

                
        </form>

      </div>
    )
  }
}
