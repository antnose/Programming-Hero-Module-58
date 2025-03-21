import React, { useEffect, useState } from "react";
import HotJobCart from "./HotJobCart";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {jobs.map((job) => (
          <div className="h-full" key={job._id}>
            <HotJobCart job={job} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
