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

  const handleClick = () => {
    setIsDark(!isDark);
  };

  return (
    <div>
      <div className="w-full min-h-[100vh] bg-white">
        <div className="mt-24 mb-16">
          <Slider />
          <TrendingBlogs />
          <AllBlog />
        </div>

      </div>

    </div>
  );
}
