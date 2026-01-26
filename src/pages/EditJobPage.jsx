import useEditForm from "../features/Hooks/UseEditForm";

const EditJobPage = () => {
  const { state, dispatch, handleSubmit } = useEditForm();

  return (
    <section className="flex min-h-screen items-start justify-center bg-blue-100">
      <div className="my-11 w-full max-w-2xl rounded-xl bg-white p-8 shadow-lg">
        <h3 className="mb-6 text-center text-2xl font-bold text-indigo-600">
          Edit Job
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="space-y-5">
            <div className="inp-space">
              <label className="font-semibold">Job Type</label>
              <select
                className="inp-data"
                value={state.type}
                onChange={(e) =>
                  dispatch({
                    type: "CHANGE_FIELD",
                    field: "type",
                    value: e.target.value,
                  })
                }
              >
                <option>Full-Time</option>
                <option>Part-Time</option>
                <option>Remote</option>
                <option>Internship</option>
              </select>
            </div>

            <div className="inp-space">
              <label className="font-semibold">Job Listing Name</label>
              <input
                required
                className="inp-data"
                value={state.name}
                onChange={(e) =>
                  dispatch({
                    type: "CHANGE_FIELD",
                    field: "name",
                    value: e.target.value,
                  })
                }
              />
            </div>

            <div className="inp-space">
              <label className="font-semibold">Description</label>
              <textarea
                className="inp-data"
                value={state.description}
                onChange={(e) =>
                  dispatch({
                    type: "CHANGE_FIELD",
                    field: "description",
                    value: e.target.value,
                  })
                }
              />
            </div>

            <div className="inp-space">
              <label className="font-semibold">Salary</label>
              <select
                className="inp-data"
                value={state.salary}
                onChange={(e) =>
                  dispatch({
                    type: "CHANGE_FIELD",
                    field: "salary",
                    value: e.target.value,
                  })
                }
              >
                <option>Under 50K</option>
                <option>50K - 60K</option>
                <option>60K - 70K</option>
                <option>70K - 80K</option>
                <option>80K - 90K</option>
                <option>90K - 100K</option>
                <option>Over 100K</option>
              </select>
            </div>

            <div className="inp-space">
              <label className="font-semibold">Location</label>
              <input
                required
                className="inp-data"
                value={state.location}
                onChange={(e) =>
                  dispatch({
                    type: "CHANGE_FIELD",
                    field: "location",
                    value: e.target.value,
                  })
                }
              />
            </div>

            <h4 className="text-xl font-semibold">Company Info</h4>

            <div className="inp-space">
              <label className="font-semibold">Company Name</label>
              <input
                required
                className="inp-data"
                value={state.companyName}
                onChange={(e) =>
                  dispatch({
                    type: "CHANGE_FIELD",
                    field: "companyName",
                    value: e.target.value,
                  })
                }
              />
            </div>

            <div className="inp-space">
              <label className="font-semibold">Company Description</label>
              <textarea
                className="inp-data"
                value={state.companyDescription}
                onChange={(e) =>
                  dispatch({
                    type: "CHANGE_FIELD",
                    field: "companyDescription",
                    value: e.target.value,
                  })
                }
              />
            </div>

            <div className="inp-space">
              <label className="font-semibold">Contact Email</label>
              <input
                required
                className="inp-data"
                value={state.email}
                onChange={(e) =>
                  dispatch({
                    type: "CHANGE_FIELD",
                    field: "email",
                    value: e.target.value,
                  })
                }
              />
            </div>

            <div className="inp-space">
              <label className="font-semibold">Contact Phone</label>
              <input
                className="inp-data"
                value={state.phone}
                onChange={(e) =>
                  dispatch({
                    type: "CHANGE_FIELD",
                    field: "phone",
                    value: e.target.value,
                  })
                }
              />
            </div>
          </div>

          <button className="mt-6 w-full rounded-lg bg-indigo-600 py-2 text-lg text-white hover:bg-indigo-700">
            Update Job
          </button>
        </form>
      </div>
    </section>
  );
};

export default EditJobPage;
