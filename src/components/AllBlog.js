import { useState, useEffect } from 'react';
import { BlogCard } from './BlogCard';
import Link from 'next/link';

const categories = [
    "All",
    "React",
    "JavaScript",
    "Python",
    "Web Development",
    "Node.js",
];

function AllBlog() {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState([]);
    const [category, setCategory] = useState("");
    const [perPage, setPerPage] = useState(9);

    const handleCategory = (category) => {
        setCategory(category);
        setPerPage(9);
    }

    const handleLoadMore = () => {
        setPerPage(perPage + 3)
    }

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);

                const res = await fetch(
                    `https://dev.to/api/articles?page=1&per_page=${perPage}${category !== "All" ? `&tag=${category}` : ""
                    }`
                );

                const data = await res.json();

                setBlogs(data);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, [category, perPage]);


    return (
        <div>
            <div className="flex flex-col gap-8 lg:w-[1100px] m-auto py-8">
                <h1 className='font-bold text-2xl'>All Blog Post</h1>

                <div className='flex gap-5'>
                    {categories.map((item) => (
                        <button
                            key={item}
                            className="px-2 py-1 bg-gray-200 rounded-md"
                            style={{
                                color: category === item ? "#4B6BFB" : "",
                            }}
                            onClick={() => handleCategory(item)}
                        >
                            {item}
                        </button>
                    ))
                    }
                </div>
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
                style={{ display: 'block'}}
            >
                {loading ? <p>Loading ...</p> : <p>Load more</p>}
            </button>
        </div>
    )
}
export default AllBlog;



