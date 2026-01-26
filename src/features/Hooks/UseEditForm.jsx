import { useEffect, useReducer } from "react";
import { useNavigate, useParams } from "react-router";
import { usePost } from "../PostProvider";

const useEditForm = () => {
  const { handleUpdateJob } = usePost();

  const { id } = useParams();
  const navigate = useNavigate();

  const initialState = {
    type: "Full-Time",
    name: "",
    description: "",
    salary: "Under 50K",
    location: "",
    companyName: "",
    companyDescription: "",
    email: "",
    phone: "",
  };

  function reducer(state, action) {
    switch (action.type) {
      case "SET_JOB":
        return {
          ...state,
          type: action.payload.type || "Full-Time",
          name: action.payload.title || "",
          description: action.payload.description || "",
          salary: action.payload.salary || "Under 50K",
          location: action.payload.location || "",
          companyName: action.payload.company?.name || "",
          companyDescription: action.payload.company?.description || "",
          email: action.payload.company?.contactEmail || "",
          phone: action.payload.company?.contactPhone || "",
        };

      case "CHANGE_FIELD":
        return {
          ...state,
          [action.field]: action.value,
        };

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchJob = async () => {
      const res = await fetch(`/api/jobs/${id}`);
      const data = await res.json();

      dispatch({ type: "SET_JOB", payload: data });
    };

    fetchJob();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedJob = {
      id,
      type: state.type,
      title: state.name,
      description: state.description,
      salary: state.salary,
      location: state.location,
      company: {
        name: state.companyName,
        description: state.companyDescription,
        contactEmail: state.email,
        contactPhone: state.phone,
      },
    };

    handleUpdateJob(updatedJob);
    navigate(`/jobs/${id}`);
  };

  return { state, dispatch, handleSubmit };
};

export default useEditForm;
