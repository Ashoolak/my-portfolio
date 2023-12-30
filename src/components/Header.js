import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.nav}>
        <a className="text-2xl font-bold" href="#About">
          Home
        </a>
      </div>
      <nav className={styles.nav}>
        <a href="#Work-Experience">Work Experience</a>
        <a href="#Projects">Projects</a>
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
