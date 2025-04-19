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
              <img src="https://media-hosting.imagekit.io/f49a071856ca4012/Logo.png?Expires=1839515926&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=zXHFT2wmboJBpr~D~UUvjLageyZ84tDA5kyIsoUNaXkG4Qz5Q2jI~b2i7aaAW5ZM3XCGtrQ7FKcodYaHyTwa115312Ox5OTWI7VQz~4WnWONv7I3zj6Exe6E7-xUP3LM9JkvNqX00ZdJn3JeUNCQN97P1do1b~30kv-iPD~m-TmMhOcvg~24CQDTbb-g8FVGK6lSnqq5MQHlDHsk0dGdmTQdGgj2WgRdSlU8wZHzjzAA3QzL76dH0JJHhwWgd2jkr656huYWQSoiGypIsQoiYiHcWSw6oAUwkhgQWpnUCPxkw23LCE9Motn4V7wEYDyG~AGtOyltd8w0Ojz-qE3uQw__" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-2xl font-bold text-gradient">Appfinity Tech</span>
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
