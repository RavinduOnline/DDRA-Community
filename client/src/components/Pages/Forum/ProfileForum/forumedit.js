import React from 'react'
import Header from '../../../Header/header'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export default function forumedit() {
  return (
      <div>
          <Header/>
          <div className='newtopic-forum'>
            <div className='newtopic-forum-container'>
                <div className='newtopic-head-title'>
                  <h1>Update Topic</h1>
                </div>
                <hr/>
                
                <div className='newtopic-question-container'>
                  <div className='newtopic-question'>
  
                    <div className='newtopic-question-option'> 
                      <div className='newtopic-title'>
                        <div className='newtopic-title-title'>
                          <input 
                              // value = {Title} 
                              // onChange ={(e) =>setTitle(e.target.value)} 
                              type="text" 
                              placeholder='Question Title'/>
                        
                          <select >
                              <option selected="selected">Select forum category</option>
                              <option value="General" >General</option>
                              <option value="JavaScript" >JavaScript</option>
                              <option value="HTML/CSS" >HTML/CSS</option>
                              <option value="Backend" >Backend</option>
                              <option value="Frontend" >Frontend</option>
                              <option value="Other" >Other</option>
                          </select>
                          
                        </div>
                      </div>
                    </div>
  
                    <div className='newtopic-question-option'> 
                      <div className='newtopic-title'>
                        <input 
  
                            type="text" 
                            placeholder='Mini Description' 
                            maxLength="100"
                            // value={MiniDescription}
                            // onChange={(e) => setMiniDescription(e.target.value)}
                            />
                      </div>
                    </div>
  
                    <div className='newtopic-question-option'> 
                      <div className='newtopic-title'>
                      <div class="mb-3">
                          <input className="form-control" type="file" id="formFile"
                          // onChange={(event) => {
                          //           setImageUpload(event.target.files[0]);
                          //         }}
                          />
                      </div>
                      </div>
                    </div>
  
                    <div className='newtopic-question-option'> 
                      <div className='newtopic-title'>
                        <small>Include all information someone would need to answer your question</small>
                            <div className='react-quill-box'>
                              <ReactQuill 
                                  theme="snow"
                                  // value={userInfo.description}
                                  // onChange={ondescription}
                                  // modules={Editor.modules}
                                  className="newtopic-react-quill" 
                                  placeholder={"Include all information someone would need to answer your question..."}
                                  />
                            </div>
                        </div>
                        
                    </div>
  
  
                  </div>
                </div>
                <div className='newtopic-button'>
  
                  <button
                      type='submit'
                      // onClick={() => TopicCreateData() }
                      className='newtopic-button-create'>Update
                  </button>
  
                  <a href ="/"><button className='newtopic-button-close'>Close</button></a>
                </div>
  
            </div>
  
          </div>
  
          <div>
  
              
  
          </div>
          <footer>
              <p  className='footer-copyright'>COPYRIGHTS <a href="#">TEAM X</a></p>
          </footer>
      </div>
    )
  }

