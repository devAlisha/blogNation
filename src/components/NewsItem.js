import { Link } from "react-router-dom";

export default function NewsItem({ news }) {
  return (
    <>
      <article className="flex max-w-xl flex-col items-start justify-between pb-5 border-b border-gray-700">
        <div className="flex items-center gap-x-4 text-xs text-gray-400">
          <time dateTime={news.pubDate}>{news.pubDate}</time>
          <div className="relative z-0 rounded-full bg-gray-700 px-3 py-1.5 font-medium text-white hover:bg-gray-600">
            {news?.source_id}
          </div>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-gray-300">
            <span className="absolute inset-0 cursor-pointer" />
            {news?.title}
          </h3>

          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-400">
            {news?.description ? news?.description : news?.content}
          </p>
        </div>
      </article>
    </>
  );
}
