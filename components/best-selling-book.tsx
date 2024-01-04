import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

export default function BestSelling() {
  return (
    <>
    <div className='bg-gradient-to-l from-pink-200 to-pink-400'>
        <div className='flex justify-around items-center container p-12 gap-20'>
                <div className=' space-y-5 text-white'>
                <h2 className='font-bold'>20% off on selected books</h2>
                <h1 className='text-4xl font-bold'>Bestselling <span className='font-normal' >Non-Fiction Books! </span> </h1>
                <Button>Shop Now → </Button>
                </div> 
                <div className="rounded overflow-hidden shadow-lg">
                <Image className='rounded-md' src="/img/sincerely-media-CXYPfveiuis-unsplash.jpg" alt="logo" width={300} height={300} />
                </div>
        </div>
    </div>
    </>
  )
}
