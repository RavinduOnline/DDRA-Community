import React , { useState, useEffect } from "react";
import '../replycard/replycard.css'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Profilereply() {
    const [ReplyObj , setReplyObj] = useState([])
    const [SearchWord , setSearchWord] = useState("");


    useEffect(() => {
      getreply();
    }, []);


    const getreply = () =>{

        const userDetails = JSON.parse(localStorage.getItem("user"))
        console.log(userDetails._id)

        fetch("/reply/user/"+userDetails._id).then(res=>res.json())
          .then(response=>{
            console.log(response);
            setReplyObj(response);
        })
        .catch((err)=>{
            console.log("Error - ",err)
        })
    }



const ReplyDelete = (id) =>{
  fetch('/reply/delete/' + id, {
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
      getreply();
    }

  })
  .catch((err)=>{
    console.log(err)
   })
}

       /*--------------------------------- Search FU Start -------------------------------*/

       useEffect(() => {
        if(SearchWord){
          handleSearchArea();
        }
        if(SearchWord === ""){
            getreply();
        }
  }, [SearchWord]);
          
 const   handleSearchArea = () =>{

    const userDetails = JSON.parse(localStorage.getItem("user"))
    console.log(userDetails._id)
                  
        fetch("/reply/user/"+userDetails._id).then(res=>res.json())
              .then(result =>{
                if(result){
                  filterData(result,SearchWord.toLowerCase());
                }

              });
  }

  const filterData = (ReplyObj,searchKey) => {

    const result = ReplyObj.filter((ReplyObj) =>
          ReplyObj.reply.toLowerCase().includes(searchKey)      
        );
        setReplyObj(result)

  }


/*--------------------------------- Search FU End -------------------------------*/


  return (
    <div>
      <ToastContainer/>
          <div className="reply-get-report">
              <button>Get Report</button>
          </div>

         <input 
            id="profile-searchNav" 
            type="search" 
            placeholder="Search" 
            aria-label="Search" 
            value={SearchWord}
            onChange={(e) => setSearchWord(e.target.value)}
            /> 

        { ReplyObj.map(getReplies=> (

        <div className='replycard-mainbox'>

            <div className='replycard-container'>
                <a href={'/view-forum/'+ getReplies.forum_id._id}><p><b>{getReplies.forum_id.Title}</b></p></a>
                <p>Reply :-</p>
                <div dangerouslySetInnerHTML={{__html: getReplies.reply}}></div>
                <a onClick={() => ReplyDelete(getReplies._id)}><i class="fa-solid fa-trash-can"></i></a>
                <a href={"/replyupdate/"+getReplies._id}><i class="fa-solid fa-pen-to-square"></i></a>


            </div>
            <hr/>

        </div>
   
        ))}
        
      
    </div>
  )
}
