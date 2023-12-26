import { useTranslation } from 'react-i18next';
import { GithubIcon, TelegramIcon } from '@/assets/icons';
import styles from './footer.module.scss';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h3 className={styles.rights}>{t('footer.copyright')}</h3>
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
