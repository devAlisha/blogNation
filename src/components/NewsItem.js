import { Link } from "react-router-dom";

export default function NewsItem({ news }) {
  return (
    <>
      {news.urlToImage && (
        <article className="flex max-w-xl flex-col items-start justify-between pb-5 border-b border-gray-700">
          <div className="flex items-center gap-x-4 text-xs text-gray-400">
            <time dateTime={news.publishedAt}>{news.publishedAt}</time>
            <div className="relative z-0 rounded-full bg-gray-700 px-3 py-1.5 font-medium text-white hover:bg-gray-600">
              {news?.source?.name}
            </div>
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-gray-300">
              <span className="absolute inset-0" />
              {news?.title}
            </h3>

            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-400">
              {news?.description}
            </p>
          </div>
          <div className="relative mt-8 flex items-center gap-x-4">
            <img
              src={news.urlToImage}
              alt=""
              className="h-[200px] w-auto  rounded-lg"
            />
          </div>
        </article>
      )}
    </>
  );
}
