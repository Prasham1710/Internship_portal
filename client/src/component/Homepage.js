import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import { Swiper, SwiperSlide } from "swiper/react";
import imageo from '../assets/image1.png'
import imagec from '../assets/image2.png'
import imaget from '../assets/image3.png'
import wfh from '../assets/wfh.jpeg'
import Pune from '../assets/Pune.jpeg'
import Delhi from '../assets/Delhi.jpeg'
import Kolkata from '../assets/Kolkata.jpeg'
import Hyderabad from '../assets/Hyderabad.jpeg'
import Mumbai from '../assets/mumbai.jpeg'
import Banglore from '../assets/Banglore.jpeg'
import Chennai from '../assets/chennai.jpeg'
import {data} from '../data/data.js'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay,  Navigation } from "swiper";

const Homepage = () => {
  const [foods,setFoods]=useState(data)
  
  // console.log(length)

  

  const filterCategory = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //   Filter by type
const filterType = (type) => {
setFoods(
  data.filter((item) => {
    return item.type === type;
  })
);
};

  return (
    <div className='bg-blue-300 h-full'> 
    <div className='pt-[30px] pl-[50px]  '>
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[800px]'>
    <AiOutlineSearch size={25} />
    <input
      className='bg-transparent p-2 w-full focus:outline-none'
      type='text'
      placeholder='Search jobs'
    /></div>
    </div>
    <div className='pt-4'>
    <Swiper
                spaceBetween={10}
                centeredSlides={false}
                autoplay={{
                    delay: 1900,
                    disableOnInteraction: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper">
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-96"
                        src={imageo}
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-96"
                        src={imagec}
                        alt="image slide 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-96"
                        src={imaget}
                        alt="image slide 3"
                    />
                </SwiperSlide>
             </Swiper>
    </div>
    <div className=''>
      <div className='text-4xl pt-4 pl-[650px] font-bold'>Top Locations</div>
      <div className=''>
               <div className='rounded-xl relative grid md:grid-cols-7 pr-2'>
                     <div><img className='h-[260px] w-[200px] pt-6 shadow-lg hover:scale-105 duration-300 pl-2' src={wfh} alt='/' /></div>
                     <div><img className='h-[260px] w-[200px] pt-6 shadow-lg hover:scale-105 duration-300' src={Banglore} alt='/' /></div>
                     <div><img className='h-[260px] w-[200px] pt-6 shadow-lg hover:scale-105 duration-300' src={Delhi} alt='/' /></div>
                     <div><img className='h-[260px] w-[200px] pt-6 shadow-lg hover:scale-105 duration-300' src={Hyderabad} alt='/' /></div>
                     <div><img className='h-[260px] w-[200px] pt-6 shadow-lg hover:scale-105 duration-300' src={Mumbai} alt='/' /></div>
                     <div><img className='h-[260px] w-[200px] pt-6 shadow-lg hover:scale-105 duration-300' src={Chennai} alt='/' /></div>
                     <div><img className='h-[260px] w-[200px] pt-6 shadow-lg hover:scale-105 duration-300' src={Kolkata} alt='/' /></div>
    </div>
            </div>
     </div>

<div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-black font-bold text-4xl text-center'>Jobs</h1>

        {/*Filter Row*/}
        <div>
            {/*Filter Type*/}
            <div>
                 <p className='font-bold text-gray-700'>Filter Type</p>
                 <div>
                     <button onClick={()=> setFoods(data)} className='m-1 border-orange-900 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                     <button onClick={() => filterType('Internship')}  className='m-1 border-orange-900 text-orange-600 hover:bg-orange-600 hover:text-white'>Internship</button>
                     <button  onClick={() => filterType('Placement')}  className='m-1 border-orange-900 text-orange-600 hover:bg-orange-600 hover:text-white'>Placement</button>
                     
                 </div>
            </div>

            {/*Filter Price*/}
            <div>
                 <p className='font-bold text-gray-700'>Filter Category</p>
                 <div className='flex justify-between max-w-[390px] w-full'>
                 <button onClick={() => filterCategory('Humanities')}    className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Humanities</button>
                     <button onClick={() => filterCategory('Coding')}  className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Coding</button>
                     <button onClick={() => filterCategory('Science')}  className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Science</button>
                     <button onClick={() => filterCategory('Media')}  className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '>Media</button>
                     <button onClick={() => filterCategory('Designer')}  className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '>Designer</button>
                     <button onClick={() => filterCategory('MBA')}  className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '>MBA</button>
                 </div>
            </div>
        </div>

        {/*display foods */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 '>
            {foods.map((item, index)=>(
               <div key={index} className='border shadow-lg hover:scale-105 duration-300 rounded-lg'>
                   <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg'/>
                   <div className='flex justify-between px-2 py-4 font-bold text-gray-500'>
                       <p>{item.name}</p>
                       <p><span className='bg-orange-500 text-white p-1 rounded-full'>{item.type}</span ></p>
                   </div>
               </div>
            ))}

        </div>
    </div>
    </div>
  )
}

export default Homepage