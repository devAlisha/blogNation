import heroImg from "../assets/logo-no-background.png";
import blogSvg from "../assets/blog.svg";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div>
      <div className=" bg-slate-900 py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8  flex gap-x-2">
          <div className="flex items-center w-full lg:w-1/2">
            <div className="max-w-2xl mb-8">
              <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-900 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                Welcome to Our Blog Website
              </h1>
              <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
                Dive into our extensive range of blog articles covering various
                topics and interests. Discover new insights, tips, and valuable
                information from our expert authors.
              </p>

              <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                <Link
                  to="/blogs"
                  className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md "
                >
                  Start Exploring
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full lg:w-1/2">
            <div className="w-full">
              <img
                src={blogSvg}
                className={"object-contain w-full h-full"}
                alt="Hero Illustration"
                loading="eager"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className=" bg-slate-950 py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8  flex gap-x-2">
          <div className="flex items-center justify-center w-full lg:w-1/2">
            <div className="w-full">
              <img
                src={blogSvg}
                className={"object-contain w-full h-full"}
                alt="Hero Illustration"
                loading="eager"
                placeholder="blur"
              />
            </div>
          </div>
          <div className="flex items-center w-full lg:w-1/2">
            <div className="max-w-2xl mb-8">
              <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-900 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                News
              </h1>
              <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
                Stay up-to-date with the latest news and trends in the industry.
                Get timely updates on technological advancements, product
                launches, and market insights.
              </p>

              <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                <Link
                  to="/blogs"
                  className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md "
                >
                  Start Reading
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className=" bg-slate-900 py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8  flex gap-x-2">
          <div className="flex items-center w-full lg:w-1/2">
            <div className="max-w-2xl mb-8">
              <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-900 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                Upcoming Events
              </h1>
              <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
                Find out about upcoming events, conferences, workshops, and
                seminars. Join industry leaders and professionals to enhance
                your knowledge and network.
              </p>

              <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                <Link
                  to="/blogs"
                  className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md "
                >
                  See Events
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full lg:w-1/2">
            <div className="w-full">
              <img
                src={blogSvg}
                className={"object-contain w-full h-full"}
                alt="Hero Illustration"
                loading="eager"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className=" bg-slate-950 py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8  flex gap-x-2">
          <div className="flex items-center justify-center w-full lg:w-1/2">
            <div className="w-full">
              <img
                src={blogSvg}
                className={"object-contain w-full h-full"}
                alt="Hero Illustration"
                loading="eager"
                placeholder="blur"
              />
            </div>
          </div>
          <div className="flex items-center w-full lg:w-1/2">
            <div className="max-w-2xl mb-8">
              <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-900 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                Jobs
              </h1>
              <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
                Explore job opportunities in the industry. Discover career
                options, internships, and remote work positions. Take the next
                step in your professional journey.
              </p>

              <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                <Link
                  to="/blogs"
                  className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md "
                >
                  Explore Jobs
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default LandingPage;
