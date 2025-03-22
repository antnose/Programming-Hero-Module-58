import { useParams } from "react-router-dom";

const JobApply = () => {
  const { id } = useParams();

  const handleJobApplication = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;
    console.log(linkedin, github, resume);
  };

  console.log(id);
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Apply now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleJobApplication} className="card-body">
            <fieldset className="fieldset">
              <label className="fieldset-label">LinkedIN URL</label>
              <input
                type="url"
                name="linkedIn"
                className="input"
                placeholder="linkedIn URL"
              />

              <label className="fieldset-label">GitHub Link</label>
              <input
                type="url"
                name="github"
                className="input"
                placeholder="GitHub URL"
              />

              <label className="fieldset-label">Resume URL</label>
              <input
                type="url"
                name="resume"
                className="input"
                placeholder="Resume URL"
              />

              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Apply</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApply;
