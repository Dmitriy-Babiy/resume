import { Footer, Header } from './components';
import { About, Home } from './sections';

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />

      <section style={{ height: 1000, backgroundColor: '#f9f9f9' }} id='Projects'>
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
