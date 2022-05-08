import React from 'react'
import './topictable.css'

export default function topictable() {
  return (
    <div className='Home-TopicTable-main-box'>

      <div className='Top5-table-title-box'>
        <h2>Top 5 Topics</h2>
        <hr/>
      </div>

        <div className='top5-Table-box'>
              <table className="Top-table-dashboard">
                  <thead>
                    <tr>
                      <th className='top5-Rank-th' scope="col">Rank</th>
                      <th className='top5-Topic-th' scope="col">Topic</th>
                      <th className='top5-Reply-th' scope="col">Replies</th>
                    </tr>
                  </thead>
                  <tbody>
                      <tr>
                        <td className='Top-table-dashboard-td' scope="row">1</td>
                        <td className='top5-Reply-td'><a href='#er'>Test 1</a></td>
                        <td className='Top-table-dashboard-td'>50</td>
                      </tr>
                      <tr>
                        <td className='Top-table-dashboard-td' scope="row">2</td>
                        <td className='top5-Reply-td'><a href='#er'>Test 2</a></td>
                        <td className='Top-table-dashboard-td'>30</td>
                      </tr>
                  </tbody>
                </table>
        </div>

    </div>
  )
}
