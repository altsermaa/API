import React from 'react'
import { MdOutlineMenu } from "react-icons/md";
import { MdQuestionMark } from "react-icons/md";

function Navbar() {
  return (
    <div className='flex flex-row justify-between p-5 items-center lg:w-[1100px] m-auto'>
      <img src='/Logo.png' style={{width: '135px', marginRight: '118px'}} alt='Logo' />
      <div className='lg:inline hidden lg:flex lg:flex-wrap lg:m-auto lg:gap-5 lg:justify-between lg:items-center'>
        <div className='flex gap-10'>
          <p>Home</p> 
          <p>About</p>
          <p>Contact</p>
        </div>
        <div className='bg-[#fcf9fa] flex p-4'>
          <span>Search</span>
          <MdQuestionMark />
        </div>
      </div>
      <div className='lg:hidden inline'>
        <MdOutlineMenu />
      </div>
        
    </div>
  )
}

export default Navbar