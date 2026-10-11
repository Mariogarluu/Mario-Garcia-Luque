import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { NebulaBackground } from './components/NebulaBackground';
import { NeuralBackground } from './components/NeuralBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const ActiveBackground: React.FC = () => {
  const { bgEffect } = useTheme();
  return bgEffect === 'neural' ? <NeuralBackground /> : <NebulaBackground />;
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ActiveBackground />
      <div className="portfolio-app">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Projects />
          <About />
          <Experience />
          <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
