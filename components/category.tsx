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

export default function Category() {
  return (
    <>
     <div className='container gap-10 my-20'>
      <h1 className='text-3xl font-semibold text-center'>Shop by Category</h1>
     <div className='flex  items-center justify-center space-x-10 mt-5' >
      <div className='bg-[#F0EBD5] py-4 px-5 rounded-xl'><Image className='rounded-md' src="/img/ccc.png" alt="logo" width={150} height={150} /></div>
      <div className='bg-[#F0EBD5] py-4 px-5 rounded-xl'><Image className='rounded-md' src="/img/hhh.png" alt="logo" width={150} height={150} /></div>
      <div className='bg-[#F0EBD5] py-4 px-5 rounded-xl'><Image className='rounded-md' src="/img/bbb.png" alt="logo" width={150} height={150} /></div>
      <div className='bg-[#F0EBD5] py-4 px-5 rounded-xl'><Image className='rounded-md' src="/img/ddd.png" alt="logo" width={150} height={150} /></div>
      <div className='bg-[#F0EBD5] py-4 px-5 rounded-xl'><Image className='rounded-md' src="/img/ppp.png" alt="logo" width={150} height={150} /></div>
      <div className='bg-[#F0EBD5] py-4 px-5 rounded-xl'><Image className='rounded-md' src="/img/fff.png" alt="logo" width={150} height={150} /></div>
    
      
          </div>
          </div>
    </>
  )
}
