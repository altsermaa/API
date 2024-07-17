import React, { useEffect, useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import AllBlog from './AllBlog';

function Slider() {

  const [blogs, setBlogs] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    const lastIndex = blogs.length - 1;
    const shouldResetIndex = currentSlide === lastIndex;
    const index = shouldResetIndex ? 0 : currentSlide + 1;
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    const lastIndex = blogs.length - 1;
    const shouldResetIndex = currentSlide === 0;
    const index = shouldResetIndex ? lastIndex : currentSlide - 1;
    setCurrentSlide(index);
  };

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
    <div className='px-4 mt-6 m-auto flex flex-col max-w-[1100px]'>
      <div className='flex justify-center'>
        {blogs.map((arr, index) => {
          return (
            <div className={`flex flex-col ${index === currentSlide ? '' : 'hidden'}`}>
              <div className='relative flex '>
                <img src={arr.cover_image} style={{ height: '600px', width: 'auto', objectFit: 'cover', zIndex: '0', position: 'relative' }} />
                <div className='inset-x-2 bottom-1.5 absolute z-20 w-fit h-[341] bg-white bg-opacity-75 border rounded p-10 flex flex-col gap-4'>
                  <h4>{arr.tags}</h4>
                  <b>{arr.description}</b>
                  <p>{arr.published_at}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className='flex justify-center mt-3 gap-2.5'>
        <IoIosArrowBack
          onClick={prevSlide}
          style={{ padding: '8px', borderRadius: '8px', color: '#484848', fontSize: '48px', border: '1px solid ', borderColor: '#484848' }} />
        <IoIosArrowForward
          onClick={nextSlide}
          style={{ padding: '8px', borderRadius: '8px', color: '#484848', fontSize: '48px', border: '1px solid ', borderColor: '#484848' }} />
      </div>
    </div>
  )
}

export default Slider
