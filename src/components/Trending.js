import { useEffect, useState } from "react";

export const TrendingBlogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch(
                    `https://dev.to/api/articles?page=1&per_page=4`
                );

                const data = await res.json();

                setBlogs(data);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, [])

    return (
        <div className="flex flex-col px-4 w-full lg:max-w-[1100px] lg:m-auto">
            <h1 className="font-bold text-2xl mb-4">Trending</h1>
            <div className="flex lg:flex-1 gap-5 overflow-x-auto scrollbar-hide">
                {blogs.map((blog) => (
                    <TrendingCard
                        key={blog.id}
                        image={blog.cover_image}
                        title={blog.title}
                        tags={blog.tag_list}
                    />
                ))}
            </div>
        </div>
    );
};

const TrendingCard = ({ title, tags, image }) => {
    return <div className="relative bg-white rounded-md shadow-md w-[289px] h-[320px] flex-shrink-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4">
            <div className="text-white flex flex-wrap gap-2">
                {tags && tags.map((tag, index) => (
                   <span key={index} className="bg-[#4b69ff] text-xs rounded-full px-2 py-1 mr-2">{tag}</span>
                ))}
                <h2 className="text-lg font-bold">{title}</h2>
            </div>
        </div>
    </div>;
};