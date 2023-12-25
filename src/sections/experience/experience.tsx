import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { useTranslation } from 'react-i18next';
import { TIMELINE_ELEMENTS } from '../../data/constants/timelineElements';
import clsx from 'clsx';
import 'react-vertical-timeline-component/style.min.css';
import styles from './experience.module.scss';

export const Experience = () => {
  const { t } = useTranslation();

  const translationElement = `experience.element`;

  return (
    <section className={styles.wrapper} id='Experience'>
      <div className={styles.container}>
        <div className={styles.content}>
          <h3>{t('experience.title')}</h3>
          <h4>{t('experience.subtitle')}</h4>
          <VerticalTimeline>
            {TIMELINE_ELEMENTS.map((element, index) => (
              <VerticalTimelineElement
                key={element.id}
                date={t(`${translationElement}${index}.date`)}
                icon={element.icon}
                dateClassName={styles.date}
                textClassName={styles.card}
                className={styles.verticalTimelineWrapper}
                iconClassName={clsx(styles.icon, {
                  [styles.green]: element.color === 'green',
                  [styles.orange]: element.color === 'orange',
                })}
              >
                <h3>{t(`${translationElement}${index}.title`)}</h3>
                <h4>{t(`${translationElement}${index}.subtitle`)}</h4>
                <p>{t(`${translationElement}${index}.description`)}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

// {t(`${translationContact}${index}.description`)}
