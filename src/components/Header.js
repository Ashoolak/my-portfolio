import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/Header.module.css';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const closeSandwichMenu = () => setIsMobileMenuOpen(false);

  // Define a new function that both toggles the menu and allows for navigation
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false); // This ensures the menu closes upon clicking a link
  };

  return (
    <header className={styles.header}>
      <a
        className={styles.brandName}
        href="/#About"
        onClick={closeSandwichMenu}
      >
        Ashkan YZ
      </a>
      <button className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
        <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} size="lg" />
      </button>
      <nav className={isMobileMenuOpen ? styles.mobileNav : styles.desktopNav}>
        {/* Add onClick={handleLinkClick} to each link */}
        <a
          href="/#Work-Experience"
          onClick={handleLinkClick}
          className="text-xl"
        >
          Work Experience
        </a>
        <a href="/#Projects" onClick={handleLinkClick} className="text-xl">
          Projects
        </a>
        <a
          href="../Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
          className="text-xl"
        >
          Resume
        </a>
        <a
          href="https://www.linkedin.com/in/ashkan-yazdi-zadeh"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://github.com/Ashoolak"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="mailto:ashkanyz70@gmail.com" onClick={handleLinkClick}>
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
      </nav>
    </header>
  );
}
