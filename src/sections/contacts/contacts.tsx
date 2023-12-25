import { useTranslation } from 'react-i18next';
import { EmailIcon, LocationIcon } from '../../assets/icons';
import styles from './contacts.module.scss';

const CONTACTS = [
  {
    icon: <LocationIcon />,
    href: 'https://www.google.ru/maps/place/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D1%8F%D1%80%D1%81%D0%BA,+%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D1%8F%D1%80%D1%81%D0%BA%D0%B8%D0%B9+%D0%BA%D1%80%D0%B0%D0%B9/@56.0185185,92.8269982,12.5z/data=!4m6!3m5!1s0x5cd7afc9a1ff37e3:0xd597e1468fd647ff!8m2!3d56.0152834!4d92.8932476!16zL20vMGpoYjQ?entry=ttu',
    target: '_blank',
  },
  {
    icon: <EmailIcon />,
    href: 'mailto:dimascelecto@gmail.com',
    target: '_parent',
  },
];

export const Contacts = () => {
  const { t } = useTranslation();

  const translationContact = `contacts.contact`;

  return (
    <section className={styles.wrapper} id='Contacts'>
      <div className={styles.container}>
        <div className={styles.content}>
          <h3>{t('contacts.title')}</h3>
          <h4>{t('contacts.subtitle')}</h4>
          <div className={styles.contacts}>
            {CONTACTS.map((contact, index) => (
              <div key={index} className={styles.contact}>
                <div className={styles.icon}>{contact.icon}</div>
                <div className={styles.text}>
                  <h3>{t(`${translationContact}${index}.title`)}</h3>
                  <a target={contact.target} href={contact.href}>
                    {t(`${translationContact}${index}.description`)}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
