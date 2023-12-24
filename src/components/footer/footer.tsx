import { GithubIcon, TelegramIcon } from '../../assets/icons';
import styles from './footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h3 className={styles.rights}>Copyright © 2023. All rights are reserved</h3>
        <div className={styles.links}>
          <a href='https://t.me/Fosgensil' target='_blank'>
            <TelegramIcon />
          </a>
          <a href='https://github.com/Dmitriy-Babiy' target='_blank'>
            <GithubIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};
