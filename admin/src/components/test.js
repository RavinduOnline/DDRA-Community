import React,{useState, useEffect} from 'react'
import Model from "./Pages/WorldFilter/model"
import { Button , Modal } from 'react-bootstrap';


export default function Test() {

    const [openUpdateModel, setopenUpdateModel] = useState(false);


  return (
    <div>
<h1>hello</h1>
<Button variant="primary" onClick={() => {setopenUpdateModel(true)}}>
          Launch demo modal
 </Button>

{ openUpdateModel && <Model closeModel={setopenUpdateModel} />}

    </div>
  )
}
