import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const { title, company, _id } = useLoaderData();

  return (
    <div>
      <h2>Job Detail for : {title} </h2>
      <p>Apply for {company} </p>
      <Link to={`/jobApply/${_id}`} className="btn btn-soft btn-accent">
        Apply Now
      </Link>
    </div>
  );
};

export default JobDetails;
