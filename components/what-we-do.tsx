import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

export default function WhatWeDo() {
  return (
    <>
    <div className='bg-[#FCEDC6]'>
        <div className='flex justify-between items-center h-screen container gap-10'>
                <div className='w-[40%] space-y-5'>
                <h2 className='font-bold'>What we do</h2>
                <h1 className='font-semibold text-5xl'>Some services we provide for student</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                <Button className='p-5 bg-[#F2C94C]' >Learn more </Button>
                </div> 
            
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
                <Image src="/img/austin-kehmeier-lyiKExA4zQA-unsplash.jpg" alt="logo" width={500} height={500} />
                </div>
        </div>
    </div>
    </>
  )
}
