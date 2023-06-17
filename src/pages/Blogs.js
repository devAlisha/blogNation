import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import BlogItem from "../components/BlogItem";
import { BlogContext } from "../context/BlogContext";

function Blogs() {
  const { blogs, loadingBlogs } = useContext(BlogContext);
  const [blogsData, setBlogsData] = useState([]);
  const [selectedTag, setSelectedTag] = useState("All");

  useEffect(() => {
    setBlogsData(blogs);
  }, [blogs]);

  return (
    <div>
      {loadingBlogs ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div className="bg-gray-900 py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Explore our Captivating Blogs
                </h2>
                <p className="mt-2 text-lg leading-8 text-gray-300">
                  Welcome to our blog page, where knowledge meets inspiration.
                </p>
                <div className="flex h-7 gap-x-5 items-start mt-2">
                  <span className="text-gray-300">Filters</span>
                  <button
                    onClick={() => {
                      setBlogsData(blogs);
                      setSelectedTag("All");
                    }}
                    className={`font-light text-sm px-10 border-2 border-gray-700 rounded rounded-lg ${
                      selectedTag === "All"
                        ? "bg-gray-700 text-white"
                        : "text-gray-300"
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => {
                      setBlogsData(
                        blogs.filter((blog) => blog.tags.includes("AI"))
                      );
                      setSelectedTag("AI");
                    }}
                    className={`font-light text-sm px-10 border-2 border-gray-700 rounded rounded-lg ${
                      selectedTag === "AI"
                        ? "bg-gray-700 text-white"
                        : "text-gray-300"
                    }`}
                  >
                    AI
                  </button>
                  <button
                    onClick={() => {
                      setBlogsData(
                        blogs.filter((blog) => blog.tags.includes("Testing"))
                      );
                      setSelectedTag("Testing");
                    }}
                    className={`font-light text-sm px-10 border-2 border-gray-700 rounded rounded-lg ${
                      selectedTag === "Testing"
                        ? "bg-gray-700 text-white"
                        : "text-gray-300"
                    }`}
                  >
                    Testing
                  </button>
                </div>
              </div>
              <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-700 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {blogsData.map((blog) => {
                  return <BlogItem blog={blog} />;
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Blogs;
