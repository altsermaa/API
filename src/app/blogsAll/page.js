"use client";

import Navbar from '@/components/Navbar';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Footer from '@/components/Footer';
import { BlogCard } from '@/components/BlogCard';
import Link from 'next/link';

function BlogsPage() {
    const { articles } = useParams();
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState([]);
    const [perPage, setPerPage] = useState(9);

    const handleLoadMore = () => {
        setPerPage(perPage + 3)
    }

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch(
                    `https://dev.to/api/articles?page=1&per_page=${perPage}`
                );

                const data = await res.json();

                setBlogs(data);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, [articles]);

    if (!blogs) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <Navbar />

            <div>
                <div className="flex flex-col gap-8 lg:w-[1100px] m-auto py-8">
                    <h1 className='font-bold text-2xl'>All Blog Post</h1>
                </div>
                <div className='w-full lg:w-[1100px] m-auto lg:grid lg:grid-cols-3 gap-[24px]'>
                    {blogs.map((blog, index) => (
                        <Link key={blog.id} href={`/blogs/${blog.id}`}>
                            <BlogCard
                                key={blog.title}
                                image={blog.cover_image}
                                title={blog.title}
                                date={blog.published_at}
                                tags={blog.tag_list}
                            />
                        </Link>
                    ))}
                </div>
                <button
                    className='mb-8 mt-24 mx-auto w-[200px] py-2 bg-white text-[#6b6977] rounded-md border border-[#6b6977]'
                    onClick={handleLoadMore}
                    style={{ display: 'block' }}
                >
                    {loading ? <p>Loading ...</p> : <p>Load more</p>}
                </button>

            </div>

            <Footer />

        </div>
    )
}

export default BlogsPage;
