import React from 'react'
import { icons } from 'react-icons/lib'
import {CgProfile} from 'react-icons/cg'
import {GrLogout} from 'react-icons/gr'
const Navbar = () => {
  return (
    <div className='bg-blue-900 h-14 pl-[1100px] text-white'>
      <div className='text-xl pl-2 '>
        <button className='pl-4 hover:underline'><a href='/home'>Home</a></button>
        <button className='pl-4 hover:underline'><a href='/application'>Application</a></button>
        <button className='pl-4 hover:underline'><a href='/resume'>Resume</a></button>
        <button className='pl-4 hover:underline'><a LOR ='/lor'></a></button>
        <button className='pl-4 pt-2 pr-[10px] hover:underline'><CgProfile size={30}/></button>
        <button className='pl-2  hover:underline bg-white'><GrLogout /></button>
      </div>
      
        
    </div>
  )
}

export default Navbar
