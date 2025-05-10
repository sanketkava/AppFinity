import React from 'react';

function Blog() {
  const articles = [
    {
      title: 'React Native in 2023: What’s New and What’s Next',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      date: 'January 15, 2025',
      readTime: '8 min read',
      description:
        'Explore the latest features in React Native and how they’re shaping the future of cross-platform development.',
    },
    {
      title: 'Optimizing MERN Stack Applications for Performance',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      date: 'May 1, 2025',
      readTime: '10 min read',
      description:
        'Proven techniques to improve the speed and efficiency of your MERN stack applications in production.',
    },
    {
      title: 'Mobile UI Design Patterns That Improve Conversion',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      date: 'April 12, 2025',
      readTime: '6 min read',
      description:
        'Discover the most effective mobile UI patterns that can significantly boost your app’s conversion rates.',
    },
  ];

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-blue-400 font-medium">Insights</span>
          <h2 className="text-4xl font-bold mt-2 mb-6">
            Latest <span className="text-gradient">Articles</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            Stay updated with our thoughts on technology trends, best practices, and industry insights.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={article.title}
              className={`bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp animate__delay-${index}s`}
            >
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-3">
                  <span>{article.date}</span>
                  <span className="mx-2">•</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{article.title}</h3>
                <p className="text-gray-400 mb-4">{article.description}</p>
                <a href="#" className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center">
                  Read More <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center animate__animated animate__fadeIn">
          <a
            href="#"
            className="inline-flex items-center px-8 py-3 rounded-lg font-medium border border-gray-600 text-gray-300 hover:bg-gray-800/50 hover:text-white transition"
          >
            View All Articles <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Blog;