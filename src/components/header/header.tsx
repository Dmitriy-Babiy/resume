import { Link, animateScroll } from 'react-scroll';

import styles from './header.module.scss';

const navigation = ['Home', 'About', 'Projects', 'Contacts'];

export const Header = () => {
  return (
    <header className={styles.header}>
      <span
        onClick={() => animateScroll.scrollToTop({ duration: 500 })}
        className={styles.logo}
      >
        Dmitriy.Dev
      </span>
      <ul className={styles.navigation}>
        {navigation.map((route) => (
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
