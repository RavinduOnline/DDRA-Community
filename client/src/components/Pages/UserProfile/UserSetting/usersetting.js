import React,{useState, useEffect} from 'react'
import axios from 'axios';
import Header from '../../../Header/header'
import './usersetting.css'
import Ppic from'./Profile.jpg'
import Footer from '../../../Footer/footer'

export default function Usersetting() {

      const [user , setUser] = useState([]);

      const retrieveUserSetting = () =>{
        axios.get("/user/usersetting/627796f69c7c7904f0c9ccbc")
            .then(response=>{
              console.log(response.data);
              setUser(response.data);
          })
          .catch((err)=>{
              console.log("Err Axios - ",err)
          })
        }

        useEffect(() => {
          retrieveUserSetting();
        }, []);

  return (
    <div>
      <Header/>
      
      { user.map(getUser => (
      <div className='usersetting-main-box'>

          
 
                <div className='usersetting-cen'>
                    <diV className='usersetting-cen-1'>
                      <img src={Ppic} />
                    </diV>
                    <diV className='usersetting-cen-2'>
                      <h4>Janith Dilshan</h4>
                      <p>Sri Lanka</p>
                      <p>janith@gmail.com</p>
                      <a href="/usersetting">
                        <button type="submit" >Change Image</button>
                      </a>
                    </diV>
                </div>
                  

        
              <div className='usersetting-details'>
                <table>

                    <tr>
                      <td>First Name</td>
                      <td>Janith</td>
                    </tr>
                    <tr>
                      <td>Last Name</td>
                      <td>Dilshan</td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>janith@gmail.com</td>
                    </tr>
                    <tr>
                      <td>Country</td>
                      <td>Sri Lanka</td>
                    </tr>
                    <tr>
                      <td>Gender</td>
                      <td>Mail</td>
                    </tr><br/>

                    </table>

                    <div className='usersetting-button-1'>
                    <button type="submit">Change Password</button><br/>
                    <button type="submit">Change details</button><br/>
                    </div>
                    <div className='usersetting-button-2'>
                    <button type="submit">Disable Profile</button><br/>
                    <button type="submit">Download User details Report</button>
                    </div>
                  
              </div>
            
           
      </div>

        ))}

        <Footer/>
        

    </div>
  )
}