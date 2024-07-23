"use client";

import React from 'react'
import { MdOutlineMenu } from "react-icons/md";
import { MdQuestionMark } from "react-icons/md";
import Link from 'next/link';
import { useState } from 'react';
import { Drawer } from './Drawer';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeLink, setActiveLink] = useState('');
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);

  };

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className='flex flex-row p-5 items-center lg:w-[1100px] m-auto'>
      <Link href={`/`}>
        <img src='/Logo.png' style={{width: '135px', marginRight: '118px'}} alt='Logo' />
      </Link>
      <div className='hidden lg:flex lg:w-full lg:justify-between lg:items-center'>
        <div className='flex w-[667px] justify-center gap-10 text-[#393b47]'>
          <Link href={`/`}>
            <p style={{ color: activeLink === 'home' ? '#4B6BFB' : '' }} onClick={() => handleLinkClick('home')}>
              Home
              </p> 
          </Link>
          <Link href={`/blogsAll`}>
            <p style={{ color: activeLink === 'blog' ? '#4B6BFB' : '' }} onClick={() => handleLinkClick('blog')}>
              Blog
              </p>
          </Link>
          <Link href={`/contact`}>
            <p style={{ color: activeLink === 'contact' ? '#4B6BFB' : '' }} onClick={() => handleLinkClick('contact')}>
              Contact
              </p>
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