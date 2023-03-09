import React from 'react'

const Start = () => {
  return (
      
      
          <div className=' h-[656px] '>
              <div className='text-4xl  h-14 pt-2   pl-2 bg-gradient-to-r from-white to-orange-300'>Internship Portal</div>
          <div className='grid md:grid-cols-2 '>
              {/*Card*/}
              <div className='relative w-[700px] h-[552px] bg-white'>
                  {/*overlay*/}
                   <div className='absolute w-full h-full pl-[250px] pt-[100px]'>
                  <img className='w-[200px] pl-[70px] h-[200px] pt-4 relative' src='https://thumbs.dreamstime.com/b/student-icon-vector-graduation-mortar-board-school-college-university-glyph-pictogram-male-person-profile-avatar-108392101.jpg'/>
      
                      <p className='text-6xl pt-[14px] pl-2 '>Applicant </p>
                      <p className='flex flex-col pr-[190px] pt-4'>
                      <button className='pt-2 pb-2 bg-blue-300 rounded-2xl'><a href ='/login'>
                          Login</a></button>
                      <p className='pt-4 pl-4'>Don't have account? <button className='hover:underline pl-4'><a href='/signup'>Sign Up</a></button></p>
                      
                      
                      </p>
                  </div>
                  
                  </div>
              {/*Card*/}
              
              <div className='relative w-[900px] h-[600px] bg-blue-300 '>
                  {/*overlay*/}
                  
                      
                  
                  <div className='absolute w-full h-full pl-[250px] pt-[100px]'>
                  <img className='w-[200px] pl-[70px] h-[200px] pt-4 relative' src='https://thumbs.dreamstime.com/b/icon-agency-company-agency-178958770.jpg'/>
      
                      <p className=' text-6xl pt-[14px] pl-8 '>Recruiter </p>
                      <p className='flex flex-col pr-[380px] pt-4'>
                      <button className='pt-2 pb-2 bg-white rounded-2xl'><a href ='/login'>Login</a></button>
                      <p className='pt-4 pl-4'>Don't have account? <button className='hover:underline pl-4'>Sign Up</button></p>
                      </p>
                  </div>
                  
                  </div>
          </div>
          </div>
          
  )
}


export default Start
