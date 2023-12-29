"use client"
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import AuthLoginForm from '@app/components/auth-login-form';

export default function LoginPage() {
  return (
    <>
          <section className="bg-white">
        <div className="flex min-h-screen justify-center">
          <div className="relative hidden bg-loginImage bg-cover bg-center lg:block lg:w-[65%] ">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="">
              <Link href="/">
                <Image className='h-screen w-full' src="/img/" alt="logo image" height={200} width={200} />
              </Link>
            </div>
            <div className="absolute bottom-20 left-0 right-0 m-auto sm:w-[30em]">
              <p className="sm:text-xm md:text-xm lg:text-md font-bold text-white">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quo amet harum sint, eaque, vero voluptas dicta soluta possimus minus sit laudantium, ea quibusdam optio pariatur vel voluptate rerum dignissimos?z
              </p>
            </div>
          </div>
          <div className="mx-auto flex w-full max-w-3xl items-center p-8 lg:w-3/5 lg:px-12">
            <div className="mx-auto w-full md:w-1/2">
              <Link href="/">
                <h1 className="flex items-center space-x-2 text-sm font-bold capitalize tracking-wider text-[#00453E]">
                  <BsArrowLeft className="h-5 w-5" />
                  <span>Back Home</span>
                </h1>
              </Link>

              <h1 className="my-10 text-3xl font-extrabold text-gray-900 md:text-4xl">
                Login to your <br /> Account
              </h1>
             
              <AuthLoginForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
