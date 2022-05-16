import React from 'react'

export default function test() {

    const TopicCreate = () =>{

    
        fetch("/adminmanage/wordfilter/create",{
          method:"post",
          headers:{
              "Content-Type":"application/json",
          },
          body:JSON.stringify({
  
            word:"nnn", 
            wcategory:"nnn"
  
          })
      }).then(res=>res.json())
      .then(data => {
  
          if(data.error){ 
                alert("Error" + data.error)
          }
          else{
            alert("Error" + data.message)
            setTimeout(function(){
              window.location.replace('/');
            },1000);
          }
            
  
        console.log("data create -", data)
      }).catch((err)=>{
        console.log("Error - ", err)
      })
    }


  return (
    <div>

        <button 
        type='submit'
        onClick={() => TopicCreate() }
        className='btn primary'>Send</button>

    </div>
  )
}
