import { Footer, Header } from './components';
import { About, Contacts, Home } from './sections';

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />

      <section
        style={{ height: 1000, backgroundColor: '#f9f9f9' }}
        id='Projects'
      >
        Projects
      </section>

      <Contacts />
      <Footer />
    </>
  );
}

export default App;
