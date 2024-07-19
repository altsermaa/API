"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function ContactPage() {

  return (
    <div>

        <div className='mt-24 mx-auto lg:w-[895px] px-20'>
            <div className='pt-3.5 pb-4 px-auto'>
              <h1 className='text-4xl text-[#181A2A] mb-4'>Contact Us</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
            <div className='flex gap-12 pb-10'>
                <div className='flex-1 border border-[#f6f6f6] p-4'>
                  <h1 className='font-bold'>Address</h1>
                  <p>1328 Oak Ridge Drive, Saint Louis, Missouri</p>
                </div>
                <div className='flex-1 border border-[#f6f6f6] p-4'>
                  <h1 className='font-bold'>Contact</h1>
                  <p>313-332-8662 <br></br>info@email.com</p>
                </div>

            </div>
            <div className='bg-[#f6f6f6] pt-7 pl-9 pr-32 pb-7 mx-auto mb-16'>
              <b>Leave a Message</b>
              <div className='flex gap-7 my-5'>
                <input type='text' placeholder='Your name' className="p-2 border border-gray-300 rounded-md"></input>
                <input type='text' placeholder='Your email' className="p-2 border border-gray-300 rounded-md"></input>
              </div>
              <div className='flex flex-col my-5 gap-5'>
                <input type='text' placeholder='Subject' className="p-2 border border-gray-300 rounded-md"></input>
                <input type='text' placeholder='Write a message' className="pb-24 pt-2 pl-2 border border-gray-300 rounded-md"></input>
              </div>
              <button className='bg-[#4c6bff] w-fit py-2.5 px-4 text-white rounded-md'>Send Message</button>
            </div>
        </div>

        
    </div>
  )
}

export default ContactPage;