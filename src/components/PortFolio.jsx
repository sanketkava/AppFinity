import React from 'react';

function Portfolio({ openProjectModal }) {
  const projects = [
    {
      title: 'ShopEasy Mobile',
      description:
        'A revolutionary e-commerce app with augmented reality features that allow customers to preview products in their own space before purchasing. The app includes advanced search, personalized recommendations, and secure payment integration.',
      tech: 'React Native, Redux, Node.js, MongoDB, ARKit',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['React Native', 'Node.js'],
      tagColors: ['blue', 'purple'],
    },
    {
      title: 'HealthTrack Pro',
      description:
        'A comprehensive healthcare analytics platform that aggregates patient data from multiple sources and provides actionable insights through interactive visualizations. The system includes role-based access control and real-time data processing.',
      tech: 'React, D3.js, Node.js, MongoDB, AWS',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['React', 'D3.js'],
      tagColors: ['emerald', 'blue'],
    },
    {
      title: 'TaskFlow',
      description:
        'An enterprise-grade task management system with collaborative features, time tracking, and project analytics. The solution integrates with popular productivity tools and offers customizable workflows.',
      tech: 'React, Firebase, Material UI, Redux',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['React', 'Firebase'],
      tagColors: ['blue', 'amber'],
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-blue-400 font-medium">Our Work</span>
          <h2 className="text-4xl font-bold mt-2 mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            Explore some of our recent work that showcases our expertise and creativity.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`portfolio-item animate__animated animate__fadeInUp animate__delay-${index}s`}
            >
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
              <div className="portfolio-overlay">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.title.includes('ShopEasy') ? 'E-commerce app with AR product preview' : project.title.includes('HealthTrack') ? 'Healthcare analytics dashboard' : 'Enterprise task management system'}</p>
                <div className="flex space-x-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 bg-${project.tagColors[i]}-500/20 text-${project.tagColors[i]}-400 rounded-full text-xs`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => openProjectModal(project.title, project.description, project.tech)}
                  className="mt-4 btn-primary text-white py-2 px-4 rounded-lg text-sm w-full text-center"
                >
                  View Case Study
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center animate__animated animate__fadeIn">
          <a
            href="#"
            className="inline-flex items-center px-8 py-3 rounded-lg font-medium border border-gray-600 text-gray-300 hover:bg-gray-800/50 hover:text-white transition"
          >
            View All Projects <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
