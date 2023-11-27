'use client'
import Image from 'next/image'
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';
import { Button } from './ui/button'


const catelogs = [
  {
    id: 1,
    image: '/img/lucas-favre-MNXaW_ABlZY-unsplash.jpg',
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
     <div className='flex justify-between items-center h-screen container gap-10'>
        <div className='w-[40%] space-y-5'>
        <h2 className='font-bold'>Know About us</h2>
        <h1 className='font-semibold text-5xl'>We provide a place for student with special needs</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
        <Button className='p-5 bg-[#F2C94C]' >Learn more </Button>
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
                className="bg-cover bg-center h-[100vh] md:h-[80vh] flex items-center justify-start "
              >
              </div>
              </SwiperSlide>
              
          ))}
         </Swiper>
        </div>
     </div>
     <div className='p-10'>
      <div>
       <h1 className='font-bold border-spacing-1'>OUR SUPPORTERS</h1>
      </div>
     <div className='border-2 border-gray-700'></div>

     <div className='flex item-center justify-between gap-10 my-5'>
     <Image src="/img/Logo.png" alt="logo" width={150} height={150} />
     <Image src="/img/Logo-2.png" alt="logo" width={150} height={150} />
     <Image src="/img/Logo-3.png" alt="logo" width={150} height={150} />
     <Image src="/img/Logo-4.png" alt="logo" width={150} height={150} />
     <Image src="/img/Logo-5.png" alt="logo" width={150} height={150} />
     <Image src="/img/Logo-6.png" alt="logo" width={150} height={150} />
     </div>
     </div>
    </>
  )
}
