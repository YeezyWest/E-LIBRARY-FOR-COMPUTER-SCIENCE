'use client';

import React from 'react';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

import { cn } from '@app/lib/utils';
import useScroll from '@app/hooks/use-scroll';
import { UserButton, useUser } from '@clerk/nextjs';


export default function Header () {
  const {user, isLoaded} = useUser();
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();

  return (
    <div
      className={cn(
        `sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200`,
        {
          'border-b border-gray-200 bg-white/75 backdrop-blur-lg': scrolled,
          'border-b border-gray-200 bg-white': selectedLayout,
        },
      )}
    >
      <div className="flex h-[47px] items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="flex flex-row space-x-3 items-center justify-center md:hidden"
          >
            <UserButton afterSignOutUrl='/' />
           
          </Link>
        </div>

        <div className="hidden md:block">
          <div className=" flex items-center space-x-3 justify-center text-center">
                <div className="relative" x-data="{ isOpen: false }">
                  <div className="absolute right-0 p-1 bg-red-400 rounded-full animate-ping"></div>
                  <div className="absolute right-0 p-1 bg-red-400 border rounded-full"></div>
                
                    <svg
                      className="w-6 h-6 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                    </div>
                
          {isLoaded && user &&(
            <>
            <Link
              href='/'
              className='mr-4'
            >
             Home
            </Link>
           </>
        )}
        <UserButton afterSignOutUrl='/' />
          </div>
        </div>
      </div>
    </div>
  );
};