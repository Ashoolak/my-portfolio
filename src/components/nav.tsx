'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Wait for component to mount to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Intern Insider', href: '#intern-insider' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'py-2 bg-[hsl(var(--background))]/80 backdrop-blur-lg shadow-md'
          : 'py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.a
          href="#home"
          className="text-xl font-bold gradient-text"
          whileHover={{ scale: 1.05 }}
        >
          Ashkan YZ
        </motion.a>

        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center gap-6">
            <Link
              href="#about"
              className="text-base font-medium transition-colors hover:text-primary"
            >
              About
            </Link>
            <Link
              href="#intern-insider"
              className="text-base font-medium transition-colors hover:text-primary"
            >
              My Company
            </Link>
            <Link
              href="#experience"
              className="text-base font-medium transition-colors hover:text-primary"
            >
              Experience
            </Link>
            <Link
              href="#skills"
              className="text-base font-medium transition-colors hover:text-primary"
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className="text-base font-medium transition-colors hover:text-primary"
            >
              Contact
            </Link>
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-medium transition-colors hover:text-primary"
            >
              Resume
            </a>
            {mounted && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="flex h-7 w-7 items-center justify-center rounded-md border border-input bg-background"
              >
                {theme === 'dark' ? (
                  <FiSun className="h-5 w-5" />
                ) : (
                  <FiMoon className="h-5 w-5" />
                )}
                <span className="sr-only">Toggle theme</span>
              </motion.button>
            )}
          </nav>
        </div>

        <div className="md:hidden flex items-center">
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full glass-effect"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden absolute top-full left-0 w-full bg-[hsl(var(--background))]/95 backdrop-blur-lg shadow-lg py-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="py-2 hover:text-[hsl(var(--primary))] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
