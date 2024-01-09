"use client"
import { SignIn } from '@clerk/clerk-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'



export default function SignInPage() {
  return (
    <div className="flex min-h-screen justify-center">
              <div className="relative hidden bg-loginImage bg-cover bg-center lg:block lg:w-[65%] ">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="">
              <Link href="/">
                <Image className='h-screen w-full' src="/img/redd-f-9o8YdYGTT64-unsplash.jpg" alt="logo image" height={200} width={200} />
              </Link>
            </div>
            <div className="absolute bottom-20 left-0 right-0 m-auto sm:w-[30em]">
             
            </div>
          </div>
        
          <div className="mx-auto flex w-full max-w-3xl items-center p-8 lg:w-3/5 lg:px-12">
          <div className="mx-auto w-full md:w-1/2">
          <Link href="/">
                <h1 className="flex items-center space-x-2 justify-center mb-20 text-sm font-bold capitalize tracking-wider text-black">
                  <BsArrowLeft className="h-5 w-5" />
                  <span>Back Home</span>
                </h1>
              </Link>
           <SignIn   />
           </div>
        </div>
    </div>
  )
}