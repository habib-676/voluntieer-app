import AboutUs from "./sections/AboutUs";
import Hero from "./sections/Hero";

const Home = () => {
  return (
    <div className="space-y-10">
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
