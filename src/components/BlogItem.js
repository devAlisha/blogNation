import { Link } from "react-router-dom";

export default function BlogItem({ blog }) {
  console.log(blog);
  return (
    <Link to={`/blogs/${blog.id}`}>
      <div className="flex gap-x-7 cursor-pointer hover:bg-blue-50 p-[10px] m-[-10px] rounded rounded-lg">
        <div className="">
          <img
            src={blog?.img}
            alt={blog?.title}
            className="min-w-[50px] max-w-[50px] rounded rounded-full h-auto"
          />
        </div>
        <div>
          <div className="flex flex-col gap-y-1">
            <h1 className="text-md font-medium">{blog?.title}</h1>
            <div className="flex justify-between">
              <div className="text-xs font-light text-gray-500">
                By: {blog.author}
              </div>
              <div className="text-xs font-light text-gray-500">
                {blog.date}
              </div>
            </div>
            <p className="text-sm font-light text-gray-700">{blog?.content}</p>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {blog?.tags.map((tag) => (
              <span className="text-xs text-blue-500 cursor-pointer">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
