"use client";

import Navbar from '@/components/Navbar';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Footer from '@/components/Footer';
import { FaUserCircle } from "react-icons/fa";

function BlogPage() {
    const {id} = useParams();
    const [blog, setBlog] = useState();

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch(
                    `https://dev.to/api/articles/${id}`
                );

                const data = await res.json();

                setBlog(data);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, [id]);

    if (!blog) {
        return <p>Loading...</p>;
    }

  return (
    <div>
        <Navbar />

        <div className='mt-6 mx-4 mb-20'>
            <h1 className='text-4xl text-[#181A2A]'>{blog.title}</h1>
            <div className='flex text-[#97989F] mt-5 mb-8 items-center'>
                <FaUserCircle />
                <span className='ml-1 mr-6'>{blog.user.name}</span>
                <span>{blog.readable_publish_date}</span>
            </div>
            <img src={blog.cover_image} style={{height: '462', width: 'auto', objectFit: 'cover', borderRadius: '12px'}}/>
            <p className='my-8'>{blog.body_html}</p>
        </div>

        <Footer />
        
    </div>
  )
}

export default BlogPage;
