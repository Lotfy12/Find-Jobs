import UseAddJob from "../features/Hooks/UseAddJob";

const AddJobPage = () => {
  const { state, disPatch, handleSubmit } = UseAddJob();

  return (
    <section className="flex min-h-screen items-start justify-center bg-blue-100">
      <div className="my-11 w-full max-w-2xl rounded-xl bg-white p-8 shadow-lg">
        <h3 className="mb-6 text-center text-2xl font-bold text-indigo-600">
          Add Job
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="space-y-5">
            <div className="inp-space">
              <label htmlFor="type" className="font-semibold text-gray-700">
                Job Type
              </label>

              <select
                id="type"
                className=" inp-data"
                value={state.type}
                onChange={(e) => {
                  disPatch({
                    type: "SET_FIELD",
                    field: "type",
                    value: e.target.value,
                  });
                }}
              >
                <option>Full-Time</option>
                <option>Part-Time</option>
                <option>Remote</option>
                <option>Internship</option>
              </select>
            </div>

            <div className="inp-space">
              <label className="font-semibold" htmlFor="name">
                Job Listing Name
              </label>
              <input
                required
                type="text"
                id="name"
                className="inp-data"
                placeholder="eg. Beautiful Apartment in Miami"
                value={state.name}
                onChange={(e) =>
                  disPatch({
                    type: "SET_FIELD",
                    field: "name",
                    value: e.target.value,
                  })
                }
              />
            </div>

            <div className="inp-space">
              <label className="font-semibold" htmlFor="description">
                Add Description
              </label>

              <textarea
                id="description"
                className="inp-data"
                placeholder="Add any job duties , expectations, requirements, etc"
                value={state.description}
                onChange={(e) =>
                  disPatch({
                    type: "SET_FIELD",
                    field: "description",
                    value: e.target.value,
                  })
                }
              />
            </div>

            <div className="inp-space">
              <label htmlFor="salary" className="font-semibold text-gray-700 ">
                Salary
              </label>

              <select
                id="salary"
                className=" inp-data"
                value={state.salary}
                onChange={(e) =>
                  disPatch({
                    type: "SET_FIELD",
                    field: "salary",
                    value: e.target.value,
                  })
                }
              >
                <option>Under 50K</option>
                <option>60K - 70K</option>
                <option>50K - 60K</option>
                <option>70K - 80K</option>
                <option>80K - 90K</option>
                <option>90K - 100K</option>
                <option>Over 100K</option>
              </select>
            </div>

            <div className="inp-space">
              <label className="font-semibold" htmlFor="location">
                Location
              </label>
              <input
                required
                type="text"
                id="location"
                className="inp-data"
                placeholder="Company Location"
                value={state.location}
                onChange={(e) =>
                  disPatch({
                    type: "SET_FIELD",
                    field: "location",
                    value: e.target.value,
                  })
                }
              />
            </div>

            <h4 className="text-2xl font-semibold">Company Info</h4>

            <div className="inp-space">
              <label className="font-semibold" htmlFor="company-name">
                Company Name
              </label>
              <input
                required
                type="text"
                id="company-name"
                className="inp-data"
                placeholder="Company Name"
                value={state.companyName}
                onChange={(e) => {
                  disPatch({
                    type: "SET_FIELD",
                    field: "companyName",
                    value: e.target.value,
                  });
                }}
              />
            </div>

            <div className="inp-space">
              <label className="font-semibold" htmlFor="company-description">
                Company Description
              </label>

              <textarea
                id="company-description"
                className="inp-data "
                placeholder="What does your company do ?"
                value={state.companyDescription}
                onChange={(e) =>
                  disPatch({
                    type: "SET_FIELD",
                    field: "companyDescription",
                    value: e.target.value,
                  })
                }
              />
            </div>

            <div className="inp-space">
              <label className="font-semibold" htmlFor="contact-name">
                Contact Email
              </label>
              <input
                required
                type="text"
                id="contact-name"
                className="inp-data"
                placeholder="Email address for applications"
                value={state.email}
                onChange={(e) => {
                  disPatch({
                    type: "SET_FIELD",
                    field: "email",
                    value: e.target.value,
                  });
                }}
              />
            </div>

            <div className="inp-space">
              <label className="font-semibold" htmlFor="phone-name">
                Contact Phone
              </label>
              <input
                type="text"
                id="phone-name"
                className="inp-data"
                placeholder="Optional Phone for applications "
                value={state.phone}
                onChange={(e) =>
                  disPatch({
                    type: "SET_FIELD",
                    field: "phone",
                    value: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <button className="mt-5 w-full rounded-lg bg-indigo-600 py-2 text-lg font-medium text-white transition hover:bg-indigo-700">
            Add Job
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddJobPage;
