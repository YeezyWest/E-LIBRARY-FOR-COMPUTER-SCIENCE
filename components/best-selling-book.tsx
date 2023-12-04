import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

export default function BestSelling() {
  return (
    <>
    <div className='bg-pink-300'>
        <div className='flex justify-center items-center container p-12 gap-20'>
                <div className='w-[40%] space-y-5'>
                <h2 className='font-bold'>20% off on selected books</h2>
                <h1 className='text-4xl font-bold w-[55%]'>Bestselling <span className='font-normal' >Non-Fiction Books! </span> </h1>
                <Button>Shop Now → </Button>
                </div> 
                <div className="rounded overflow-hidden shadow-lg">
                <Image src="/img/sincerely-media-CXYPfveiuis-unsplash.jpg" alt="logo" width={200} height={200} />
                </div>
        </div>
    </div>
    </>
  )
}
