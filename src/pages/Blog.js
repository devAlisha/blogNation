import { useContext } from "react";
import { useParams } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";

export default function Blog() {
  const { id } = useParams();
  const { blogs } = useContext(BlogContext);
  const blog = blogs.find((blog) => blog.id === id);
  return (
    <div className="bg-gray-800">
      <div className="py-12">
        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-700 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl flex justify-between item-center">
              <span>{blog?.title}</span>
              <span className="text-xs text-gray-100">{blog?.category}</span>
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <div className="flex gap-5 mb-6">
              <img
                src={blog?.img}
                alt={blog?.title}
                className="object-center object-cover rounded rounded-full w-20 h-20 bg-gray-700"
              />
              <div>
                <p className="text-3xl tracking-tight text-white mb-2">
                  {blog?.author}
                </p>
                <p className="text-sm tracking-tight text-white">
                  {blog?.date}
                </p>
              </div>
            </div>
            <div>
              <div className="flex flex-wrap gap-2">
                {blog?.tags.map((tag) => (
                  <span className="text-xs text-gray-400 cursor-pointer">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-700 lg:pb-16 lg:pr-8 lg:pt-6">
            <div>
              <div className="space-y-6">
                <p className="text-base text-gray-400">{blog?.content}</p>

                <p className="text-base text-gray-400">{blog?.content}</p>
                <p className="text-base text-gray-400">{blog?.content}</p>
                <p className="text-base text-gray-400">{blog?.content}</p>
                <p className="text-base text-gray-400">{blog?.content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
