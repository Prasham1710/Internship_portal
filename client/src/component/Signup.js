import React from 'react'
import EmailInput from "../lib/EmailInput";
const Signup = () => {
  return (
    <div className='relative w-full h-screen  bg-blue-300 '><div className='hidden sm:block'></div>
        
    

     <div className='flex justify-center items-center h-full'>
     <form className='max-w-[500px]  w-full mx-auto border rounded-xl bg-white p-4'><h2 className='text-4xl font-bold text-center py-5 pl-4 text-violet-600'>Sign Up</h2>
     <div className=' relative font-bold pr-1'><h2 >Create your own account</h2></div>
     
     <div className='  p-4  '>
            <input className=' w-80 border relative rounded  pt-1 pb-1 pr-1 pl-1 bg-gray-100' type="text" placeholder=' Name' />
            </div> 
             
            <div className=' flex flex-col p-4  '>
            <input className=' w-80 border relative  rounded p-1 bg-gray-100' type="email" placeholder='username@gmail.com' /><div><button><p className=' text-blue-600 underline decoration-solid relative pt-2' >use my current mail id </p></button></div>
            </div>
            <div className=' flex gap-8'>
            <input className=' w-80 border relative  rounded p-1  bg-gray-100' type="text" placeholder='Password'/>
             <input className=' w-80 border relative  rounded p-1 bg-gray-100' type="text" placeholder='Confirm password '/></div> 
               
            <div className='relative flex flex-col '><div><button  className=' w-15 text-blue-600 underline decoration-solid py-2' >sign in instead </button></div>
            <div className='flex gap-4'>
               <input className=' w-40 border relative  rounded p-1 bg-gray-100' type="text" placeholder='Institution Name'/>
                <input className=' w-20 border relative  rounded p-1 bg-gray-100' type="number" placeholder='Start Year'/>
                 <input className=' w-20 border relative  rounded p-1 bg-gray-100' type="number" placeholder='End Year'/>
            </div>
            <div>
               <input className=' w-80 border relative  rounded-xl p-1 bg-gray-100' type="text" placeholder='Skills'/>
            </div>
            <button className = 'relative border w-[30%] rounded-xl my-9 py-1  bg-blue-700 hover:bg-indigo-500 text-white'> Next </button></div> 
            
            </form>  </div>
    </div> 
  )
}

export default Signup