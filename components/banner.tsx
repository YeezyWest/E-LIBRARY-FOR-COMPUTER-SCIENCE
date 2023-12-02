'use client'
import Image from 'next/image'
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules'
import { Button } from './ui/button'

const catelogs = [
  {
    id: 1,
    image: '/img/1 1-2.png',
  },
  {
    id: 2,
    image: '/img/1 1.png',
  },
  {
    id: 3,
    image: '/img/2.png',
   
  },

];


export default function Banner() {
  return (
    <>
     <div className='h-screen flex justify-center items-center space-x-20 bg-[#00453E]'>
      <div className='space-y-10 text-white'>
        <h3 className='capitalize italic'>Computer science book</h3>
        <h1 className='font-bold w-[55%] text-4xl'>2-Weeks Plan to jump-start Your Reading</h1>
        <p>Check out the new book by Dr. Martin to find out how to stay healthy and support your body.</p>
         <Button className='bg-[#F1592B]'>Meet Our Bestsellers → </Button>
      </div>
      <div className='swiper-card '>
          <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {catelogs.map((item, index) => (
             <SwiperSlide key={index}>
              <div
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
                className="bg-cover bg-center h-[100vh] md:h-[60vh] w-full flex items-center justify-start "
              >
              </div>
              </SwiperSlide>
              
          ))}
         </Swiper>
        </div>
      {/* <div>
      <Image src="/img/home-book-11.png" alt="logo" width={300} height={300} />
      </div> */}

     </div>
    </>
  )
}
