import React from 'react';

function Services() {
  const services = [
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile App Development',
      description: 'High-performance cross-platform mobile applications built with React Native for iOS and Android.',
      features: ['Cross-platform compatibility', 'Native-like performance', 'Offline capabilities'],
      color: 'blue',
    },
    {
      icon: 'fas fa-globe',
      title: 'Web Development',
      description: 'Scalable and secure web applications using the MERN stack (MongoDB, Express, React, Node.js).',
      features: ['Full-stack solutions', 'Real-time features', 'API integration'],
      color: 'emerald',
    },
    {
      icon: 'fas fa-cogs',
      title: 'Custom Solutions',
      description: 'Tailored software solutions designed to address your unique business challenges and requirements.',
      features: ['Business automation', 'Enterprise software', 'System integration'],
      color: 'purple',
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-blue-400 font-medium">What We Offer</span>
          <h2 className="text-4xl font-bold mt-2 mb-4">
            Our <span className="text-gradient">Specialized Services</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            We deliver comprehensive digital solutions tailored to your business needs, from concept to deployment.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`service-card rounded-xl p-8 animate__animated animate__fadeInUp animate__delay-${index}s`}
            >
              <div
                className={`w-14 h-14 rounded-lg bg-${service.color}-500/10 flex items-center justify-center mb-6`}
              >
                <i className={`${service.icon} text-${service.color}-400 text-2xl`}></i>
              </div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <ul className="space-y-2 text-gray-400">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <i className={`fas fa-check-circle text-${service.color}-400 mr-2 text-sm`}></i>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center animate__animated animate__fadeIn">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 rounded-lg font-medium bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-lg transition"
          >
            Discuss Your Project <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;