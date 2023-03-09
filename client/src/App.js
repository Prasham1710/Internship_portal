import React from 'react'
import Start from './component/Start';
import Navbar from "./component/Navbar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Signup from './component/Signupa';
const App = () => {
  return (
    <div>
      
      <BrowserRouter><Routes>
      <Route path='/' element={<Start/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App