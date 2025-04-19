import React from 'react';

function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate__animated animate__fadeInDown">
          Ready to Bring Your Digital Vision to Life?
        </h2>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 animate__animated animate__fadeIn animate__delay-1s">
          Let's discuss how we can help you create an exceptional digital product that drives results.
        </p>
        <div className="animate__animated animate__fadeIn animate__delay-2s">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 rounded-lg font-medium bg-white text-blue-600 hover:bg-gray-100 hover:shadow-lg transition"
          >
            Get in Touch <i className="fas fa-paper-plane ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;