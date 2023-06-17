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
          <div className="flex justify-between">
            <h1 className="text-3xl font-medium mb-6">
              Blogs ({blogsData.length})
            </h1>

            <div className="flex h-7 gap-x-5 items-start">
              <span>Filters</span>
              <button
                onClick={() => {
                  setBlogsData(blogs);
                  setSelectedTag("All");
                }}
                className={`font-light text-sm px-10 border-2 border-zinc-900 rounded rounded-lg ${
                  selectedTag === "All" ? "bg-zinc-900 text-white" : ""
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
                className={`font-light text-sm px-10 border-2 border-zinc-900 rounded rounded-lg ${
                  selectedTag === "AI" ? "bg-zinc-900 text-white" : ""
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
                className={`font-light text-sm px-10 border-2 border-zinc-900 rounded rounded-lg ${
                  selectedTag === "Testing" ? "bg-zinc-900 text-white" : ""
                }`}
              >
                Testing
              </button>
            </div>
          </div>
          {blogsData.map((blog) => {
            return (
              <div className="py-5">
                <BlogItem blog={blog} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Blogs;
