'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import required modules
import {Autoplay, EffectFade } from 'swiper/modules';

import Link from "next/link";
import { Button } from "./ui/button";



const banners = [
  {
    id: 1,
    image: '/img/andre-hunter-AQ908FfdAMw-unsplash.jpg',
    header:
      'Inclusive care for children with special needs',
    body: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem sed aperiam necessitatibus veritatis ullam perspiciatis delectus alias, nam consectetur eos harum quasi sunt sint praesentium possimus? Magnam velit ullam commodi!`,
   
  },
  {
    id: 2,
    image: '/img/scott-webb-O0T1SIgHAfM-unsplash.jpg',
    header:
      'Inclusive care for children with special needs',
    body: `lorem`,
   
  },

];

export function Banner() {

  return (
    <>
      <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 300,
              disableOnInteraction: false,
            }}
            navigation={false}
            pagination={{
              type: "bullets",
              clickable: true,
            }}
            modules={[Autoplay, EffectFade]}
            effect="fade"
            className="mySwiper relative"
      >
          {banners.map((item, index) => (
             <SwiperSlide key={index}>
              <div
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
                className="bg-cover bg-center h-[100vh] md:h-[90vh] flex items-center justify-start "
              >
                 {/* <div className="absolute inset-0 bg-black opacity-40"></div> */}
                <div className="text-center max-w-7xl mx-auto px-[1rem] md:px-[5rem] text-white">
                  <h1 className="uppercase text-2xl md:text-4xl font-extrabold ">
                    {item.header}
                  </h1>
                  <p className="my-4 text-sm md:text-lg">
                    {item.body}
                  </p>
                  <Link className='cursor-pointer' href="/auth/login">
                    <Button className="">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
              </SwiperSlide>
              
          ))}
      </Swiper>
    </>
  );
}
