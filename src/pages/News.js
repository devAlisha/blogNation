import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import NewsItem from "../components/NewsItem";
import { NewsContext } from "../context/NewsContext";

function News() {
  const { news, loadingNews } = useContext(NewsContext);
  console.log(news);
  return (
    <div>
      {loadingNews ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div className="bg-gray-900 py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Explore our Captivating News
                </h2>
                <p className="mt-2 text-lg leading-8 text-gray-300">
                  Welcome to our blog page, where knowledge meets inspiration.
                </p>
              </div>
              <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-700 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {news.map((news) => {
                  return <NewsItem news={news} />;
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default News;
