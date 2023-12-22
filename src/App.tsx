import { Header } from './components';
import { Home } from './sections';

import styles from './app.module.scss';

export const App = () => {
  return (
    <>
      <Header />

      <div className={styles.container}>
        <Home />

        <section style={{ height: 1000 }} id='About'>
          About
        </section>

        <section style={{ height: 1000 }} id='Projects'>
          Projects
        </section>

        <section style={{ height: 1000 }} id='Contacts'>
          Contacts
        </section>
      </div>
    </>
  );
};
