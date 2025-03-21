import React from "react";
import { Link } from "react-router-dom";

const HotJobCart = ({ job }) => {
  const {
    title,
    company,
    company_logo,
    requirements,
    description,
    location,
    salaryRange,
    _id,
  } = job;

  return (
    <div className="flex justify-center items-center  bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        {/* Company Logo */}
        <div className="flex justify-center mb-4">
          <img
            src={company_logo}
            alt={company}
            className="w-24 h-24 object-cover rounded-full"
          />
        </div>

        {/* Job Title & Company */}
        <h2 className="text-2xl font-semibold text-white text-center mb-2">
          {title}
        </h2>
        <p className="text-lg text-gray-400 text-center mb-4">{company}</p>

        {/* Job Description */}
        <p className="text-gray-300 mb-4">{description}</p>

        {/* Requirements */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-white">Requirements:</h3>
          <ul className="list-disc pl-5 text-gray-400">
            {requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>

        {/* Salary & Location */}
        <div className="flex justify-between text-gray-400 text-sm mb-4">
          <p>{location}</p>
          <p>
            {salaryRange.currency} {salaryRange.min} - {salaryRange.max}
          </p>
        </div>

        {/* Apply Button */}
        <div className="flex justify-center">
          <Link
            to={`/jobs/${_id}`}
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
            onClick={() => ""}
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobCart;
