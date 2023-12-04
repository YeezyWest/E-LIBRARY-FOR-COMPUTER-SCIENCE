'use client'
import Image from 'next/image'
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';




const catelogs = [
  {
    id: 1,
    image: '/img/home-book-11.png',
  },
  {
    id: 2,
    image: '/img/josh-appel-NeTPASr-bmQ-unsplash.jpg',
  },
  {
    id: 3,
    image: '/img/katt-yukawa-K0E6E0a0R3A-unsplash.jpg',
   
  },

];

export default function AboutUs() {
  return (
    <>
     <div className='container gap-10 my-20'>
      <h1 className='text-3xl font-semibold text-center'>Shop by Category</h1>
     <div className='flex  items-center justify-center space-x-10 mt-5' >
      <div className='bg-[#F0EBD5] py-4 px-5 rounded-xl'><Image className='rounded-md' src="/img/1 1-2.png" alt="logo" width={150} height={150} /></div>
      <div className='bg-[#F0EBD5] py-4 px-5 rounded-xl'><Image className='rounded-md' src="/img/1 1.png" alt="logo" width={150} height={150} /></div>
      <div className='bg-[#F0EBD5] py-4 px-5 rounded-xl'><Image className='rounded-md' src="/img/1.png" alt="logo" width={150} height={150} /></div>
      <div className='bg-[#F0EBD5] py-4 px-5 rounded-xl'><Image className='rounded-md' src="/img/1 1-21.png" alt="logo" width={150} height={150} /></div>
      <div className='bg-[#F0EBD5] py-4 px-5 rounded-xl'><Image className='rounded-md' src="/img/1 1-31.png" alt="logo" width={150} height={150} /></div>
      <div className='bg-[#F0EBD5] py-4 px-5 rounded-xl'><Image className='rounded-md' src="/img/1 14.png" alt="logo" width={150} height={150} /></div>
    
        {/* <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
          {catelogs.map((image  , index) => (
            <SwiperSlide key={index}>
              
            <div
            style={{
              backgroundImage: `url(${item.image})`,
            }}
            className="bg-cover bg-center h-[100vh] md:h-[80vh] flex items-center justify-start "
            >
            </div>
            </SwiperSlide>
            
            ))}

            </Swiper> */}
          </div>
          </div>
    </>
  )
}
