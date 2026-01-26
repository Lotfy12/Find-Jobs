import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

function JobCard({ item }) {
  const isLong = item.description.length > 80;
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();

  return (
<div className="mb-7 flex min-h-[320px] flex-col justify-between rounded-xl border-2 border-transparent bg-white p-6 shadow-md transition duration-300 hover:-translate-y-2 hover:border-indigo-500 hover:shadow-xl">
  
      <div className="space-y-2">
        <span className="text-sm font-medium text-gray-400">{item.type}</span>
        <h6 className="text-xl font-semibold text-gray-800">{item.title}</h6>
        <p className="leading-relaxed text-gray-600">
          {showMore || !isLong
            ? item.description
            : item.description.slice(0, 80) + "..."}
        </p>

        {isLong && (
          <button
            onClick={() => setShowMore((s) => !s)}
            className="text-sm font-medium text-indigo-600 hover:underline"
          >
            {showMore ? "Show less" : "Show more"}
          </button>
        )}
      </div>

      <div className="mt-4 space-y-3">
        <span className="text-lg font-semibold text-indigo-600">
          {item.salary}
        </span>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-red-600">
            <CiLocationOn />
            <span className="text-sm font-medium">{item.location}</span>
          </div>

          <button
            onClick={() => navigate(`/jobs/${item.id}`)}
            className="px-4 py-2 text-sm font-medium text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
