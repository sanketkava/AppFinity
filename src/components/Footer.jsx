import React from 'react';

function Footer() {
  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#portfolio', label: 'Work' },
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 flex items-center justify-center overflow-hidden">
              <img src="https://media-hosting.imagekit.io/df016d48ed2940a2/ChatGPT%20Image%20May%2011,%202025,%2002_09_11%20AM.png?Expires=1841517620&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=nlxIwHhPg1wg1f9PjZ4vXm6WmQe7hzy5f3GAnFpti6w66jwCo~eVM~iyemJihIZu2G2nLHWJX8uXQsxbenA3WmJsBE~RWtXDLW99tGYS0~~g9hbCpBRGLukGZBhRt8FTlONTUi8stCwIR4gk4AeknwhKGS1oat75Wz3SrS3W076nJpGwBAf5pdkiqpYSrK0HvZfhVtz1i5wNnJcetVrxR6KlMbF5FF64rKmC1gO4qrof3zmVBoAQjCAXS6H2GdXtRtCh2dRyR4ieHM1KtwrKdKsFBEMQOPtSaKDuN92zbCMq47ipDGyp-J~H3nBxSLnuA5Fjm1A6VV-J9s4YBW3Ouw__" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-xl font-bold text-gradient">Appfinity CyberTech</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-6 md:mb-0">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-400 hover:text-white transition">
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex space-x-4">
            {[
              { icon: 'fab fa-twitter', color: 'blue-400' },
              { icon: 'fab fa-linkedin-in', color: 'blue-600' },
              { icon: 'fab fa-github', color: 'gray-300' },
              { icon: 'fab fa-dribbble', color: 'pink-600' },
            ].map((social) => (
              <a key={social.icon} href="#" className={`text-gray-400 hover:text-${social.color} transition`}>
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">© 2025 Appfinity CyberTech. All rights reserved.</p>
          <div className="flex space-x-6">
            {['Privacy Policy', 'Terms of Service', 'Cookies'].map((link) => (
              <a key={link} href="#" className="text-gray-500 hover:text-gray-300 text-sm transition">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;