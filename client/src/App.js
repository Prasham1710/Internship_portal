import React from 'react'
import Start from './component/Start';
import Navbar from "./component/Navbar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/Login';
const App = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter><Routes>
      <Route path='/' element={<Start/>} />
      <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App