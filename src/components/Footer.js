import styles from '../styles/Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>&copy; {currentYear} Ashkan Yazdi Zadeh. All rights reserved.</p>
    </footer>
  );
}
