import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      
      <ul className={styles.navbar__list}>
        <li style={{marginRight:"auto"}}>
          <Link href="/">
            <p className={styles.navbar__link1}>Home</p>
          </Link>
        </li>

        <li className={styles.navbar__item}>
          <Link href="/">
            <p className={styles.navbar__link}>What's On?</p>
          </Link>
        </li>

        <li className={styles.navbar__item}>
          <Link href="/about">
            <p className={styles.navbar__link}>About</p>
          </Link>
        </li>
        <li className={styles.navbar__item}>
          <Link href="/contact">
            <p className={styles.navbar__link}>Contact</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
