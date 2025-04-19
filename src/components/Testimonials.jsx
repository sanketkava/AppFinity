import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      title: 'CEO, TechSolutions',
      image: 'https://randomuser.me/api/portraits/women/43.jpg',
      quote:
        'Appfinity Tech transformed our mobile presence with their React Native expertise. The app they built performs flawlessly on both iOS and Android, and their team was incredibly responsive throughout the process.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      title: 'CTO, HealthTrack',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      quote:
        'The MERN stack application developed by Appfinity Tech has been instrumental in scaling our operations. Their attention to detail and commitment to best practices resulted in a robust, maintainable codebase.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      title: 'Product Manager, ShopEasy',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      quote:
        'From concept to launch, Appfinity Tech was a true partner. They not only delivered an amazing AR shopping experience but also provided valuable insights that shaped our product strategy.',
      rating: 4.5,
    },
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-blue-400 font-medium">Client Feedback</span>
          <h2 className="text-4xl font-bold mt-2 mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            Don't just take our word for it - hear what our clients have to say about working with us.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`testimonial-card p-8 rounded-lg animate__animated animate__fadeIn animate__delay-${index}s`}
            >
              <div className="flex items-center mb-6">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">{testimonial.quote}</p>
              <div className="flex text-amber-400">
                {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
                {testimonial.rating % 1 !== 0 && <i className="fas fa-star-half-alt"></i>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;