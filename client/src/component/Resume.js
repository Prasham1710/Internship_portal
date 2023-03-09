import React from 'react'
import {RxAvatar} from 'react-icons/rx'

const Resume = () => {
  return (
      <div className='bg-blue-100 h-full'>
         
    <div className='pt-4 text-3xl pl-[700px]'>Resume</div>
    <div className='solid border-black border-spacing-1'>
    <div className='pl-8 pt-6 text-3xl'>Personal Details</div>
    <div className='pl-[1200px] text-xl'><RxAvatar size={80} />Profile</div>
    <div className='flex gap-20'>
        <div className='pt-4 pl-10 text-xl flex flex-col'>First Name
    <input className=' w-80 border relative rounded  bg-gray-100' type="text" placeholder=' First Name' /></div>
    <div className='pt-4 pl-20 text-xl flex flex-col'>Last Name
    <input className=' w-80 border relative rounded bg-gray-100' type="text" placeholder=' Last Name' /></div>
    </div>
    <div className=' flex   gap-20'>
        <div className='pt-4 pl-10 text-xl flex flex-col'>E-mail
            <input className=' w-80 border relative  rounded p-1 bg-gray-100' type="email" placeholder='username@gmail.com' /></div>
            <div className='pt-4 pl-20 text-xl flex flex-col'>Phone Number
            <input className=' w-80 border relative  rounded p-1 bg-gray-100' type="tel" placeholder='Phone Number' /></div>
            </div>
            <div className='flex gap-20'>
        <div className='pt-4 pl-10 text-xl flex flex-col'>Country
    <input className=' w-80 border relative rounded  bg-gray-100' type="country" placeholder=' Country' /></div>
    <div className='pt-4 pl-20 text-xl flex flex-col'>City
    <input className=' w-80 border relative rounded bg-gray-100' type="text" placeholder='City' /></div>
    </div>
    <div className='flex gap-20'>
        <div className='pt-4 pl-10 text-xl flex flex-col'>Nationality
    <input className=' w-80 border relative rounded  bg-gray-100' type="text" placeholder=' Nationality' /></div>
    <div className='pt-4 pl-20 text-xl flex flex-col'>Date of Birth
    <input className=' w-80 border relative rounded bg-gray-100' type="date" placeholder='Date of Birth' /></div>
    </div>
    </div>
    <div className='pl-8 pt-6 text-3xl'>
        Education Details
    </div>
    <div className='pt-4 pl-10 text-xl'>#1</div>
    <div className='pt-4 pl-10 text-xl flex flex-col'>Education 
    <input className=' w-80 border relative rounded  bg-gray-100' type="text" placeholder=' Education' /></div>
    <div className='flex gap-20'>
        <div className='pt-4 pl-10 text-xl flex flex-col'>School
    <input className=' w-80 border relative rounded  bg-gray-100' type="text" placeholder=' School' /></div>
    <div className='pt-4 pl-20 text-xl flex flex-col'>City
    <input className=' w-80 border relative rounded bg-gray-100' type="text" placeholder='City' /></div>
    </div>
    <div className=' flex   gap-20'>
        <div className='pt-4 pl-10 text-xl flex flex-col'>Start Date
            <div className='flex gap-5'><input className=' w-[155px] border relative  rounded p-1 bg-gray-100' type="month" placeholder='Month' />
            <input className='w-[155px] border relative  rounded p-1 bg-gray-100' type="year" placeholder='Year' /></div></div>
            <div className='pt-4 pl-[70px] text-xl flex flex-col'>End Date
            <div className='flex gap-5'><input className=' w-[155px] border relative  rounded p-1 bg-gray-100' type="month" placeholder='Month' />
            <input className='w-[155px] border relative  rounded p-1 bg-gray-100' type="year" placeholder='Year' /></div></div>
            <div className='text-xl pt-4'><input type="checkbox"/>Present</div>
            </div>
            <div className='pt-4 pl-10 text-xl'>#2</div>
    <div className='pt-4 pl-10 text-xl flex flex-col'>Education 
    <input className=' w-80 border relative rounded  bg-gray-100' type="text" placeholder=' Education' /></div>
    <div className='flex gap-20'>
        <div className='pt-4 pl-10 text-xl flex flex-col'>School
    <input className=' w-80 border relative rounded  bg-gray-100' type="text" placeholder=' School' /></div>
    <div className='pt-4 pl-20 text-xl flex flex-col'>City
    <input className=' w-80 border relative rounded bg-gray-100' type="text" placeholder='City' /></div>
    </div>
    <div className=' flex   gap-20'>
        <div className='pt-4 pl-10 text-xl flex flex-col'>Start Date
            <div className='flex gap-5'><input className=' w-[155px] border relative  rounded p-1 bg-gray-100' type="month" placeholder='Month' />
            <input className='w-[155px] border relative  rounded p-1 bg-gray-100' type="year" placeholder='Year' /></div></div>
            <div className='pt-4 pl-[70px] text-xl flex flex-col'>End Date
            <div className='flex gap-5'><input className=' w-[155px] border relative  rounded p-1 bg-gray-100' type="month" placeholder='Month' />
            <input className='w-[155px] border relative  rounded p-1 bg-gray-100' type="year" placeholder='Year' /></div></div>
            <div className='text-xl pt-4'><input type="checkbox"/>Present</div>
            </div>
            <div className='pt-4 pl-10 text-xl flex flex-col'>Description
            <input className=' h-[200px] w-[600px] border relative rounded bg-gray-100' type="text" placeholder='' /></div>
            <div className='pl-[600px] pt-4'>
    <button className=' bg-blue-700 w-16 h-8 text-white rounded-xl'>Add</button></div>
            <div className='pl-8 pt-6 text-3xl'>
        Experience Details
    </div>
    <div className='pt-4 pl-10 text-xl'>#1</div>
            <div className='pt-4 pl-10 text-xl flex flex-col'>Position 
    <input className=' w-80 border relative rounded  bg-gray-100' type="text" placeholder=' Position' /></div>
    <div className='flex gap-20'>
        <div className='pt-4 pl-10 text-xl flex flex-col'>Employee
    <input className=' w-80 border relative rounded  bg-gray-100' type="text" placeholder=' Employee' /></div>
    <div className='pt-4 pl-20 text-xl flex flex-col'>City
    <input className=' w-80 border relative rounded bg-gray-100' type="text" placeholder='City' /></div>
    </div>
    <div className=' flex   gap-20'>
        <div className='pt-4 pl-10 text-xl flex flex-col'>Start Date
            <div className='flex gap-5'><input className=' w-[155px] border relative  rounded p-1 bg-gray-100' type="month" placeholder='Month' />
            <input className='w-[155px] border relative  rounded p-1 bg-gray-100' type="year" placeholder='Year' /></div></div>
            <div className='pt-4 pl-[70px] text-xl flex flex-col'>End Date
            <div className='flex gap-5'><input className=' w-[155px] border relative  rounded p-1 bg-gray-100' type="month" placeholder='Month' />
            <input className='w-[155px] border relative  rounded p-1 bg-gray-100' type="year" placeholder='Year' /></div></div>
            <div className='text-xl pt-4'><input type="checkbox"/>Present</div>
            </div>
            <div className='pt-4 pl-10 text-xl'>#2</div>
            <div className='pt-4 pl-10 text-xl flex flex-col'>Position 
    <input className=' w-80 border relative rounded  bg-gray-100' type="text" placeholder=' Position' /></div>
    <div className='flex gap-20'>
        <div className='pt-4 pl-10 text-xl flex flex-col'>Employee
    <input className=' w-80 border relative rounded  bg-gray-100' type="text" placeholder=' Employee' /></div>
    <div className='pt-4 pl-20 text-xl flex flex-col'>City
    <input className=' w-80 border relative rounded bg-gray-100' type="text" placeholder='City' /></div>
    </div>
    <div className=' flex   gap-20'>
        <div className='pt-4 pl-10 text-xl flex flex-col'>Start Date
            <div className='flex gap-5'><input className=' w-[155px] border relative  rounded p-1 bg-gray-100' type="month" placeholder='Month' />
            <input className='w-[155px] border relative  rounded p-1 bg-gray-100' type="year" placeholder='Year' /></div></div>
            <div className='pt-4 pl-[70px] text-xl flex flex-col'>End Date
            <div className='flex gap-5'><input className=' w-[155px] border relative  rounded p-1 bg-gray-100' type="month" placeholder='Month' />
            <input className='w-[155px] border relative  rounded p-1 bg-gray-100' type="year" placeholder='Year' /></div></div>
            <div className='text-xl pt-4'><input type="checkbox"/>Present</div>
            </div>
            <div className='pt-4 pl-10 text-xl flex flex-col'>Description
            <input className=' h-[200px] w-[600px] border relative rounded bg-gray-100' type="text" placeholder='' /></div>
            <div className='pl-[600px] pt-4'>
    <button className=' bg-blue-700 w-16 h-8 text-white rounded-xl'>Add</button></div>
            <div className='pl-8 pt-6 text-3xl'>
        Skills
    </div>
    <div className='pt-4 pl-10 text-xl flex flex-col'>Skill 1
    <input className=' w-80 border relative rounded  bg-gray-100' type="text" placeholder=' Skill' /></div>
    <div className='pt-4 pl-10 text-xl flex flex-col'>Skill 2
    <input className=' w-80 border relative rounded  bg-gray-100' type="text" placeholder=' Skill' /></div>
    <div className='pt-4 pl-10 text-xl flex flex-col'>Skill 3
    <input className=' w-80 border relative rounded  bg-gray-100' type="text" placeholder=' Skill' /></div>
    <div className='pt-4 pl-10 text-xl flex flex-col'>Skill 4
    <input className=' w-80 border relative rounded  bg-gray-100' type="text" placeholder=' Skill' /></div>
    <div className='pt-4 pl-10 text-xl flex flex-col'>Skill 5
    <input className=' w-80 border relative rounded  bg-gray-100' type="text" placeholder=' Skill' /></div>
    <div className='pt-4 pl-10 text-xl flex flex-col'>Skill 6
    <input className=' w-80 border relative rounded  bg-gray-100' type="text" placeholder=' Skill' /></div>
    <div className='pt-4 pl-10 text-xl flex flex-col'>Skill 7
    <input className=' w-80 border relative rounded  bg-gray-100' type="text" placeholder=' Skill' /></div>
    <div className='pl-80 pt-4'>
    <button className=' bg-blue-700 w-16 h-8 text-white rounded-xl'>Add</button></div>
    
    
    

    </div>
  )
}

export default Resume