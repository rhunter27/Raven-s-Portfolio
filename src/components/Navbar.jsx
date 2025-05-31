import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Button from './Button';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`${styles.navbar} ${theme === 'dark' ? styles.dark : ''}`}>
      <div className={styles.logoContainer}>
        <a href="/" className={styles.logo}>
          <span className={styles.logoHighlight}>Portfolio</span>
        </a>
      </div>

      <div className={styles.navLinks}>
        <a href="#work" className={styles.navLink}>
          <span className={styles.linkNumber}>01.</span> Projects
        </a>
        <a href="#about" className={styles.navLink}>
          <span className={styles.linkNumber}>02.</span> About
        </a>
        <a href="#contact" className={styles.navLink}>
          <span className={styles.linkNumber}>03.</span> Contact
        </a>
      </div>

      <div className={styles.navActions}>
        <Button 
          variant="ghost" 
          size="small" 
          onClick={toggleTheme}
          aria-label={`Toggle ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </Button>
        <Button 
          variant="primary" 
          size="small" 
          onClick={() => window.location.href = '#contact'}
        >
          Let's Talk
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;