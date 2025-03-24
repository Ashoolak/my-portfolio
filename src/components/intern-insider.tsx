'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa';

const services = [
  {
    id: 'newsletter',
    title: 'Intern Insider Newsletter',
    description:
      "North America's largest tech and business internship newsletter with 77,000+ subscribers and a 56% open rate, delivering curated opportunities to students nationwide.",
    link: 'https://interninsider.me',
    cta: 'Subscribe Now',
    stats: [
      { value: '77,000+', label: 'Subscribers' },
      { value: '56%', label: 'Open Rate' },
      { value: 'Weekly', label: 'Updates' },
    ],
  },
  {
    id: 'job-board',
    title: 'Intern Insider Job Board',
    description:
      'Our premium job board features 7,000+ active internships from 10,000+ companies, scraped and updated every 15 minutes, with AI-powered data cleaning.',
    link: 'https://app.interninsider.me',
    cta: 'Explore Jobs',
    stats: [
      { value: '7,000+', label: 'Active Listings' },
      { value: '15 min', label: 'Update Cycle' },
      { value: 'AI', label: 'Data Cleaning' },
    ],
  },
  {
    id: 'bd-tool',
    title: 'Business Development Tool',
    description:
      'A powerful SaaS platform that helps university career centers find internship opportunities and connect with recruiters. Used by top Canadian universities to enhance their employer outreach and provide better opportunities for their students.',
    link: null,
    cta: 'Contact for Demo',
    hasUniversities: true,
  },
];

export function InternInsider() {
  const [activeService, setActiveService] = useState(services[0].id);

  return (
    <div className="relative">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--primary))]/5 to-transparent rounded-3xl -z-10"></div>

      {/* Logo and title */}
      <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden glass-effect flex items-center justify-center">
          <img
            src="/companies/InternInsider.png"
            alt="Intern Insider Logo"
            className="w-[85%] h-[85%] object-contain"
          />
        </div>
        <div className="text-center sm:text-left">
          <h3 className="text-2xl sm:text-3xl font-bold mb-2 gradient-text">
            Intern Insider
          </h3>
          <p className="text-[hsl(var(--muted-foreground))] text-sm sm:text-base mb-2">
            North America's largest tech & business internship platform
          </p>
        </div>
      </div>

      {/* Overview section */}
      <motion.div
        className="glass-effect p-8 rounded-2xl mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold mb-4">Platform Overview</h3>
        <p className="text-[hsl(var(--muted-foreground))] mb-6">
          Built and scaled Intern Insider to become North America's largest tech
          and business internship platform, providing opportunities to students
          nationwide. Our infrastructure monitors 10,000+ companies every 15
          minutes using advanced web scraping and AI-powered data cleaning
          technology to ensure high-quality listings.
        </p>
        <div className="flex flex-col sm:grid sm:grid-cols-3 gap-4 sm:gap-8 mt-6">
          <div className="glass-effect p-3 sm:p-4 rounded-xl text-center">
            <div className="text-lg sm:text-2xl font-bold gradient-text">
              77,000+
            </div>
            <div className="text-xs sm:text-sm text-[hsl(var(--muted-foreground))]">
              Subscribers
            </div>
          </div>
          <div className="glass-effect p-3 sm:p-4 rounded-xl text-center">
            <div className="text-lg sm:text-2xl font-bold gradient-text">
              56%
            </div>
            <div className="text-xs sm:text-sm text-[hsl(var(--muted-foreground))]">
              Open Rate
            </div>
          </div>
          <div className="glass-effect p-3 sm:p-4 rounded-xl text-center">
            <div className="text-lg sm:text-2xl font-bold gradient-text">
              Weekly
            </div>
            <div className="text-xs sm:text-sm text-[hsl(var(--muted-foreground))]">
              Updates
            </div>
          </div>
        </div>
      </motion.div>

      {/* Services tabs */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold mb-6">Our Services</h3>
        <div className="flex flex-wrap gap-4 mb-8">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeService === service.id
                  ? 'bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]'
                  : 'glass-effect hover:bg-[hsl(var(--primary))]/10'
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Active service details */}
        {services.map((service) => (
          <div
            key={service.id}
            className={`${activeService === service.id ? 'block' : 'hidden'}`}
          >
            <motion.div
              className="glass-effect p-8 rounded-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
                  <p className="text-[hsl(var(--muted-foreground))] mb-6">
                    {service.description}
                  </p>
                  {service.link ? (
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:opacity-90 transition-all"
                    >
                      {service.cta} <FaExternalLinkAlt className="w-3 h-3" />
                    </a>
                  ) : (
                    <a
                      href="mailto:team@interninsider.me"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:opacity-90 transition-all"
                    >
                      {service.cta} <FaEnvelope className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <div className="flex-1">
                  {service.hasUniversities ? (
                    <div className="space-y-4">
                      <h5 className="font-semibold text-sm sm:text-base">
                        Trusted by leading universities
                      </h5>
                      <div className="grid grid-cols-3 gap-3 sm:gap-4">
                        <div className="glass-effect p-2 rounded-full aspect-square flex items-center justify-center overflow-hidden bg-white w-16 h-16 sm:w-32 sm:h-32 mx-auto">
                          <img
                            src="/companies/UBC.png"
                            alt="UBC"
                            className="w-[85%] h-[85%] object-contain"
                          />
                        </div>
                        <div className="glass-effect p-2 rounded-full aspect-square flex items-center justify-center overflow-hidden bg-white w-16 h-16 sm:w-32 sm:h-32 mx-auto">
                          <img
                            src="/companies/UGuelph.png"
                            alt="University of Guelph"
                            className="w-[85%] h-[85%] object-contain"
                          />
                        </div>
                        <div className="glass-effect p-2 rounded-full aspect-square flex items-center justify-center overflow-hidden bg-white w-16 h-16 sm:w-32 sm:h-32 mx-auto">
                          <img
                            src="/companies/NU.png"
                            alt="Northeastern University"
                            className="w-[85%] h-[85%] object-contain scale-[1.2]"
                          />
                        </div>
                      </div>
                      <div className="text-center mt-2">
                        <span className="text-[hsl(var(--muted-foreground))] text-xs sm:text-sm">
                          And more universities across Canada
                        </span>
                      </div>
                    </div>
                  ) : service.stats ? (
                    <div className="flex flex-col sm:grid sm:grid-cols-3 gap-4">
                      {service.stats.map((stat, index) => (
                        <div
                          key={index}
                          className="glass-effect p-3 sm:p-4 rounded-xl text-center"
                        >
                          <div className="text-lg sm:text-2xl font-bold gradient-text">
                            {stat.value}
                          </div>
                          <div className="text-xs sm:text-sm text-[hsl(var(--muted-foreground))]">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </motion.div>

      {/* Contact CTA */}
      <motion.div
        className="glass-effect p-8 rounded-2xl bg-[hsl(var(--primary))]/5 border border-[hsl(var(--primary))]/20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">
              Interested in our services?
            </h3>
            <p className="text-[hsl(var(--muted-foreground))]">
              Reach out to discuss how Intern Insider can help your
              organization.
            </p>
          </div>
          <a
            href="mailto:team@interninsider.me"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:opacity-90 transition-all whitespace-nowrap"
          >
            Contact Us <FaArrowRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
