"use client";
import { IMAGES } from "@/assets";
import Button from "@/components/Buttons/Button";
import { useState } from "react";
import LatestBlogCard from "./LatestBlogCard";

const LatestBlogs = () => {
  const blogData = [
    {
      img: IMAGES.blog1,
      title: "Invisalign vs. Braces: Which is Right for You?",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis feugiat ",
      category : "Latest"
    },
    {
      img: IMAGES.blog1,
      title: "Invisalign vs. Braces: Which is Right for You?",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis feugiat ",
      category : "Latest"
    },
    {
      img: IMAGES.blog1,
      title: "Invisalign vs. Braces: Which is Right for You?",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis feugiat ",
      category : "Latest"
    },
    {
      img: IMAGES.blog2,
      title: "Invisalign vs. Braces: Which is Right for You?",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis feugiat ",
      category : "Hot"
    },
    {
      img: IMAGES.blog3,
      title: "Invisalign vs. Braces: Which is Right for You?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis feugiat ",
        category : "Trending"
    },
    {
      img: IMAGES.blog3,
      title: "Invisalign vs. Braces: Which is Right for You?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis feugiat ",
        category : "Trending"
    },
    {
      img: IMAGES.blog1,
      title: "Invisalign vs. Braces: Which is Right for You?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis feugiat ",
        category : "Popular"
    },
    {
      img: IMAGES.blog1,
      title: "Invisalign vs. Braces: Which is Right for You?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis feugiat ",
        category : "Popular"
    },
    {
      img: IMAGES.blog1,
      title: "Invisalign vs. Braces: Which is Right for You?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis feugiat ",
        category : "Popular"
    },
    {
      img: IMAGES.blog1,
      title: "Invisalign vs. Braces: Which is Right for You?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis feugiat ",
        category : "Popular"
    },
  ];

  const [activeTab, setActiveTab] = useState("Latest");
  const tabButtons = ["Latest", "Hot", "Trending", "Popular"];
  return (
    <div className="mt-[120px]">
      <h1 className="text-neutral-15 font-Amiri text-[48px] font-bold leading-[66px]">
        Discover Our Latest Dental Tips and Insights
      </h1>
      <p className="text-neutral-10 font-Poppins text-xl max-w-[935px] mt-8">
        Check out our most recent blog posts for up-to-date advice on oral
        health, treatment options, and dental care best practices. Stay ahead
        with tips to keep your smile healthy and vibrant.
      </p>

      <div className="flex items-center gap-5 mt-8">
        {tabButtons.map((btn, index) => (
          <Button
            onClick={() => setActiveTab(btn)}
            key={index}
            variant={btn === activeTab ? "Filled" : "Outlined"}
            classNames="px-8 py-[10px] font-normal"
          >
            {btn}
          </Button>
        ))}
      </div>

      <hr className="border border-neutral-15 mt-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {blogData.map((blog, index) => (
          blog.category === activeTab &&
          <LatestBlogCard key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
