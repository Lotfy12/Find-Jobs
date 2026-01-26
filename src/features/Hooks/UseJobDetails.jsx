import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usePost } from "../PostProvider";

const useJobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { handleDeleteJob } = usePost();

  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      const res = await fetch(`/api/jobs/${id}`);
      const data = await res.json();
      setJob(data);
    };

    fetchJob();
  }, [id]);

  const handleDelete = () => {
    handleDeleteJob(id);
    navigate("/jobs");
  };

  return { job, handleDelete };
};

export default useJobDetails;
