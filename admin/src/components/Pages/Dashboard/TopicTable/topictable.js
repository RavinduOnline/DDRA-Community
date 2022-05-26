import React , { useState, useEffect } from "react";
import './topictable.css'

export default function Topictable() {

  const [topic , setTopic] = useState([]);

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

  return (
    <div className='Home-TopicTable-main-box'>

      <div className='Top5-table-title-box'>
        <h2>Latest Topics</h2>
        <hr/>
      </div>

        <div className='top5-Table-box'>
              <table className="Top-table-dashboard">
                  <thead>
                    <tr>
                      <th className='top5-Rank-th' scope="col">Rank</th>
                      <th className='top5-Topic-th' scope="col">Topic</th>
                      <th className='top5-Reply-th' scope="col">Category</th>
                    </tr>
                  </thead>
                  <tbody>
      { topic.slice(0, 5).map((getTopic ,index)=> (
                      <tr>
                        <td className='Top-table-dashboard-td' scope="row">{index+1}</td>
                        <td className='top5-Reply-td'><a href='#er'>{getTopic.Title}</a></td>
                        <td className='Top-table-dashboard-td'>{getTopic.FCategory}</td>
                      </tr>
      ))}
                  </tbody>
                </table>
        </div>

    </div>
  )
}
