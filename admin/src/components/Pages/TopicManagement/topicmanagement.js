import React , { useState, useEffect } from "react";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './topicmanagement.css'
import SideMenu from '../../SideMenu/menu'
import Footer from '../../Footer/footer'

export default function Topicmanagement() {

  const islogin = JSON.parse(localStorage.getItem("admin"))
  const [topic , setTopic] = useState([]);


  useEffect(() => {
    console.log(islogin)
      if(!islogin){
        window.location.replace('/login');
      }
  },[islogin]);

  useEffect(() => {
    retrieveTopic();
  }, []);


  const retrieveTopic = () =>{
    fetch("/adminmanage/forum/get").then(res=>res.json())
        .then(response=>{
          console.log(response);
          setTopic(response);
      })
      .catch((err)=>{
          console.log("Err - ",err)
      })

    }

    const onDelete = (id) =>{
      fetch('/adminmanage/topic/delete/' + id, {
        method: 'DELETE',
      }).then(res=>res.json())
      .then((data) =>{

        if(data.error){ 
          toast.error(data.error,{
            theme: "colored",
          });
        }
        else{
          toast.error(data.message,{
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            icon: false,
          });
          retrieveTopic();
        }


      })
      .catch((err)=>{
        console.log(err)
       })
    }


  return (
    <div>
        <ToastContainer/>
        <SideMenu/>

        <div className='main-body-container'> {/* CSS Coming from Dashboard CSS File */}

              <div className='topic-management-sub-body-container'>

                   <h1 className='text-uppercase'>Topic Management</h1>
                   <div className='Home-sub-body-hr-line'/> {/* CSS Coming from Dashboard CSS File */}

              </div>

              <div className='topic-manage-top-items'>
                 <input className='topic-manage-search' type="text" placeholder="Search.." />

                  <select name="cars" id="cars">
                        <option value="" selected disabled hidden> Select Category</option>
                        <option value="General">General</option>
                        <option value="JavaScript">Java Script</option>
                        <option value="HTML/CSS">HTML / CSS</option>
                        <option value="Backend">Backend</option>
                        <option value="Frontend">Frontend</option>
                        <option value="Other">Other</option>
                  </select>


                    <button className='Report-Btn'><i className="fa-solid fa-file-arrow-down"></i> &nbsp; Download Report</button>


              </div>

              <div className='topic-manage-form-box'>
                  <table className="Top-table-dashboard">
                      <thead>
                        <tr>
                          <th className='topic-mange-No-th' scope="col">#</th>
                          <th className='topic-mange-Topic-th' scope="col">Topic</th>
                          <th className='topic-mange-Reply-th' scope="col">Replies</th>
                          <th className='topic-mange-Category-th' scope="col">Category</th>
                          <th className='topic-mange-Action-th' scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>

        { topic.map((getTopic ,index)=> (
                          <tr>
                            <td className='topic-mange-td' scope="row">{index+1}</td>
                            <td className='topic-mange-topic-td'><a className='nav-link' href='#er'>{getTopic.Title}</a></td>
                            <td className='topic-mange-td'>50</td>
                            <td className='topic-mange-td'>{getTopic.FCategory}</td>
                            <td className='topic-mange-td'>
                              <a className=" btn btn-danger" id="deletetBtn" onClick={() =>onDelete(getTopic._id)}>
                                  <i className="fas fa-trash-alt"></i>&nbsp;Delete   
                              </a>
                            </td>
                          </tr>
         ))}
                      </tbody>
                    </table>
              </div>
       </div>

       <Footer/>

    </div>
  )
}
