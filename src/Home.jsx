import Dashboard from './Dashboard'
import './style.css';
import TableComponent from './TableComponent';

const Home = () => {

  return (
    <div className='main-container'>
        <div className='dashboard-container'>
            <Dashboard/> 
        </div>
        <div className='data-container text-white w-100'>
          <div className='data-title'>
            <h1 className='mb-5'>Welcome ADMIN !</h1>
            <div className='d-flex justify-content-between mb-3'>
              <h4>List of students in 2023-2024 SY</h4>  
            </div> 
          </div>
          <div className='data-info'> 
          <TableComponent/>
          </div>
       </div>
    </div>
  )
}

export default Home
