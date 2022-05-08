import React,{useState, useEffect} from 'react'
import axios from 'axios'; 
import './worldfilter.css'
import SideMenu from '../../SideMenu/menu'
import Footer from '../../Footer/footer'

export default function Wordfilter() {

  const [words , setWord] = useState([]);

  const retrieveWords = () =>{
    axios.get("/adminmanage/wordfilter")
        .then(response=>{
          console.log(response.data);
          setWord(response.data);
      })
      .catch((err)=>{
          console.log("Err Axios - ",err)
      })
    }

    useEffect(() => {
      retrieveWords();
    }, []);



  return (
    <div>
        
    <SideMenu/>

    <div className='main-body-container'> {/* CSS Coming from Dashboard CSS File */}

          <div className='topic-management-sub-body-container'>

               <h1 className='text-uppercase'>Word Filter Management</h1>
               <div className='Home-sub-body-hr-line'/> {/* CSS Coming from Dashboard CSS File */}

          </div>

          <div className='word-manage-top-items'>
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


                <button className='word-btn'><i class="fa-solid fa-plus"></i> &nbsp; Add Word</button>


          </div>

          <div className='topic-manage-form-box'>
              <table className="Top-table-dashboard">
                  <thead>
                    <tr>
                      <th className='topic-mange-No-th' scope="col">#</th>
                      <th className='topic-mange-Reply-th' scope="col">Word</th>
                      <th className='topic-mange-Category-th' scope="col">Category</th>
                      <th className='topic-mange-Action-th' scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                 { words.map(getword => (
                    
                
                      <tr>
                        <td className='topic-mange-td' scope="row">1</td>
                        <td className='topic-mange-topic-td'><div  className='nav-link' >{getword.word}</div></td>
                        <td className='topic-mange-td'>{getword.wcategory}</td>
                        <td className='topic-mange-td '>
                          <a className=" btn btn-danger action-edit-btn" id="deletetBtn" href='/#ed'>
                              <i className="fas fa-trash-alt"></i>&nbsp;Delete   
                          </a>
                          <a className=" btn btn-warning action-edit-btn" id="editBtn" href='/#ed'>
                          <i class="fa-solid fa-pen-to-square"></i>&nbsp;Edit   
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
