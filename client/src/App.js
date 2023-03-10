import React from 'react'
import Start from './component/Start';
import Navbar from "./component/Navbar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Signup from './component/Signupa';
import Home from './component/Homepage';
import Applications from './component/Applications';
import Resume from './component/Resume';
const App = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter><Routes>
      <Route path='/' element={<Start/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/resume' element={<Resume/>}/>
      <Route path='/application' element={<Applications/>}/>
      </Routes>
      </BrowserRouter>
      < Logout/>
      
    </div>
  )
}

export default App