"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import AllBlog from "@/components/AllBlog";
import Slider from "../components/Slider"
import { TrendingBlogs } from "../components/Trending"
import Footer from "@/components/Footer";

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  // const [data, setData] = useState([]);

  const handleClick = () => {
    setIsDark(!isDark);
  };

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const res = await fetch(`http://localhost:3001/`)

  //       const response = await res.json();
  //       console.log(response);
  //       setData(response)

  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   getData();
  // }, []);

  return (
    <div>
      <div className="w-full min-h-[100vh] bg-white">
        <div className="mt-24 mb-16">
          <Slider />
          <TrendingBlogs />
          <AllBlog />
        </div>
        {/* <div className="w-full h-[500px] bg-red-500">
          {data?.map((item, i) => (
            <div key={i}>
              <h1>{item.title}</h1>
            </div>
          ))}
        </div> */}

      </div>

    </div>
  );
}
