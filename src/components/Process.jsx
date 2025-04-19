import React from 'react';

function Process() {
  const steps = [
    {
      title: 'Discovery & Planning',
      description:
        'We start by understanding your business goals, target audience, and technical requirements to create a comprehensive project roadmap.',
      position: 'right',
    },
    {
      title: 'Design & Prototyping',
      description:
        'Our designers create intuitive user interfaces and interactive prototypes to visualize the final product before development begins.',
      position: 'left',
    },
    {
      title: 'Development',
      description:
        'Using agile methodologies, we build your solution in iterative sprints with regular demos and feedback sessions.',
      position: 'right',
    },
    {
      title: 'Testing & QA',
      description:
        'Rigorous testing across devices and platforms ensures your solution is bug-free and performs optimally under all conditions.',
      position: 'left',
    },
    {
      title: 'Deployment & Support',
      description:
        'We handle the launch process and provide ongoing maintenance, updates, and enhancements as your needs evolve.',
      position: 'right',
    },
  ];

  return (
    <section className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-blue-400 font-medium">Our Approach</span>
          <h2 className="text-4xl font-bold mt-2 mb-6">
            Development <span className="text-gradient">Process</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            A structured methodology that ensures quality, transparency, and successful project delivery.
          </p>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-emerald-500 -ml-0.5"></div>
          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`relative lg:flex items-center justify-between animate__animated animate__fadeIn animate__delay-${index}s`}
              >
                <div className={`lg:w-5/12 lg:pr-12 mb-8 lg:mb-0 ${step.position === 'right' ? 'text-right' : ''}`}>
                  {step.position === 'right' && (
                    <>
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-gray-400">{step.description}</p>
                    </>
                  )}
                </div>
                <div className="hidden lg:flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xl font-bold mx-auto flex-shrink-0">
                  {index + 1}
                </div>
                <div className={`lg:w-5/12 lg:pl-12 ${step.position === 'left' ? 'text-left' : ''}`}>
                  {step.position === 'left' && (
                    <>
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-gray-400">{step.description}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;