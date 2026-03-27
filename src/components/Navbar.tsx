import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'glass border-b border-cyan-500/30' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-xl font-bold text-gradient-space tracking-wider"
          >
            AA
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.05 }}
                onClick={() => handleNavClick(item.href)}
                className="link-space text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300 tracking-wide"
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg glass-card text-cyan-400 hover:text-cyan-300 transition-all duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          y: isOpen ? 0 : -20,
          pointerEvents: isOpen ? 'auto' : 'none'
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden glass-card border border-cyan-500/30 rounded-b-2xl mx-4 mt-16"
      >
        <div className="flex flex-col space-y-4 p-6">
          {navItems.map((item) => (
            <motion.button
              key={item.name}
              whileHover={{ scale: 1.05, x: 10 }}
              onClick={() => handleNavClick(item.href)}
              className="link-space text-cyan-400 hover:text-cyan-300 font-medium text-left transition-colors duration-300 tracking-wide"
            >
              {item.name}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
