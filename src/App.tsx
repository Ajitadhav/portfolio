import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SpaceBackground from './components/SpaceBackground';

function App() {
  return (
    <div className="relative min-h-screen">
      <SpaceBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
