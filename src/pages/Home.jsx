import JobListings from "../components/Job/JobListings";
import Title from "../components/common/Title";
import JobsButton from "../components/Job/viewJobs";
import HomeCard from "../components/Card/HomeCard";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Title
        title={"Become a React Dev"}
        subTitle={"Find the React job that fits your skills and needs"}
      />

      <HomeCard />
      <JobListings />
      <JobsButton />
      <Footer />
    </>
  );
};

export default Home;
