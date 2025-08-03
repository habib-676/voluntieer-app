import { Helmet } from "react-helmet-async";
import AboutUs from "./sections/AboutUs";
import Hero from "./sections/Hero";

const Home = () => {
  return (
    <div className="space-y-10">
      <Helmet>
        <title>Homepage || Volunteer App</title>
      </Helmet>
      <section>
        <Hero />
      </section>
      <section>
        <AboutUs />
      </section>
    </div>
  );
};

export default Home;
