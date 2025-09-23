import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Navigation from './components/Navigation';
import ThemeToggle from './components/ThemeToggle';
import GeminiChat from './components/GeminiChat';
import Footer from './components/Footer';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Contact from './sections/Contact';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
      <ThemeToggle />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      
      <Footer />
      <GeminiChat />
    </div>
  );
}

export default App;