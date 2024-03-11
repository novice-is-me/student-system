import React from 'react'
import './images';
import {admin} from './images'
import './style.css'
 
const Dashboard = () => {
  return (
    <div className='dashboard text-center text-white'>
      <div className='admin mb-4'>
        <img src={admin} alt="" className='admin-img img-fluid' /> 
        <h2>ADMIN</h2> 
      </div>  
      <div className='options'>
        <ul className='list-group'> 
            <li>Home</li> 
            <li>Database</li>
            <li >Options</li>
        </ul>
      </div>
    </div>
  )
}

export default Dashboard
