import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Edit = ({setView}) => {
  const {id} = useParams();

  const [addData, setAddData] = useState({
    name: '',
    course: '',
    year: '',
    section: ''
  })

  const navigate = useNavigate();

  useEffect(() =>{
    axios.get('http://localhost:3000/users/' + id)
    .then(res=> {
      const currentData = res.data;
      setAddData({
        name: currentData.name,
        course: currentData.course,
        year: currentData.year,
        section: currentData.section 
      })   
    })
    .catch(err=>console.log(err)) 
  }, [])

  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.put('http://localhost:3000/users/' + id, addData)
    .then(res => navigate('/'))
    .catch(err => console.log(err)) 
  }

  const handleClick = () =>{
    setView(false);  
  }

  return (
    <div className='modal-container'>
      <h2 style={{fontSize: "3rem"}}>Add Student</h2>
      <form className='add-form' onSubmit={handleSubmit}> 
        <div>
            <label className='form-label'>Name:</label>
            <input type="text"
            name='name'
            className='form-control' 
            value={addData.name}
            onChange={(e) => setAddData({...addData, name: e.target.value})}/> 
        </div>
        <div> 
            <label className='form-label'>Course:</label>
            <input type="text" 
            className='form-control'
            name='course'
            value={addData.course}
            onChange={(e) => setAddData({...addData, course: e.target.value})}/>
        </div>
        <div>
            <label className='form-label'>Year</label>
            <input type="text"
            name='year'
            className='form-control' 
            value={addData.year}
            onChange={(e) => setAddData({...addData, year: e.target.value})}/>
        </div>
        <div>
            <label className='form-label'>Section:</label>
            <input type="text" 
            name='section'  
            className='form-control'
            value={addData.section} 
            onChange={(e) => setAddData({...addData, section: e.target.value})}/>
        </div>
        <button type='submit' className='btn btn-primary mt-3'>Submit</button> 
        <button className='btn btn-danger mt-3 ms-3' onClick={handleClick}>Back</button>
      </form> 
    </div> 
  )
}

export default Edit
