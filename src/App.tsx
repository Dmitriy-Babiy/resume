import { Footer, Header } from './components';
import { About, Contacts, Home } from './sections';
import { Experience } from './sections/experience';

function App() {


  return (
    <>
      <Header />
      <Home />
      <About />
      <Experience />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
