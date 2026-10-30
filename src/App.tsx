import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { NeuralBackground } from './components/NeuralBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LegalModal, type LegalTab } from './components/LegalModal';

export const App: React.FC = () => {
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [activeLegalTab, setActiveLegalTab] = useState<LegalTab>('privacidad');

  const handleOpenLegal = (tab: LegalTab) => {
    setActiveLegalTab(tab);
    setIsLegalOpen(true);
  };

  const handleCloseLegal = () => {
    setIsLegalOpen(false);
  };

  return (
    <ThemeProvider>
      <NeuralBackground />
      <div className="portfolio-app">
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Services />
          <About />
          <Contact onOpenLegal={handleOpenLegal} />
        </main>
        <Footer onOpenLegal={handleOpenLegal} />

        <LegalModal
          isOpen={isLegalOpen}
          activeTab={activeLegalTab}
          onClose={handleCloseLegal}
          onTabChange={setActiveLegalTab}
        />
      </div>
    </ThemeProvider>
  );
};

export default App;
