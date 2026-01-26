import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { lazy, Suspense } from "react";
import "react-toastify/dist/ReactToastify.css";

import { PostProvider } from "./features/PostProvider";
import "./index.css";
import NavBar from "./components/NavBar";
import Spinner from "./components/common/Spinner";
import Home from "./pages/Home";

const JobPage = lazy(() => import("./components/Job/JobPage"));
const JobDetails = lazy(() => import("./components/Job/JobDetails"));
const AddJobPage = lazy(() => import("./pages/AddJobPage"));
const EditJobPage = lazy(() => import("./pages/EditJobPage"));
const NotFoundPage = lazy(() => import("./components/common/NotFoundPage"));

function App() {
  return (
    <PostProvider>
      <BrowserRouter>
        <NavBar />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
          theme="colored"
        />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<JobPage />} />
            <Route path="/jobs/:id" element={<JobDetails />} />

            <Route path="/edit-jobs/:id" element={<EditJobPage />} />
            <Route path="/add-jobs" element={<AddJobPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </PostProvider>
  );
}

export default App;
