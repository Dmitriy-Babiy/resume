import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styles from './experience.module.scss';

import { TIMELINE_ELEMENTS } from '../../data/timelineElements';

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
                contentStyle={{
                  background: 'rgb(33, 150, 243)',
                  color: '#fff',
                }}
                dateClassName={styles.date}
                textClassName={styles.card}
                iconClassName={styles.icon}
                className={styles.verticalTimelineWrapper}
                contentArrowStyle={{
                  borderRight: '7px solid  rgb(33, 150, 243)',
                }}
                date={element.date}
                icon={element.icon}
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
