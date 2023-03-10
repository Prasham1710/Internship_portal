import React from 'react'
import Start from './component/Start';
import Navbar from "./component/Navbar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Signup from './component/Signup';
import Logout from './component/Logout.js';
const App = () => {
  return (
    <div>
      <Navbar/>
      <BrowserRouter><Routes>
      <Route path='/' element={<Start/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
      < Logout/>
      
    </div>
  )
}

export default App