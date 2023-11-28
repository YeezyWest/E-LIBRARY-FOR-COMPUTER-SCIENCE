import Image from 'next/image'
import React from 'react'

export default function WhatWeDo() {
  return (
    <>
    <div className='bg-[#FCEDC6]'>
        <div className='flex justify-between items-center h-screen  container gap-10'>
                <div className='w-[40%] space-y-5'>
                <h2 className='font-bold'>What we do</h2>
                <h1 className='font-semibold text-5xl'>Some services we provide for student</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                <ul className='list-disc px-5'>
                  <span>
                  <li className='font-bold text-2xl'>Family support</li>
                   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, autem!</p>
                  </span>
                  <span>
                  <li className='font-bold text-2xl'>Health benefits</li>
                   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, dolor!</p>
                  </span>
                  <span>
                  <li className='font-bold text-2xl'>
                  Scholarships
                  </li>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, et!</p>
                  </span>
                  <span>
                  <li className='font-bold text-2xl'>Therapy</li>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, harum.</p>
                  </span>
                </ul>
                </div> 
                <div className="rounded overflow-hidden shadow-lg">
                <Image src="/img/austin-kehmeier-lyiKExA4zQA-unsplash.jpg" alt="logo" width={500} height={500} />
                </div>
        </div>
    </div>
    </>
  )
}
