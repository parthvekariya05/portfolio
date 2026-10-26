import { useActiveSection } from './hooks';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './responsive.css'; // keep this LAST

const SECTIONS = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];

export default function App() {
  const activeSection = useActiveSection(SECTIONS);

  return (
    <>
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
