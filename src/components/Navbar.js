import React from 'react'
import { MdOutlineMenu } from "react-icons/md";
import { MdQuestionMark } from "react-icons/md";
import Link from 'next/link';
import { useState } from 'react';
import { Drawer } from './Drawer';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);

  };

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className='flex flex-row p-5 items-center lg:w-[1100px] m-auto'>
      <Link href={`/`}>
        <img src='/Logo.png' style={{width: '135px', marginRight: '118px'}} alt='Logo' />
      </Link>
      <div className='hidden lg:flex lg:w-full lg:justify-between lg:items-center'>
        <div className='flex w-[667px] justify-center gap-10'>
          <Link href={`/`}>
            <p>Home</p> 
          </Link>
          <Link href={`/blogsAll`}>
            <p>Blog</p>
          </Link>
          <Link href={`/contact`}>
            <p>Contact</p>
          </Link>
        </div>
        <div className='flex items-center bg-[#fcf9fa] p-2 rounded-md'>
          <input
              type="text"
              placeholder='Search'
              value={searchQuery}
              onChange={handleSearchChange}
              className='bg-transparent border-none outline-none px-2 w-48'
            />
          <MdQuestionMark className='ml-2 text-[#b4b3b6]' />
        </div>
      </div>
      <div onClick={handleDrawer} className='lg:hidden inline'>
        <MdOutlineMenu />
      </div>
      <Drawer isOpen={isDrawerOpen} closeDrawer={handleDrawer} />
    </div>
  )
}

export default Navbar