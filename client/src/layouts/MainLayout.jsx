import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import particlesConfig from "../components/particlesConfig";

const MainLayout = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className="relative min-h-screen ">
      {/* Particles background */}
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={particlesConfig}
          className="absolute inset-0 -z-10"
        />
      )}

      {/* Page Content */}
      <div className="max-w-11/12 mx-auto work-sans  z-10 relative">
        <div className="sticky top-0 z-50 backdrop-blur shadow transition-all">
          <Navbar />
        </div>
        <div className="min-h-[80vh]">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
