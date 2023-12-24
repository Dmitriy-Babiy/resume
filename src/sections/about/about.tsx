import { CircleTextIcon } from '../../assets/icons';
import styles from './about.module.scss';

export const About = () => {
  return (
    <section id='About' className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <img
              className={styles.mainImg}
              src='/public/static/images/laptop.png'
              alt='laptop-img'
            />
            <img
              className={styles.secondaryImg}
              src='public/static/images/working-emoji.png'
              alt='working-emoji-img'
            />
            <span>
              <CircleTextIcon />
            </span>
          </div>

          <div className={styles.right}>
            <h3>ABOUT ME</h3>
            <h4>
              A dedicated Front-end Developer based in Krasnoyarsk, Russian 📍
            </h4>
            <p>
              As a Junior Front-End Developer, I possess an impressive arsenal
              of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I
              excel in designing and maintaining responsive websites that offer
              a smooth user experience. My expertise lies in crafting dynamic,
              engaging interfaces through writing clean and optimized code and
              utilizing cutting-edge development tools and techniques. I am also
              a team player who thrives in collaborating with cross-functional
              teams to produce outstanding web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
