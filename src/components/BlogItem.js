import { Link } from "react-router-dom";

export default function BlogItem({ blog }) {
  return (
    <article className="flex max-w-xl flex-col items-start justify-between pb-5 border-b border-gray-700">
      <div className="flex items-center gap-x-4 text-xs text-gray-400">
        <time dateTime={blog.date}>{blog.date}</time>
        <div className="relative z-auto rounded-full bg-gray-700 px-3 py-1.5 font-medium text-white hover:bg-gray-600">
          {blog.category}
        </div>
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-gray-300">
          <Link to={blog.id}>
            <span className="absolute inset-0" />
            {blog.title}
          </Link>
        </h3>

        <div className="mt-3 flex flex-wrap gap-2">
          {blog?.tags.map((tag) => (
            <span className="text-xs text-blue-500 cursor-pointer">#{tag}</span>
          ))}
        </div>

        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-400">
          {blog.content}
        </p>
      </div>
      <div className="relative mt-8 flex items-center gap-x-4">
        <img
          src={blog.img}
          alt=""
          className="h-10 w-10 rounded-full bg-gray-700"
        />
        <div className="text-sm leading-6">
          <p className="font-semibold text-white">
              <span className="absolute inset-0" />
              {blog.author}
          </p>
        </div>
      </div>
    </article>
  );
}
