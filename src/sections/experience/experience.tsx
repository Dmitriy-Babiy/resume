import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styles from './experience.module.scss';

import { TIMELINE_ELEMENTS } from '../../data/timelineElements';
import clsx from 'clsx';

export const Experience = () => {
  return (
    <section className={styles.wrapper} id='Experience'>
      <div className={styles.container}>
        <div className={styles.content}>
          <h3>EXPERIENCE</h3>
          <h4>Each project is a unique piece of development 🧩</h4>
          <VerticalTimeline>
            {TIMELINE_ELEMENTS.map((element) => (
              <VerticalTimelineElement
                date={element.date}
                icon={element.icon}
                dateClassName={styles.date}
                textClassName={styles.card}
                className={styles.verticalTimelineWrapper}
                iconClassName={clsx(styles.icon, {
                  [styles.green]: element.color === 'green',
                  [styles.orange]: element.color === 'orange',
                })}
              >
                <h3>{element.title}</h3>
                <h4>{element.subTitle}</h4>
                <p>{element.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};
