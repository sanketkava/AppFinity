import React from 'react';

function Hero() {
  return (
    <section id="home" className="hero-section min-h-screen flex items-center relative">
      <div className="hero-overlay absolute inset-0"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mt-14">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 animate__animated animate__fadeInDown">
            Building <span className="text-gradient">Digital Experiences</span> That Matter
          </h1>
          <p className="text-xl text-gray-300 mb-8 animate__animated animate__fadeIn animate__delay-1s">
            We craft high-performance mobile apps and web solutions using React Native and MERN stack to help businesses thrive in the digital world.
          </p>
          <div className="flex flex-wrap gap-4 animate__animated animate__fadeIn animate__delay-2s">
            <a href="#contact" className="btn-primary text-white px-8 py-3 rounded-lg font-medium">
              Get Started <i className="fas fa-arrow-right ml-2"></i>
            </a>
            <a
              href="#portfolio"
              className="px-8 py-3 rounded-lg font-medium border border-gray-600 text-gray-300 hover:bg-gray-800/50 hover:text-white transition"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
      <div className="scroll-indicator animate__animated animate__fadeIn animate__delay-3s">
        <a href="#services" className="text-gray-400 hover:text-white transition">
          <i className="fas fa-chevron-down text-2xl"></i>
        </a>
      </div>
    </section>
  );
}

export default Hero;
