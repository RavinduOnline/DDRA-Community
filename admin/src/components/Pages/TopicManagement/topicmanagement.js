import React , {useEffect} from 'react'
import './topicmanagement.css'
import SideMenu from '../../SideMenu/menu'
import Footer from '../../Footer/footer'

export default function Topicmanagement() {

  const islogin = JSON.parse(localStorage.getItem("admin"))

  useEffect(() => {
    console.log(islogin)
      if(!islogin){
        window.location.replace('/login');
      }
  },[islogin]);


  return (
    <div>
        
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

                          <tr>
                            <td className='topic-mange-td' scope="row">1</td>
                            <td className='topic-mange-topic-td'><a className='nav-link' href='#er'>Test 1</a></td>
                            <td className='topic-mange-td'>50</td>
                            <td className='topic-mange-td'>Java Script</td>
                            <td className='topic-mange-td'>
                              <a className=" btn btn-danger" id="deletetBtn" href='/#ed'>
                                  <i className="fas fa-trash-alt"></i>&nbsp;Delete   
                              </a>
                            </td>
                          </tr>
                      </tbody>
                    </table>
              </div>
       </div>

       <Footer/>

    </div>
  )
}
