'use client';

import { motion } from 'framer-motion';

export function WorkExperience() {
  return (
    <div className="space-y-12">
      {/* Amazon */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="glass-effect p-6 rounded-xl"
      >
        <div className="flex flex-col md:flex-row gap-4 items-start">
          <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden glass-effect flex items-center justify-center bg-white">
            <img
              src="/companies/Amazon.png"
              alt="Amazon Logo"
              className="w-[85%] h-[85%] object-contain scale-[1.5]"
            />
          </div>
          <div className="flex-grow">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 className="text-xl font-bold">
                Software Development Intern, Amazon
              </h3>
              <span className="text-[hsl(var(--muted-foreground))]">
                Summer 2025 (Incoming)
              </span>
            </div>
            <p className="mb-4">
              Incoming Software Development Intern at Amazon in Toronto, ON,
              will be working on the RDS for DB2 team.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-sm bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))]">
                AWS
              </span>
              <span className="px-3 py-1 rounded-full text-sm bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))]">
                DB2
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* KPMG */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="glass-effect p-4 sm:p-6 rounded-xl"
      >
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden glass-effect flex items-center justify-center bg-white">
            <img
              src="/companies/KPMG.png"
              alt="KPMG Logo"
              className="w-[85%] h-[85%] object-contain scale-[1.7]"
            />
          </div>
          <div className="flex-grow">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-1">
              <h3 className="text-lg sm:text-xl font-bold">
                Software Engineer Intern, KPMG
              </h3>
              <span className="text-sm sm:text-base text-[hsl(var(--muted-foreground))]">
                September 2023 - April 2024
              </span>
            </div>
            <p className="mb-4 text-sm sm:text-base">
              Working as a Software Engineer Intern at KPMG in Toronto, ON.
            </p>
            <div className="space-y-2">
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
                <li>
                  Addressed client support tickets, identifying and resolving
                  errors within the C# and Vue.js codebases, which honed my
                  debugging skills and improved my proficiency with large,
                  complex code structures using object-oriented programming.
                </li>
                <li>
                  Created a full-stack module to automate USD to CAD exchange
                  rate retrieval, integrating front-end, back-end, and database
                  management, not only streamlining financial reporting but also
                  reducing manual data checks by 90%.
                </li>
                <li>
                  Optimized the Excel export process by implementing a new C#
                  method that consolidated data into an array before exporting
                  to Excel, cutting export times by 60%.
                </li>
                <li>
                  Actively participated in Agile development cycles, using Azure
                  DevOps to better coordinate with the team and ensure timely
                  delivery of software updates and features.
                </li>
              </ul>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))]">
                C#
              </span>
              <span className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))]">
                Vue.js
              </span>
              <span className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))]">
                Azure DevOps
              </span>
              <span className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))]">
                SQL Server
              </span>
              <span className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))]">
                Agile
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* UBC */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="glass-effect p-4 sm:p-6 rounded-xl"
      >
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden glass-effect flex items-center justify-center bg-white">
            <img
              src="/companies/UBC.png"
              alt="UBC Logo"
              className="w-[85%] h-[85%] object-contain"
            />
          </div>
          <div className="flex-grow">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-1">
              <h3 className="text-lg sm:text-xl font-bold">
                Web Developer, University of British Columbia
              </h3>
              <span className="text-sm sm:text-base text-[hsl(var(--muted-foreground))]">
                May 2023 - August 2023
              </span>
            </div>
            <p className="mb-4 text-sm sm:text-base">
              Worked as a Web Developer at UBC in Vancouver, BC.
            </p>
            <div className="space-y-2">
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
                <li>
                  Developed a full-stack e-commerce site for UBC health and
                  wellness utilizing React.js (Next.js 13), MongoDB, and EmailJS
                  for enhanced user experience and real-time transaction
                  confirmations.
                </li>
                <li>
                  Implemented Python-based web scraping with Selenium, reducing
                  data collection time from 500 minutes to less than 10 minutes
                  for 500+ websites.
                </li>
                <li>
                  Designed a Python script to analyze and visualize data with
                  graphs revealing a 37% increase in time spent on the website
                  for users who declined cookie banners.
                </li>
                <li>
                  Employed Tailwind CSS for an intuitive UI and enabled
                  user-specific content retrieval using URL query parameters.
                </li>
              </ul>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))]">
                React.js
              </span>
              <span className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))]">
                Next.js
              </span>
              <span className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))]">
                MongoDB
              </span>
              <span className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))]">
                Python
              </span>
              <span className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))]">
                Tailwind CSS
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Innovenium */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="glass-effect p-4 sm:p-6 rounded-xl"
      >
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden glass-effect flex items-center justify-center bg-white">
            <img
              src="/companies/Innovenium.png"
              alt="Innovenium Logo"
              className="w-[85%] h-[85%] object-contain"
            />
          </div>
          <div className="flex-grow">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-1">
              <h3 className="text-lg sm:text-xl font-bold">
                Financial Analyst, Innovenium Technologies Inc.
              </h3>
              <span className="text-sm sm:text-base text-[hsl(var(--muted-foreground))]">
                May 2022 - August 2022
              </span>
            </div>
            <p className="mb-4 text-sm sm:text-base">
              Worked as a Financial Analyst at Innovenium Technologies Inc. in
              Vancouver, BC.
            </p>
            <div className="space-y-2">
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
                <li>
                  Secured investments via strategic outreach and persuasive
                  pitch deck.
                </li>
                <li>Allocated funds for multiple business functions.</li>
                <li>
                  Employed SWOT analysis for pitch deck and utilized zero-based
                  budgeting for effective fund management.
                </li>
                <li>
                  Raised over $20,000 in three months, fueling the startup's
                  main financial framework.
                </li>
              </ul>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))]">
                SWOT Analysis
              </span>
              <span className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))]">
                Fund Raising
              </span>
              <span className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))]">
                Pitch Deck
              </span>
              <span className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))]">
                Budgeting
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
