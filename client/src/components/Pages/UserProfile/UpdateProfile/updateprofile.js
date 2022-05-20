import React,{useState, useEffect} from 'react'
import Header from '../../../Header/header'
import './updateprofile.css'
import Footer from '../../../Footer/footer'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Updateprofile() {

  const [fName,setFName] = useState("")
  const [lName,setLName] = useState("")
  const [email,setEmail] = useState("")
  const [country,setCountry] = useState("")
  const [id,setId] = useState("")


  useEffect(() => {
    retrieveUser();
  }, []);

  const retrieveUser = () =>{
    const userDetails = JSON.parse(localStorage.getItem("user"))
    console.log(userDetails._id)
    fetch("/user/usersetting/"+userDetails._id).then(res=>res.json())
        .then(response=>{
          console.log(response);
          setFName(response.fName)
          setLName(response.lName)
          setEmail(response.email)
          setCountry(response.country)
          setId(response._id)
      })
      .catch((err)=>{
          console.log("Err Axios - ",err)
      })

    }

  const UserUpdate = (id) =>{

    if(!fName || !lName || !email || !country){
      
      document.getElementById("userUpdate-alert").style.display = "flex";
      document.getElementById("userUpdate-alert").innerHTML = "Please fill all the field!";
      return
    }
    
            fetch("/user/updateprofile/"+id,{
                method:"PUT",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({

                  fName,
                  lName,
                  email,
                  country

                })
            }).then(res=>res.json())
            .then(data => {

                if(data.error){ 
                      toast.error(data.error,{
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                      });
                }
                else{
                  toast.success("User Updated",{
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                  });
                  window.location.replace('/usersetting');
                }
                
            }).catch((err)=>{
              console.log("Error - ", err)
            })
  }

  return (
    <div>

        <Header/>
        <ToastContainer/>

        <div>
          <div className='updatepro-details'>
            <h1>Welcome to.........!</h1>
                <hr/>

                <table>
                  <tr>
                    <td className='updatepro-td'><label for="fname"><b>First Name<br/></b></label></td>
                    <td className='updatepro-input'>
                      <input type="text" 
                        placeholder="Enter First Name" 
                        name="fname" 
                        value={fName}
                            onChange={(e) => setFName(e.target.value)}
                        required/></td><br/><br/>
                  </tr>

                  <tr>
                    <td className='updatepro-td'><label for="lname"><b>Last Name<br/></b></label></td>
                    <td className='updatepro-input'>
                      <input type="text" 
                        placeholder="Enter Last Name" 
                        name="lname" 
                        value={lName}
                          onChange={(e) => setLName(e.target.value)}
                        required/></td><br/><br/>
                  </tr>

                  <tr>
                    <td className='updatepro-td'><label for="email"><b>Email<br/></b></label></td>
                    <td className='updatepro-input'>
                      <input type="text" 
                        placeholder="Enter Email" 
                        name="email"
                        value={email}
                          onChange={(e) => setEmail(e.target.value)} 
                        required/></td><br/><br/>
                  </tr>

                  <tr>
                  <td className='updatepro-td'><lable for="country"><b>Country</b></lable></td>
                    <td>
                      <select name="country" 
                        id="country"
                        value={country}
                          onChange={(e) => setCountry(e.target.value)}>
                        <option value="" selected disabled hidden>Select Country</option>
                        <option key="sl" value="Sri Lanka">Sri Lanka</option>
                        <option key="us" value="United States">United States</option>
                        <option key="aus" value="Australia">Australia</option>
                        <option key="japan" value="Japan">Japan</option>
                      </select>
                    </td><br/><br/>
                  </tr>

                </table><br/>
                
                <div id="userUpdate-alert" class="alert alert-danger" role="alert"/><br/>

                <div className='updatepro-button-2'>
                <button type="submit" 
                  onClick={() => UserUpdate(id)}>Update Profile</button><br/>
                <button type="submit">Cancel</button>
                </div>

          </div>

                
        </div>

        <Footer/>

    </div>
  )
}
