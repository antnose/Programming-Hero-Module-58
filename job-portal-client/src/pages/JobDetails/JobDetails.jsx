import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const { title, company } = useLoaderData();

  return (
    <div>
      <h2>Job Detail for : {title} </h2>
      <p>Apply for {company} </p>
    </div>
  );
};

export default JobDetails;
