import './App.css';
import Contact from './sections/Contact/Contact';
import Education from './sections/Education/Education';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import SideProject from './sections/SideProject/SideProject';
import Skills from './sections/Skills/Skills';

function App() {
  return (
    <>
      <Hero />
      <Projects />
      <SideProject/>
      <Skills />
      <Education/>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
