import React , { useState, useEffect } from "react";
import { Button , Modal } from 'react-bootstrap';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './worldfilter.css'
import SideMenu from '../../SideMenu/menu'
import Footer from '../../Footer/footer'
import CreateModel from "./Create Model/createmodel"
import BackendURL from '../../url'


export default function Wordfilter() {

  const [updateModelshow, setupdateModelshow] = useState(false);
  const [createModelshow, setcreateModelshow] = useState(false);

  const [words , setWord] = useState([]);
  const [wordsDetails , setWordDetails] = useState([]);
  const [getWordForum , setGetWordForum] = useState("");
  const [getWordCategory , setGetWordCategory] = useState("");
  const [SerchWord , setSerchWord] = useState("");
  const [SelectCategory , setSelectCategory] = useState("");
  const [searchText , setSearchText ]  = useState("")




  const updateHandleClose = () => {setupdateModelshow(false)}
  const updateHandleShow = () => {setupdateModelshow(true)}
    

  const islogin = JSON.parse(localStorage.getItem("admin"))

  useEffect(() => {
    console.log(islogin)
      if(!islogin){
        window.location.replace('/login');
      }
  },[islogin]);


  useEffect(() => {
    retrieveWords();
    ReadData();
  }, []);

  useEffect(() => {
        if(SerchWord){
          setSearchText(SerchWord)
          handleSearchArea();
        }
        if(SelectCategory){
          setSearchText(SelectCategory)
          handleSearchArea();
        }
        if(SerchWord === "" && SelectCategory === "" ){
          retrieveWords();
        }
  }, [SerchWord , SelectCategory]);


  let userData ="";
  const [userObj , setUserObj] = useState("");

  const ReadData = () => {
    userData = localStorage.getItem("admin");
    setUserObj(JSON.parse(userData))
    console.log(userObj.fName +" "+ userObj.lName)
 }

  const retrieveWords = () =>{
    fetch(BackendURL + "/adminmanage/wordfilter").then(res=>res.json())
        .then(response=>{
          console.log(response);
          setWord(response);
      })
      .catch((err)=>{
          console.log("Err Axios - ",err)
      })


    }

  const getWord = (id) =>{
      fetch(BackendURL + "/adminmanage/word/" + id).then(res=>res.json())
          .then(response=>{
            console.log(response);
            setGetWordForum(response.word);
            setGetWordCategory(response.wcategory);
            setWordDetails(response);
            updateHandleShow();
        })
        .catch((err)=>{
            console.log("Err - ",err)
        })
  }


    const onDelete = (id) =>{

      const isMatch = userObj.email !== "test@ddrs.com";

      if(isMatch){
          fetch(BackendURL + '/adminmanage/wordfilter/delete/' + id, {
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
              retrieveWords();
            }


          })
          .catch((err)=>{
            console.log(err)
          })
      }
      else{
        alert("You are in an experience mood. You don't have permission to do this action.");
      }
    }

    const WordUpdate = (id) =>{

      if(!getWordForum || !getWordCategory ){
        
        document.getElementById("WordUpdate-alert").style.display = "flex";
        document.getElementById("WordUpdate-alert").innerHTML = "Please fill all the field!";
        return
      }
      updateHandleClose();
      
              fetch( BackendURL + "/adminmanage/wordfilter/update/"+id,{
                  method:"PUT",
                  headers:{
                      "Content-Type":"application/json",
                  },
                  body:JSON.stringify({

                    word:getWordForum, 
                    wcategory:getWordCategory

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
                    toast.success("Word Updated",{
                      hideProgressBar: true,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "colored",
                    });
                    retrieveWords();
                  }
                  
              }).catch((err)=>{
                console.log("Error - ", err)
              })
    }

    /*--------------------------------- Search FU Start -------------------------------*/
          
       const   handleSearchArea = () =>{
                  
              fetch(BackendURL + "/adminmanage/wordfilter").then(res=>res.json())
                    .then(result =>{
                      if(result){
                        if(SerchWord){
                        setSelectCategory("")
                        filterData(result,SerchWord.toLowerCase());
                        }
                        else if(SelectCategory){
                          filterData(result,SelectCategory.toLowerCase());
                        }
                      }

                    });
        }

        const filterData = (words,searchKey) => {

          const result = words.filter((words) =>
                words.word.toLowerCase().includes(searchKey)||
                words.wcategory.toLowerCase().includes(searchKey)
            );
             setWord(result)
      
        }


      /*--------------------------------- Search FU End -------------------------------*/


    


  return (
    <div>
    <ToastContainer/>
    <SideMenu/>

    {/* Model Import */}
    { createModelshow && <CreateModel closeCreateModel={setcreateModelshow} retrieveWordsReloard={retrieveWords()}/> }



    {/* *************************** Update Popup Start********************************************* */}

    <div>
  
        <Modal show={updateModelshow} onHide={updateHandleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Word - {wordsDetails._id}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div>
                <div className="form-group m-1 mt-3 mb-3">
                    <label htmlFor="formGroupExampleInput">Word</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="formGroupExampleInput" 
                      value={getWordForum}
                      onChange={(e) => setGetWordForum(e.target.value)}
                       />
                </div>
                <div className="form-group m-1 mt-3 mb-3">
                    <label htmlFor="formGroupExampleInput2">Word Category</label>
                    <select class="form-control" id="exampleFormControlSelect1"  value={getWordCategory} onChange={(e) => setGetWordCategory(e.target.value)}>
                            <option value={getWordCategory}  selected  hidden>{getWordCategory}</option>
                            <option value="Self-Destructive">Self-Destructive</option>
                            <option value="Sexuality">Sexuality</option>
                            <option value="Obscene">Obscene</option>
                            <option value="Other">Other</option>
                    </select>
                </div>
            </div>
            <div class="text-danger mb-1" id="WordUpdate-alert " role="alert"></div>


          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={updateHandleClose}>
              Close
            </Button>
            
            <Button variant="primary" onClick={() => WordUpdate(wordsDetails._id)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    {/* *************************** Update Popup End ********************************************* */}


  



    <div className='main-body-container'> {/* CSS Coming from Dashboard CSS File */}

          <div className='topic-management-sub-body-container'>

               <h1 className='text-uppercase'>Word Filter Management</h1>
               <div className='Home-sub-body-hr-line'/> {/* CSS Coming from Dashboard CSS File */}

          </div>

          <div className='word-manage-top-items'>
             <input 
              className='topic-manage-search' 
              type="text" 
              placeholder="Search..." 
              value={SerchWord}
              onChange={(e) => setSerchWord(e.target.value)}
              />

              <select  
                value={SelectCategory}
                onChange={(e) => setSelectCategory(e.target.value)} >
                    <option value="" selected  >All Category</option>
                    <option value="Self-Destructive">Self-Destructive</option>
                    <option value="Sexuality">Sexuality</option>
                    <option value="Obscene">Obscene</option>
                    <option value="Other">Other</option>
              </select>

              
                <button className='word-btn'  onClick={() => setcreateModelshow(true)}>
                       <i class="fa-solid fa-plus"></i> &nbsp; Add Word
                </button>

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
                
                 { words.map((getword ,index)=> (
                      <tr key={index} >
                        <td className='topic-mange-td' scope="row">{index+1}</td>
                        <td className='topic-mange-topic-td'><div  className='nav-link text-capitalize' >{getword.word}</div></td>
                        <td className='topic-mange-td'>{getword.wcategory}</td>
                        <td className='topic-mange-td '>
                          <a className=" btn btn-danger action-edit-btn" id="deletetBtn" onClick={() =>onDelete(getword._id)}>
                              <i className="fas fa-trash-alt"></i>&nbsp;Delete   
                          </a>
                          <a className=" btn btn-warning action-edit-btn" id="editBtn" onClick={() => getWord(getword._id)}>
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
