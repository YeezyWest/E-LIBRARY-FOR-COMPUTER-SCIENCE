import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

export default function BestSelling() {
 const handleButton = ()=> {
    alert("Please Login to the Dashboard");
  }
  return (
    <>
    <div className='bg-gradient-to-l from-pink-200 to-pink-400'>
        <div className='flex justify-around items-center container p-12 gap-20'>
                <div className=' space-y-5 text-white'>
                <h2 className='font-bold'>20% off on selected books</h2>
                <h1 className='text-4xl font-bold'>Bestselling <span className='font-normal' > Books! </span> </h1>
                <Button  >Shop Now → </Button>
                </div> 
                <div className="rounded overflow-hidden shadow-lg">
                <Image className='rounded-md' src="/img/greg-rakozy-vw3Ahg4x1tY-unsplash.jpg" alt="logo" width={500} height={500} />
                </div>
        </div>
    </div>
    </>
  )
}
