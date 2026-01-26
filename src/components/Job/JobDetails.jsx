import { useNavigate, Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import useJobDetails from "../../features/Hooks/UseJobDetails";

const JobDetails = () => {
  const navigate = useNavigate();
  const { job, handleDelete } = useJobDetails();
  if (!job)
    return (
      <p className="py-10 text-xl text-center text-red-600">Job not found</p>
    );

  return (
    <div>
      <div className="bg-white">
        <div className="container">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 py-6 text-indigo-500 hover:text-indigo-700"
          >
            <IoArrowBack />
            Back To Jobs Listing
          </button>
        </div>
      </div>

      <div className="bg-blue-100">
        <div className="container grid grid-cols-[70%_30%] gap-6 py-6">
          <div className="space-y-6">
            <div className="p-6 bg-white shadow rounded-xl">
              <span className="text-sm text-gray-400">{job.type}</span>
              <h3 className="py-4 text-3xl font-bold">{job.title}</h3>

              <div className="flex items-center gap-1 text-red-600">
                <CiLocationOn />
                <span>{job.location}</span>
              </div>
            </div>

            <div className="p-6 bg-white shadow rounded-xl">
              <h4 className="mb-3 text-lg font-semibold text-indigo-600">
                Job Description
              </h4>
              <p className="leading-relaxed text-gray-700">{job.description}</p>

              <h4 className="mt-6 text-lg font-semibold text-indigo-600">
                Salary
              </h4>
              <p className="mt-2 text-gray-700">{job.salary}</p>
            </div>
          </div>

          <aside className="p-6 bg-white shadow h-fit rounded-xl">
            <h5 className="pb-3 mb-4 text-xl font-semibold border-b">
              Company Info
            </h5>

            <h4 className="text-2xl font-medium text-indigo-600">
              {job.company.name}
            </h4>

            <p className="mt-4 text-gray-600">{job.company.description}</p>

            <div className="mt-6 space-y-4">
              <div className="p-3 rounded-lg bg-gray-50">
                <h6 className="font-semibold uppercase">Contact Email</h6>
                <p className="px-4 py-2 mt-1 text-sm bg-indigo-200 rounded">
                  {job.company.contactEmail}
                </p>
              </div>

              <div className="p-3 rounded-lg bg-gray-50">
                <h6 className="font-semibold uppercase">Phone</h6>
                <p className="px-4 py-2 mt-1 text-sm bg-indigo-200 rounded">
                  {job.company.contactPhone}
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <Link
                to={`/edit-jobs/${job.id}`}
                className="block w-full py-2 text-center text-white bg-indigo-600 rounded hover:bg-indigo-700"
              >
                Edit Job
              </Link>

              <button
                onClick={handleDelete}
                className="w-full py-2 text-white bg-red-600 rounded hover:bg-red-700"
              >
                Delete Job
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
