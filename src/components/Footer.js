import React from 'react'
import { FaFacebook } from "react-icons/fa";
import LogoJava from '../../public/LogoJava';

function Footer() {
  return (
    <div className='w-full bg-[#f6f6f6] lg:pt-16 lg:pb-6 px-4 pt-16'>
        <div className='lg:w-[1100px] m-auto bg-[#f6f6f6]'>
            <div className='flex lg:flex-row flex-col gap-5 text-[#7d7c7f] mb-6'>
                <div className='flex-1 flex flex-col'>
                    <b>About</b>
                    <span className='mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</span>
                    <p>Email : info@jstemplate.net</p>
                    <p>Phone : 880 123 456 789</p>
                </div>
                <div className='flex-1 flex lg:flex-col flex-row gap-2 lg:text-center '>
                    <p>Home</p> 
                    <p>About</p>
                    <p>Contact</p>
                </div>
                <div className='flex-1 flex gap-6'>
                    <FaFacebook />
                    <FaFacebook />
                    <FaFacebook />
                    <FaFacebook />
                </div>

            </div>
            <div className='flex lg:flex-row flex-col gap-16  text-[#7d7c7f] lg:items-center lg:justify-between py-5 border-t-2 border-t-gray-200'>
                <LogoJava />
                <div className='flex lg:flex-row flex-col lg:gap-8 gap-4 lg:justify-items-end '>
                    <p>Terms of Use</p>
                    <p>Privacy Policy</p>
                    <p>Cookie Policy</p>
                </div>
            </div>
        
        </div>
    </div>
  )
}

export default Footer;