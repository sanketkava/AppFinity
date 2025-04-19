import React, { useState } from 'react';

function Contact({ openSuccessModal }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.errors ? result.errors[0].msg : 'Failed to submit form');
      }

      console.log('Form submitted:', result);
      openSuccessModal();
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('Error:', err);
      setError(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 animate__animated animate__fadeInLeft">
            <span className="text-sm uppercase tracking-wider text-blue-400 font-medium">Get In Touch</span>
            <h2 className="text-4xl font-bold mt-2 mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Have a project in mind or want to discuss how we can help your business? Fill out the form or reach out
              directly using the contact information below.
            </p>
            <div className="space-y-6">
              {[
                {
                  icon: 'fas fa-map-marker-alt',
                  title: 'Our Office',
                  description: '123 Tech Street, San Francisco, CA 94107',
                },
                {
                  icon: 'fas fa-envelope',
                  title: 'Email Us',
                  description: 'info@appfinitytech.com',
                },
                {
                  icon: 'fas fa-phone-alt',
                  title: 'Call Us',
                  description: '+1 (555) 123-4567',
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <i className={`${item.icon} text-blue-400`}></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <h4 className="font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  { icon: 'fab fa-twitter', color: 'blue-500' },
                  { icon: 'fab fa-linkedin-in', color: 'blue-600' },
                  { icon: 'fab fa-github', color: 'gray-800' },
                  { icon: 'fab fa-dribbble', color: 'pink-600' },
                ].map((social) => (
                  <a
                    key={social.icon}
                    href="#"
                    className={`w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 hover:bg-${social.color} hover:text-white transition`}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 animate__animated animate__fadeInRight">
            <form id="contactForm" className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="contact-input w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="contact-input w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="contact-input w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="contact-input w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              {error && <p className="text-red-400 text-sm">{error}</p>}
              <div>
                <button type="submit" className="btn-primary w-full px-6 py-4 rounded-lg font-medium text-white">
                  Send Message <i className="fas fa-paper-plane ml-2"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
