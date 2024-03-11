import React from 'react'
import Dashboard from './Dashboard'
import './style.css'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import Edit from './Edit'

const View = () => {
  const [data, setData] = useState([]) 
  const [view, setView] = useState(false)
  const {id} = useParams();  

   useEffect(()=>{
    axios.get('http://localhost:3000/users/' + id)
    .then(res => setData(res.data))
    .catch(err => console.log(err))
   }) 

  return (
    <div className='view-container d-flex'>
      <div className='dashboard-container'>
        <Dashboard/>
      </div>
      <div className='view-info w-100 text-white'>
        <div className='view-data'>
          <div className='view-info-container'>
            <h1>STUDENT INFORMATION</h1>
            <div className='student mb-5'>
              <img src="" alt="" />
              <h1>{data.name}</h1>
            </div>
            <div className='student-info'>
              <h3>Student: {data.name}</h3>
              <p>Course: {data.course}</p>
              <p>Section: {data.section}</p>
              <p>Year: {data.year}</p>
            </div>
            <Link to={'/'} className='btn btn-primary' >Back</Link>
            <button onClick={()=> setView(!view)} className='btn btn-dark ms-3'>Edit</button>
          </div>
        </div> 
      </div>  
      {view && <Edit setView={setView} data={data}/>}
    </div>
  )
}

export default View
