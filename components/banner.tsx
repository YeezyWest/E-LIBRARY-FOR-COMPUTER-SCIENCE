'use client'
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import {Autoplay, EffectCards } from 'swiper/modules'
import { Button } from './ui/button'

const catelogs = [
  {
    id: 1,
    image: '/img/sincerely-media-CXYPfveiuis-unsplash.jpg',
  },
  {
    id: 2,
    image: '/img/fantasy-1077863_1280.jpg',
  },
  {
    id: 3,
    image: '/img/greg-rakozy-vw3Ahg4x1tY-unsplash.jpg',
   
  },

];


export default function Banner() {
  return (
    <>
     <div className='h-screen md:flex justify-center items-center space-x-20 bg-gradient-to-l from-green-300 to-[#00453E]'>
      <div className='space-y-10  justify-center px-4 pt-10 text-white'>
        <h3 className='capitalize italic'>books</h3>
        <h1 className='font-bold md:w-[55%] text-4xl'>2-Weeks Plan to jump-start Your Reading</h1>
        <p>Check out the new book by Dr. Martin to find out how to stay healthy and support your body.</p>
         <Button className='bg-[#F1592B] hover:bg-orange-5200'>Meet Our Bestsellers → </Button>
      </div>
      <div className='swiper-card '>
          <Swiper
        effect={'cards'}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectCards]}
        className="mySwiper"
      >
        {catelogs.map((item, index) => (
             <SwiperSlide key={index}>
              <div
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
                className="bg-cover bg-center h-[100vh] md:h-[60vh] w-full hidden md:flex items-center justify-start "
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
