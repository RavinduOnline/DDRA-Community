import React , { useState, useEffect } from "react";
import { Button , Modal } from 'react-bootstrap';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export default function Createmodel  ({ closeCreateModel , retrieveWordsReloard  } ) {

    const [newWord , setnewWord] = useState("");
    const [newWordCategory , setNewWordCategory] = useState("");

    const createHandleClose = () => {closeCreateModel(false)}
    const createHandleShow = () => {closeCreateModel(true)}


    const WordCreate = () =>{

        if(!newWord || !newWordCategory  ){
          
          document.getElementById("WordCreate-alert").style.display = "flex";
          document.getElementById("WordCreate-alert").innerHTML = "Please fill all the field!";
          return
        }
        createHandleClose();
        
                fetch("/adminmanage/wordfilter/create",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json",
                    },
                    body:JSON.stringify({
  
                      word:newWord, 
                      wcategory:newWordCategory
  
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
                      toast.success("Word Created",{
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                      });
                      retrieveWordsReloard(true)
                    }
                      
                }).catch((err)=>{
                  console.log("Error - ", err)
                })
                setnewWord("")
                setNewWordCategory("")
      }

  return (
    <div>
             {/* *************************** Create Popup Start********************************************* */}
   <div>
        <Modal show={closeCreateModel} onHide={() => createHandleClose()}>
          <Modal.Header closeButton>
            <Modal.Title>Create Word</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div>
                <div className="form-group m-1 mt-3 mb-3">
                    <label htmlFor="formGroupExampleInput">Word</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="formGroupExampleInput" 
                      value={newWord}
                      onChange={(e) => setnewWord(e.target.value)}
                      />
                </div>
                <div className="form-group m-1 mt-3 mb-3">
                    <label htmlFor="formGroupExampleInput2">Word Category</label>
                    <select class="form-control" id="exampleFormControlSelect1"  value={newWordCategory} onChange={(e) => setNewWordCategory(e.target.value)}>
                            <option value=""  selected  hidden> Select Category</option>
                            <option value="Self-Destructive">Self-Destructive</option>
                            <option value="Sexuality">Sexuality</option>
                            <option value="Obscene">Obscene</option>
                            <option value="Other">Other</option>
                    </select>
                </div>
            </div>
            <div class="text-danger mb-1" id="WordCreate-alert" role="alert"></div>


          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={() =>  closeCreateModel(false)}>
              Close
            </Button>
            
            <Button variant="primary" onClick={() => WordCreate()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
    </div>


  {/* *************************** Create Popup End ********************************************* */}


    </div>
  )
}
