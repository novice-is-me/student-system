import React, { useEffect } from 'react'
import { useState } from 'react'
import {fetchData} from './Services.js'
import { Link} from 'react-router-dom'
import Modal from './Modal.jsx'
import axios from 'axios'
import SearchBar from './SearchBar.jsx'

const TableComponent = () => {
    const [data, setData] = useState([]) 
    const [view, setView] = useState(false)
    const [isActive, setIsActive] = useState(false);
    const [searchData, setSearchData] = useState('');

    useEffect(() =>{
        const getData = async () =>{
            const post = await fetchData();
            setData(post);
        }
        getData();
    }, [])

    const handleView = () =>{ 
        setView(!view);
    }

    const handleDelete = (id) =>{
        axios.delete('http://localhost:3000/users/' + id)
        .then(res => {
            window.location.reload();
        }) 
        .catch(err=>console.log)
    }
    
    const value = (e) =>{
        e.target.value;
    }
     
  return (
    <div>
        <div className='w-25 mb-3'>
        <span><SearchBar isActive={isActive} setIsActive={setIsActive} 
        searchData={searchData} setSearchData={setSearchData}/></span>  
        </div>
        {!isActive && <div>
            <table className='table'>
            <thead>
                <tr className='text-center'>
                    <th scope='col'>ID</th>
                    <th scope='col'>NAME</th>
                    <th scope='col'>COURSE</th>
                    <th scope='col'>OPTIONS</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index)=>{
                    return (
                        <tr key={item.id} className='text-center'>
                            <th>{item.id}</th> 
                            <th>{item.name}</th>
                            <th>{item.course}</th>
                            <th><Link to={`/view/${item.id}`} className='btn btn-primary'>View</Link>
                            <button className='btn btn-danger ms-3' onClick={() => handleDelete(item.id)}>Delete</button></th>
                        </tr>
                    ) 
                })}
            </tbody>
        </table>
            <button className='btn btn-info btn-modal'
            onClick={handleView}>&#x2b; Add Student</button>
         {view && <Modal setView={setView}/>}
       </div>}

       {/* if input is active */}
        {isActive && 
        <div>
            <table className='table'>
                <thead>
                    <tr className='text-center'>
                        <th scope='col'>ID</th>
                        <th scope='col'>NAME</th>
                        <th scope='col'>COURSE</th>
                        <th scope='col'>OPTIONS</th>
                    </tr>
                </thead>
                <tbody>
                {data.filter((item) => item.name.toLowerCase().includes(searchData.toLowerCase()))
                .map((filtered, index) =>{
                    return (
                        <tr key={filtered.id} className='text-center'>
                            <th>{filtered.id}</th> 
                            <th>{filtered.name}</th>
                            <th>{filtered.course}</th>
                            <th><Link to={`/view/${filtered.id}`} className='btn btn-primary'>View</Link>
                            <button className='btn btn-danger ms-3' onClick={() => handleDelete(filtered.id)}>Delete</button></th>
                        </tr>
                    )
                })}
                </tbody>
            </table> 
            <button className='btn btn-info btn-modal'
            onClick={handleView}>&#x2b; Add Student</button>
         {view && <Modal setView={setView}/>}
        </div>}
    </div>
  )
}

export default TableComponent
