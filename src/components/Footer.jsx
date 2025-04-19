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
              <img src="https://media-hosting.imagekit.io/f49a071856ca4012/Logo.png?Expires=1839515926&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=zXHFT2wmboJBpr~D~UUvjLageyZ84tDA5kyIsoUNaXkG4Qz5Q2jI~b2i7aaAW5ZM3XCGtrQ7FKcodYaHyTwa115312Ox5OTWI7VQz~4WnWONv7I3zj6Exe6E7-xUP3LM9JkvNqX00ZdJn3JeUNCQN97P1do1b~30kv-iPD~m-TmMhOcvg~24CQDTbb-g8FVGK6lSnqq5MQHlDHsk0dGdmTQdGgj2WgRdSlU8wZHzjzAA3QzL76dH0JJHhwWgd2jkr656huYWQSoiGypIsQoiYiHcWSw6oAUwkhgQWpnUCPxkw23LCE9Motn4V7wEYDyG~AGtOyltd8w0Ojz-qE3uQw__" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-xl font-bold text-gradient">Appfinity Tech</span>
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
          <p className="text-gray-500 text-sm mb-4 md:mb-0">© 2025 Appfinity Tech. All rights reserved.</p>
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