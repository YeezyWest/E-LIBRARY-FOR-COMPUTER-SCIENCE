import Image from 'next/image'
import React from 'react'

export default function Donations() {
  return (
    <>
    <div className='bg-black'>
        <div className='flex justify-between items-center p-10  container gap-10'>
                <div className='w-[60%] space-y-5'>
                <div>
            <h1 className='text-white font-bold text-5xl'>How we spend your donations and where it goes</h1>
            <p className='text-gray-500'>We understand that when you make a  donation, you want to know exactly where your money is going and we pledge to be transparent.</p>
            <div className='flex flex-wrap gap-3 text-white p-4'>
             <div className='flex items-center gap-4 '>
                <span className='h-5 w-5 bg-[#BEF3C0] rounded-md'></span>
                <h1>40% child care home</h1>
             </div>
             <div className='flex items-center gap-4 '>
                <span className='h-5 w-5 bg-[#AC94F1] rounded-md'></span>
                <h1>35% cleanliness program</h1>
             </div>
             <div className='flex items-center gap-4 '>
                <span className='h-5 w-5 bg-[#FFF0CA] rounded-md'></span>
                <h1>10% helping people</h1>
             </div>
             <div className='flex items-center gap-4 '>
                <span className='h-5 w-5 bg-[#F9CF64] rounded-md'></span>
                <h1>10% excursions</h1>
             </div>
             <div className='flex items-center gap-4 '>
                <span className='h-5 w-5 bg-[#F38FBF] rounded-md'></span>
                <h1>5% feeding the poor</h1>
             </div>
            
            </div>
         </div>
                </div> 
                <div className="rounded overflow-hidden shadow-lg">
                <Image className='rounded-3xl' src="/img/jess-bailey-l3N9Q27zULw-unsplash.jpg" alt="logo" width={500} height={500} />
                </div>
        </div>
    </div>
    </>
  )
}

