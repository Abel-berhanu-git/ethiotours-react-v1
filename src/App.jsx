import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Galleries from './components/Galleries';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Tours from './components/Tours';
import Testimonials from './components/Testimonials';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Testimonials />
      <Contact />
      <Galleries />
      <Footer />
    </>
  );
};
export default App;
