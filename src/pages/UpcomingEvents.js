import React from "react";
import { Link } from "react-router-dom";

const UpcomingEvents = () => {
  const eventData = [
    {
      title: "Web Development Conference 2023",
      date: "June 24-26, 2023",
      location: "San Francisco, CA",
      description:
        "Join us for the largest web development conference of the year. Explore the latest trends and technologies in web development, attend workshops, and network with industry professionals.",
      registrationLink: "/",
    },
    {
      title: "Digital Marketing Summit",
      date: "July 15-16, 2023",
      location: "New York City, NY",
      description:
        "The Digital Marketing Summit is a must-attend event for marketing professionals. Learn about the latest strategies, tactics, and tools in digital marketing from industry experts.",
      registrationLink: "/",
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-6">Upcoming Events</h1>
        <p className="text-gray-300 mb-8">
          Discover exciting upcoming events in the industry. Join us to expand
          your knowledge, network with professionals, and stay ahead of the
          curve.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {eventData.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

const EventCard = ({ event }) => {
  return (
    <div className="flex flex-col bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <h3 className="text-lg font-semibold text-white mb-2">{event.title}</h3>
        <p className="text-gray-300 mb-2">{event.date}</p>
        <p className="text-gray-400 mb-4">{event.location}</p>
        <p className="text-gray-300 line-clamp-3">{event.description}</p>
      </div>
      <div className="px-6 py-4 bg-gray-700">
        <Link to={event.registrationLink} className="text-white font-medium">
          Register Now
        </Link>
      </div>
    </div>
  );
};

export default UpcomingEvents;
