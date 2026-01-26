import { useReducer } from "react";
import { useNavigate } from "react-router";
import { usePost } from "../PostProvider";

const UseAddJob = () => {
  const navigate = useNavigate();
  const { handleAddJob } = usePost();

  const initialState = {
    id: "",
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

  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_FIELD":
        return {
          ...state,
          [action.field]: action.value,
        };

      default:
        return state;
    }
  };

  const [state, disPatch] = useReducer(reducer, initialState);

  function handleSubmit(e) {
    e.preventDefault();
    const newJob = {
      id: state.id,
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
    handleAddJob(newJob);

    return navigate("/jobs");
  }
  return { state, disPatch, handleSubmit };
};

export default UseAddJob;
