import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/Header.module.css';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className={styles.header}>
      <a className={styles.brandName} href="#About">
        Ashkan YZ
      </a>
      <button className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
        <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} size="lg" />
      </button>
      <nav className={isMobileMenuOpen ? styles.mobileNav : styles.desktopNav}>
        <a href="/#Work-Experience">Work Experience</a>
        <a href="/#Projects">Projects</a>
        <a href="../Resume.pdf" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
        <a
          href="https://www.linkedin.com/in/ashkan-yazdi-zadeh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://github.com/Ashoolak"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="mailto:ashkanyz70@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
      </nav>
    </header>
  );
}
