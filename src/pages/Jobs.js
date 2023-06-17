import React from "react";
import { Link } from "react-router-dom";

const Jobs = () => {
  const jobData = [
    {
      title: "Software Engineer",
      location: "Remote",
      description:
        "We are seeking a skilled software engineer to join our development team. The ideal candidate has experience with JavaScript, React, and Node.js.",
      requirements: [
        "Proficiency in JavaScript, React, and Node.js",
        "Strong problem-solving skills",
        "Experience with Git and version control",
      ],
      applyLink: "/",
    },
    {
      title: "UI/UX Designer",
      location: "New York City, NY",
      description:
        "We are looking for a talented UI/UX designer to create intuitive and visually appealing user interfaces. Proficiency in design tools such as Sketch or Figma is required.",
      requirements: [
        "Proficiency in Sketch or Figma",
        "Strong understanding of user-centered design principles",
        "Experience creating wireframes and prototypes",
      ],
      applyLink: "/",
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-6">Join Our Team</h1>
        <p className="text-gray-300 mb-8">
          We are always looking for talented individuals to join our team. Check
          out the available job opportunities below and apply today!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobData.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

const JobCard = ({ job }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col justify-between">
      <div className="px-6 py-4 ">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-4 text-xs text-gray-400">
            <time dateTime={new Date().toISOString()}>
              {new Date().toLocaleDateString()}
            </time>
            <div className="relative z-10 rounded-full bg-gray-700 px-3 py-1.5 font-medium text-white hover:bg-gray-600">
              {job.location}
            </div>
          </div>
          <img
            src="https://picsum.photos/200"
            alt=""
            className="h-10 w-10 rounded-full bg-gray-700"
          />
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold leading-6 text-white group-hover:text-gray-300">
            <Link to={job.applyLink}>
              <span className="absolute inset-0" />
              {job.title}
            </Link>
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {job.requirements.map((requirement, index) => (
              <span
                key={index}
                className="text-xs text-gray-300 cursor-pointer"
              >
                #{requirement}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm leading-6 text-gray-300 line-clamp-3">
            {job.description}
          </p>
        </div>
      </div>
      <div className="px-6 py-4 bg-gray-700">
        <Link
          to="/"
          className="inline-block px-4 py-2 bg-gray-900 text-white font-medium rounded hover:bg-gray-800"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default Jobs;
