import React from 'react';

function Header({ isMobileMenuOpen, toggleMobileMenu }) {
  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#portfolio', label: 'Work' },
    { href: '#testimonials', label: 'Clients' },
    { href: '#contact', label: 'Contact' },
    { href: '#blog', label: 'Blog' },
  ];

  return (
    <header className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 flex items-center justify-center overflow-hidden">
              <img src="https://media-hosting.imagekit.io/df016d48ed2940a2/ChatGPT%20Image%20May%2011,%202025,%2002_09_11%20AM.png?Expires=1841517620&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=nlxIwHhPg1wg1f9PjZ4vXm6WmQe7hzy5f3GAnFpti6w66jwCo~eVM~iyemJihIZu2G2nLHWJX8uXQsxbenA3WmJsBE~RWtXDLW99tGYS0~~g9hbCpBRGLukGZBhRt8FTlONTUi8stCwIR4gk4AeknwhKGS1oat75Wz3SrS3W076nJpGwBAf5pdkiqpYSrK0HvZfhVtz1i5wNnJcetVrxR6KlMbF5FF64rKmC1gO4qrof3zmVBoAQjCAXS6H2GdXtRtCh2dRyR4ieHM1KtwrKdKsFBEMQOPtSaKDuN92zbCMq47ipDGyp-J~H3nBxSLnuA5Fjm1A6VV-J9s4YBW3Ouw__" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-2xl font-bold text-gradient">AppFinity CyberTech</span>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link text-gray-300 hover:text-white transition">
                {link.label}
              </a>
            ))}
          </nav>

          <button className="md:hidden text-gray-300 focus:outline-none" onClick={toggleMobileMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-white backdrop-blur-sm`} id="mobile-menu">
        <div className="px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block nav-link text-gray-700 hover:text-black transition"
              onClick={toggleMobileMenu}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
