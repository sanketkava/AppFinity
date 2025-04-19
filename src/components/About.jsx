import React from 'react';

function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Our Team"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
            </div>
            <div className="absolute -bottom-8 -right-8 bg-gray-800 p-6 rounded-2xl shadow-lg w-3/4 animate__animated animate__fadeInRight">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    className="w-10 h-10 rounded-full border-2 border-gray-800"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    className="w-10 h-10 rounded-full border-2 border-gray-800"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/women/68.jpg"
                    className="w-10 h-10 rounded-full border-2 border-gray-800"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-white">Expert Team</h4>
                  <p className="text-sm text-gray-400">15+ Professionals</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 animate__animated animate__fadeIn">
            <span className="text-sm uppercase tracking-wider text-blue-400 font-medium">About Us</span>
            <h2 className="text-4xl font-bold mt-2 mb-6">
              We Transform <span className="text-gradient">Ideas Into Reality</span>
            </h2>
            <p className="text-gray-400 mb-6">
              Founded in 2025, Appfinity Tech has grown from a small startup to a trusted digital solutions provider. Our
              team of passionate developers, designers, and strategists work collaboratively to deliver exceptional
              results.
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  title: 'Proven Methodology',
                  description: 'Agile development process that ensures quality and efficiency.',
                },
                {
                  title: 'Client-Centric Approach',
                  description: 'We prioritize your business goals and user needs in every project.',
                },
                {
                  title: 'Continuous Support',
                  description: 'Ongoing maintenance and updates to keep your solution current.',
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <i className="fas fa-check text-blue-400"></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center space-x-6">
              <div>
                <div className="text-4xl font-bold text-blue-400">50+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400">100%</div>
                <div className="text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;