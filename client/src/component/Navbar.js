import React from 'react'

const Navbar = () => {
  return (
    <div className='h-12 bg-blue-900 font-bold text-xl py-2 pl-[1250px]'>
        <div className='flex gap-4 '>
            <button className='hover:underline'>Contact Us</button>
            <p>|</p>
            <button className='hover:underline'>Login</button>
        </div>
    </div>
  )
}

export default Navbar
