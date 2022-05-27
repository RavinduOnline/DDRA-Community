import React,{useState, useEffect} from 'react'
import Header from '../../../Header/header'
import './usersetting.css'
import Ppic from'./Profile.jpg'
import Footer from '../../../Footer/footer'
import { Button , Modal } from 'react-bootstrap';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Usersetting() {

  const [deleteModelshow, setDeleteModelshow] = useState(false);
  const deleteHandleClose = () => {setDeleteModelshow(false)}
  const deleteHandleShow = () => {setDeleteModelshow(true)}

  useEffect(() => {
    retrieveUser();
  }, []);
    
  const [user , setUser] = useState([]);


    const retrieveUser = () =>{
      const userDetails = JSON.parse(localStorage.getItem("user"))
      console.log(userDetails._id)
      fetch("/user/usersetting/"+userDetails._id).then(res=>res.json())
          .then(response=>{
            console.log(response);
            setUser(response);
            console.log(user.lName)
        })
        .catch((err)=>{
            console.log("Err Axios - ",err)
        })
  
      }

      const ProfileDelete = (id) =>{
        fetch('/user/disableprofile/' + id, {
          method: 'DELETE',
        }).then(res=>res.json())
        .then((data) =>{
  
  
  
          if(data.error){ 
            toast.error(data.error,{
              theme: "colored",
            });
          }
          else{
            localStorage.clear()
            window.location.replace('/signup');
          }
  
  
        })
        .catch((err)=>{
          console.log(err)
         })
      }

  return (
    <div>
      <Header/>
      <ToastContainer/>
      
      <div className='usersetting-main-box'>

          
 
                <div className='usersetting-cen'>
                    <diV className='usersetting-cen-1'>
                      <img src={Ppic} />
                    </diV>
                    <diV className='usersetting-cen-2'>
                      <h4>{user.fName} {user.lName}</h4>
                      <p>{user.country}</p>
                      <p>{user.email}</p>
                      <a href="/usersetting">
                        <button type="submit">Change Image</button>
                      </a>
                    </diV>
                </div>
                  

        
              <div className='usersetting-details'>
                <table>

                    <tr>
                      <td>First Name</td>
                      <td>{user.fName}</td>
                    </tr>
                    <tr>
                      <td>Last Name</td>
                      <td>{user.lName}</td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>{user.email}</td>
                    </tr>
                    <tr>
                      <td>Country</td>
                      <td>{user.country}</td>
                    </tr><br/>

                    </table>

                    <div className='usersetting-button-1'>
                    <a href="/resetpassword"><button type="submit">Change Password</button></a><br/>
                    <a href="/updateprofile"><button type="submit">Change details</button></a><br/>
                    </div>
                    <div className='usersetting-button-2'>
                    <button type="submit"
                      onClick={() => setDeleteModelshow(true)}>Disable Profile</button><br/>
                    <button type="submit">Download User details Report</button>
                    </div>
                  
              </div>
            
           
      </div>

        {/* ********* Delete Popup Start***************** */}
          <div>
        
            <Modal show={deleteModelshow} onHide={deleteHandleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Delete Confirm</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <div>
                  <p>Are you sure you want to delete your account?<br/>
                    You will no longer be able to use these services after confirming 
                    the removal of your account. This process is also irreversible.</p>
                </div>
                <div class="text-danger mb-1" id="WordUpdate-alert " role="alert"></div>

              </Modal.Body>

              <Modal.Footer>
                  <Button variant="secondary" onClick={deleteHandleClose}>
                    Close
                  </Button>
                  
                  <Button variant="primary" onClick={() => ProfileDelete(user._id)}>
                    Confirm
                  </Button>
              </Modal.Footer>
            </Modal>
          </div>
        {/* ********* Delete Popup End *************** */}

        <Footer/>
        

    </div>
  )
}