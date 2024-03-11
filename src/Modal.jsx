import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Modal = ({setView}) => {

  const [addData, setAddData] = useState({
    name: '',
    course: '',
    year: '',
    section: ''
  })
    
  const handleClick = () =>{
    setView(false);
  }

  const navigate = useNavigate();

  const handleSubmit = () =>{ 
    axios.post('http://localhost:3000/users', addData)
    .then(res => {
      console.log(res.data); 
      navigate('/') 
    })
    .catch(err => console.log(err))
    console.log(addData);
  }
  
  return (
    <div className='modal-container'>
      <h2 style={{fontSize: "3rem"}}>Add Student</h2>
      <form className='add-form' onSubmit={handleSubmit}> 
        <div>
            <label className='form-label'>Name:</label>
            <input type="text"
            className='form-control' 
            onChange={(e) => setAddData({...addData, name: e.target.value})}/> 
        </div>
        <div>
            <label className='form-label'>Course:</label>
            <input type="text" 
            className='form-control'
            onChange={(e) => setAddData({...addData, course: e.target.value})}/>
        </div>
        <div>
            <label className='form-label'>Year</label>
            <input type="text"
            className='form-control' 
            onChange={(e) => setAddData({...addData, year: e.target.value})}/>
        </div>
        <div>
            <label className='form-label'>Section:</label>
            <input type="text" 
            className='form-control'
            onChange={(e) => setAddData({...addData, section: e.target.value})}/>
        </div>
        <button type='submit' className='btn btn-primary mt-3'>Submit</button>
        <button className='btn btn-danger mt-3 ms-3' onClick={handleClick}>Back</button>
      </form> 
    </div>
  )
}

export default Modal
