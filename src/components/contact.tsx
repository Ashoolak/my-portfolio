'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h3 className="text-2xl font-bold mb-4">Let's connect</h3>
        <p className="text-[hsl(var(--muted-foreground))] mb-6">
          I'm always interested in hearing about new projects and opportunities.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-[hsl(var(--primary))]" />
            <a
              href="mailto:ashkanyz70@gmail.com"
              className="hover:text-[hsl(var(--primary))] transition-colors"
            >
              ashkanyz70@gmail.com
            </a>
          </div>

          <div className="flex gap-4 mt-6">
            <motion.a
              href="https://github.com/AshhWu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-effect"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/ashkan-yazdizadeh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-effect"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://twitter.com/ashh_wu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-effect"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaTwitter className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>

      <div>
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-effect p-6 rounded-xl text-center"
          >
            <h3 className="text-xl font-bold mb-2">Message sent!</h3>
            <p>Thank you for reaching out. I'll get back to you soon.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-[hsl(var(--muted))]/20 border border-[hsl(var(--border))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-[hsl(var(--muted))]/20 border border-[hsl(var(--border))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full p-3 rounded-lg bg-[hsl(var(--muted))]/20 border border-[hsl(var(--border))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent"
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`w-full p-3 rounded-lg font-medium bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:opacity-90 transition-opacity ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
        )}
      </div>
    </div>
  );
}
