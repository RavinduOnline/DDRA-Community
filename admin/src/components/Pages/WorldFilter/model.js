import React,{useState, useEffect} from 'react'
import { Button , Modal } from 'react-bootstrap';


export default function Model({closeModel}) {

  const [wordDetails , setwordDetails] = useState([]);


    const updateHandleClose = () => {closeModel(false)}
    const updateHandleShow = () => {closeModel(true)}
    


    
  
    return (
      <div>
        <Button variant="primary" onClick={updateHandleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={closeModel} onHide={updateHandleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Word</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div>
                <div className="form-group m-1 mt-3 mb-3">
                    <label htmlFor="formGroupExampleInput">Word</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input" />
                </div>
                <div className="form-group m-1 mt-3 mb-3">
                    <label htmlFor="formGroupExampleInput2">Word Category</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                            <option value="" selected disabled hidden> Select Category</option>
                            <option value="Self-Destructive">Self-Destructive</option>
                            <option value="Sexuality">Sexuality</option>
                            <option value="Obscene">Obscene</option>
                            <option value="Other">Other</option>
                    </select>
                </div>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={ () => closeModel(false)}>
              Close
            </Button>
            
            <Button variant="primary" onClick={ () => closeModel(false)}>
              Save Changes
            </Button>

          </Modal.Footer>
        </Modal>
      </div>
  )
}
