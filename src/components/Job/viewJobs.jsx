import { Link } from "react-router";

const JobsButton = () => {
  return (
    <div className="flex min-h-[120px] items-center justify-center bg-white">
      <Link
        to="/jobs"
        className="rounded-lg bg-slate-900 px-[200px] py-3 text-lg font-medium text-white transition hover:scale-105 hover:bg-slate-800"
      >
        View All Jobs
      </Link>
    </div>
  );
};

export default JobsButton;
