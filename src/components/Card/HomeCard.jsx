import { useNavigate } from "react-router";
import Card from "./Card";

const HomeCard = () => {
  const navigate = useNavigate();
  const handleAddJob = () => {
    navigate("/jobs");
  };
  const handleEditJob = () => {
    navigate("/add-jobs");
  };
  return (
    <div className="container grid grid-cols-2 gap-6 mt-10 mb-6 ">
      <Card
        title="For Developers"
        description="Browse our React jobs and start your career today"
        button="Browse Jobs"
        className="bg-indigo-200"
        moveTo={handleAddJob}
      />
      <Card
        title="For Employers"
        description="List your job to find the perfect developer for the role"
        button="Add Jobs"
        className="bg-gray-200"
        moveTo={handleEditJob}
      />
    </div>
  );
};

export default HomeCard;
