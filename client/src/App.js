import React from 'react'
import Start from './component/Start';
import Navbar from "./component/Navbar";
<<<<<<< HEAD
import Signup from "./component/Signup";
=======
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/Login';
>>>>>>> b7230c9b5c7f2f759abb7c6e9f595fecc1ef377b
const App = () => {
  return (
    <div>
      <Navbar />
<<<<<<< HEAD
      <Signup />
=======
      <BrowserRouter><Routes>
      <Route path='/' element={<Start/>} />
      <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
      
>>>>>>> b7230c9b5c7f2f759abb7c6e9f595fecc1ef377b
    </div>
  )
}

export default App