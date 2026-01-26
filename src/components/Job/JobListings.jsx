import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import JobCard from "./JobCard";

const JobListings = () => {
  const { pathname } = useLocation();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await fetch("/api/jobs");
      const data = await res.json();

      const displayedJobs =
        pathname === "/jobs" ? data : data.slice(0, 3);

      setJobs(displayedJobs);
    };

    fetchJobs();
  }, [pathname]);

  return (
    <div className="bg-blue-100">
      <div className="container">
        <h2 className="pt-8 mb-8 text-4xl font-bold text-center text-indigo-600">
          Recent Jobs
        </h2>

        <div className="grid grid-cols-3 gap-6">
          {jobs.map((item) => (
            <JobCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobListings;
