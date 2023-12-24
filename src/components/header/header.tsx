import { Link, animateScroll } from 'react-scroll';

import styles from './header.module.scss';

const NAVIGATION = ['Home', 'About', 'Projects', 'Contacts'];

export const Header = () => {
  return (
    <header className={styles.header}>
      <h3
        onClick={() => animateScroll.scrollToTop({ duration: 500 })}
        className={styles.logo}
      >
        Dmitriy.Dev
      </h3>
      <ul className={styles.navigation}>
        {NAVIGATION.map((route) => (
          <li key={route}>
            <Link smooth to={route} offset={-80} duration={500}>
              {route}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};
