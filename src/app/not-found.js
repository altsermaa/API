"use client";

import Link from 'next/link';
import React from 'react'

const NotFound= ()=> {
  return (
    <div className='flex lg:flex-row flex-col my-24 mx-auto w-fit'>
      <div className='lg:pr-14 lg:border-r-2 lg:border-b-0 pb-14 border-b-2 border-gray-200 flex lg:items-center justify-center'>
        <h1 className='text-6xl font-bold'>404</h1>
      </div>
      <div className='my-4 ml-14'>
        <h1 className='mt-2 font-bold'>Page Not Found</h1>
        <p className='my-5'>We are sorry, This page is unknown or does <br></br>not exist the page you are looking for.</p>
        <Link href={`/`}>
          <button className='bg-[#4b6afc] px-4 py-2.5 text-white rounded-md'>Back to Home</button>
        </Link>

      </div>
      
    </div>
  )
}

export default NotFound;
