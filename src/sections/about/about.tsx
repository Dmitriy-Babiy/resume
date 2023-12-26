import { useTranslation } from 'react-i18next';
import { CircleTextIcon } from '@/assets/icons';
import styles from './about.module.scss';

export const About = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.wrapper} id='About'>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <img
              className={styles.mainImg}
              src='/static/images/laptop.png'
              alt='laptop-img'
            />
            <img
              className={styles.secondaryImg}
              src='/static/images/working-emoji.png'
              alt='working-emoji-img'
            />
            <span>
              <CircleTextIcon />
            </span>
          </div>

          <div className={styles.right}>
            <h3>{t('about.title')}</h3>
            <h4>{t('about.subtitle')}</h4>
            <p>{t('about.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
