import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home'
import Edit from './Edit'
import View from './View'

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route> 
        <Route path='/add/:id' element={<Edit/>}></Route>
        <Route path='/view/:id' element={<View />}></Route>
      </Routes>   
    </BrowserRouter>
  )
}

export default App
