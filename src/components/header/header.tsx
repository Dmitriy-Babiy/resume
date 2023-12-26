import { Link, animateScroll } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { LanguageSelect } from '@components/language-select';
import styles from './header.module.scss';

const NAVIGATION = ['Home', 'About', 'Experience', 'Contacts'];

export const Header = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <header className={styles.header}>
      <h3
        onClick={() => animateScroll.scrollToTop({ duration: 500 })}
        className={styles.logo}
      >
        {t('Dmitriy.dev')}
      </h3>
      <div className={styles.rightSide}>
        <ul className={styles.navigation}>
          {NAVIGATION.map((route) => (
            <li key={route}>
              <Link smooth to={route} offset={-80} duration={500}>
                {t(`header.navigation.${route}`)}
              </Link>
            </li>
          ))}
        </ul>
        <LanguageSelect
          onChange={changeLanguage}
          className={styles.select}
          selected={i18n.language.slice(0, 2)}
          options={[
            { value: 'en', label: 'EN' },
            { value: 'ru', label: 'RU' },
          ]}
        />
      </div>
    </header>
  );
};
