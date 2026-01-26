import { createContext, useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const postContext = createContext();
const PostProvider = ({ children }) => {
  const addJob = async (newJob) => {
    await fetch("/api/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newJob),
    });

    toast.success("Job added successfully 🚀");
  };

  // ✅ DELETE
  const deleteJob = async (id) => {
    await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });

    toast.error("Job deleted ❌");
  };

  // ✅ EDIT
  const updateJob = async (job) => {
    await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(job),
    });

    toast.info("Job updated successfully ✨");
  };
  return (
    <postContext.Provider
      value={{
        handleAddJob: addJob,
        handleDeleteJob: deleteJob,
        handleUpdateJob: updateJob,
      }}
    >
      {children}
    </postContext.Provider>
  );
};

const usePost = () => {
  const context = useContext(postContext);
  return context;
};
export { usePost, PostProvider };
