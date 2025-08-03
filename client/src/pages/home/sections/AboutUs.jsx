import React from "react";

const AboutUs = () => {
  return (
    <div>
      {/* Decorative blurred background glow */}
      {/* <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl z-0"></div> */}

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Tagline */}
        <span className="inline-block text-sm uppercase tracking-wider text-accent font-semibold mb-4">
          Empowering Change, One Life at a Time
        </span>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold  leading-tight mb-6">
          We Are a <span className="text-secondary">Non-Profit</span> Driving{" "}
          <br /> <span className="text-secondary">Real-World</span> Impact
        </h2>

        {/* Supporting Paragraph */}
        <p className="text-lg text-base-content/60 max-w-3xl mx-auto mb-10">
          Our mission is to uplift underserved children and families by creating
          opportunities in education, health, and sustainable living. Through
          grassroots initiatives and compassionate action, we aim to rewrite
          futures—together.
        </p>

        {/* Pillars / Focus Areas */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-center mb-12">
          <div className="flex flex-col items-center">
            <div className="text-3xl mb-2">🎓</div>
            <p className="text-sm font-medium ">Education</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl mb-2">🏥</div>
            <p className="text-sm font-medium ">Healthcare</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl mb-2">🌿</div>
            <p className="text-sm font-medium ">Sustainability</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl mb-2">🤝</div>
            <p className="text-sm font-medium ">Community</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
