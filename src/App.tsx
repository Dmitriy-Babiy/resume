import { Footer, Header } from './components';
import { Home } from './sections';

function App() {
  return (
    <>
      <Header />
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

      <Footer />
    </>
  );
}

export default App;
