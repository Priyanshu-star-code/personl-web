import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useAITheme } from './hooks/useAITheme';
import { useCursor } from './hooks/useCursor';
import './styles/cursor.css';

function App() {
  const [isDark, setIsDark] = useState(true);
  const { contrast, brightness } = useAITheme();
  useCursor();

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const themeStyle = {
    filter: `contrast(${contrast}) brightness(${brightness})`,
    transition: 'filter 0.5s ease-in-out',
  };

  return (
    <div 
      className={isDark ? 'bg-black' : 'bg-white'}
      style={themeStyle}
    >
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <Hero isDark={isDark} />
      <About isDark={isDark} />
      <Projects isDark={isDark} />
      <Skills isDark={isDark} />
      <Experience isDark={isDark} />
      <Contact isDark={isDark} />
      <Footer isDark={isDark} />
    </div>
  );
}

export default App;