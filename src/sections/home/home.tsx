import { GithubIcon, TelegramIcon } from '../../assets/icons';
import styles from './home.module.scss';

export const Home = () => {
  return (
    <section className={styles.wrapper} id='Home'>
      <div>
        <div className={styles.hero}>
          <div className={styles.text}>
            <h1 className={styles.title}>Front-End React Developer</h1>
            <p className={styles.description}>
              Hi, I'm Dmitriy Babiy. A passionate Front-end React Developer
              based in Krasnoyarsk, Russian. 📍
            </p>
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
              <img src='https://skillicons.dev/icons?i=html,css' />
            </li>
            <li>
              <img src='https://skillicons.dev/icons?i=js,ts' />
            </li>
            <li>
              <img src='https://skillicons.dev/icons?i=react,next' />
            </li>
            <li>
              <img src='https://skillicons.dev/icons?i=tailwind,sass' />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
