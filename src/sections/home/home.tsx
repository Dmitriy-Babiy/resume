import { useTranslation } from 'react-i18next';
import { GithubIcon, TelegramIcon } from '../../assets/icons';
import styles from './home.module.scss';

export const Home = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.wrapper} id='Home'>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.hero}>
            <div className={styles.text}>
              <h1 className={styles.title}>{t('home.title')}</h1>
              <p className={styles.description}>{t('home.description')}</p>
              <span className={styles.links}>
                <a href='https://t.me/Fosgensil' target='_blank'>
                  <TelegramIcon />
                </a>
                <a href='https://github.com/Dmitriy-Babiy' target='_blank'>
                  <GithubIcon />
                </a>
              </span>
            </div>
            <div className={styles.img}></div>
          </div>
          <div className={styles.skills}>
            <span>Tech Stack</span>
            <ul>
              <li>
                <img
                  src='https://skillicons.dev/icons?i=html,css'
                  alt='html-css-img'
                />
              </li>
              <li>
                <img
                  src='https://skillicons.dev/icons?i=js,ts'
                  alt='js-ts-img'
                />
              </li>
              <li>
                <img
                  src='https://skillicons.dev/icons?i=react,next'
                  alt='react-next-img'
                />
              </li>
              <li>
                <img
                  src='https://skillicons.dev/icons?i=tailwind,sass'
                  alt='tailwind-sass-img'
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
