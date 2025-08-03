import heroImg from "../../../assets/images/hero-img.jpg";
import bgImg from "../../../assets/images/bg-img.png";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 py-12 px-6">
      {/* Left Section: Text Content */}
      <div className="lg:w-1/2 text-center lg:text-left space-y-6">
        <h3 className="text-2xl md:text-4xl font-bold ">
          <span className="text-primary">Unlocking</span> Education for{" "}
          <span className="text-primary"> Every Child</span>
        </h3>
        <p className="text-secondary-content md:text-lg">
          We provide underprivileged children with access to quality education,
          resources, and hope for a brighter future.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button className="btn btn-primary">Sponsor a Child</button>
          <button className="btn btn-secondary">Join as Volunteer</button>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
        {/* Background element */}
        <img
          src={bgImg}
          alt="Decorative Background"
          className="absolute -left-10 md:left-10 top-10 w-40 md:w-56 opacity-40 z-0"
        />

        {/* Hero Image */}
        <figure className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 overflow-hidden rounded-full shadow-lg">
          <img
            src={heroImg}
            alt="Hero Image"
            className="w-full h-full object-cover"
          />
        </figure>
      </div>
    </div>
  );
};

export default Hero;
