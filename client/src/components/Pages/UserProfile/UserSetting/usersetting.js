import React,{useState, useEffect} from 'react'
import Header from '../../../Header/header'
import './usersetting.css'
import Ppic from'./Profile.jpg'
import Footer from '../../../Footer/footer'
import { Button , Modal } from 'react-bootstrap';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jspdf from 'jspdf'
import "jspdf-autotable" 
import BackendURL from '../../../url';

export default function Usersetting() {

  const [deleteModelshow, setDeleteModelshow] = useState(false);
  const deleteHandleClose = () => {setDeleteModelshow(false)}
  const deleteHandleShow = () => {setDeleteModelshow(true)}
  const [avatar , setAvatar] = useState(Ppic);
  const [user , setUser] = useState([]);


  useEffect(() => {
    retrieveUser();
  }, []);
    


    const retrieveUser = () =>{
      const userDetails = JSON.parse(localStorage.getItem("user"))
      console.log(userDetails._id)
      fetch(BackendURL + "/user/usersetting/"+userDetails._id).then(res=>res.json())
          .then(response=>{
            setUser(response);
        })
        .catch((err)=>{
            console.log("Err Axios - ",err)
        })
  
      }

      const ProfileDelete = (id) =>{

        if(user.email !== "test@ddrs.com" ){
            fetch(BackendURL + '/user/disableprofile/' + id, {
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
        else{
          alert("You are in an experience mood. You don't have permission to do this action.");
          setDeleteModelshow(false);
        }
      }

      // generate pdf ______________________
      const generatePDF = tickets => {

          
        var doc = new jspdf("landscape");    
        const date = Date().split(" ");        
        const dateStr = date[1] + "-" + date[2] + "-" + date[3];

      doc.setTextColor(0, 0, 255);
      doc.text("Developers & Designers Runtime Support Community", 35, 20).setFontSize(13);
      doc.setTextColor(100);
      doc.text("Name - " + tickets.fName +" "+ tickets.lName, 14, 45).setFontSize(13);
      doc.text("Email - " + tickets.email, 14, 55).setFontSize(13);
      doc.text("Country - " + tickets.country, 14, 64).setFontSize(13);
      doc.text("Account Created Date - " + tickets.createdAt, 14, 75).setFontSize(13);
      doc.text(`Report Generated Date - ${dateStr}`, 14, 82);

      //right down width height
      //   doc.addImage(tickets.Pic, 'JPEG', 170, 8, 25, 25);
        
      doc.save(tickets.fName + " Profile - DDRS Community.pdf");

      };

  return (
    <div>
      <Header/>
      <ToastContainer/>
      
      <div className='usersetting-main-box'>

          
 
                <div className='usersetting-cen'>
                    <diV className='usersetting-cen-1'>
                      <img src={ user.email === "test@ddrs.com" ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLuYWNUxlV-B8JIYGhC8HHdm8AJBXvSENdwG5qbKijYKAiu1YJfw-dL5lnn_Nw7ShqsUg&usqp=CAU" : avatar } />
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
                    <button type="submit" onClick={() => generatePDF(user)}>Download User details Report</button>
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