import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';
export type BgEffect = 'neural' | 'nebula';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  bgEffect: BgEffect;
  toggleBgEffect: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('mario_portfolio_theme') as Theme | null;
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
    return 'dark'; // Dark is the requested default
  });

  const [bgEffect, setBgEffect] = useState<BgEffect>(() => {
    const savedBg = localStorage.getItem('mario_portfolio_bg_effect') as BgEffect | null;
    if (savedBg === 'neural' || savedBg === 'nebula') {
      return savedBg;
    }
    return 'neural'; // Neural Network is the newly selected choice
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('mario_portfolio_theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('mario_portfolio_bg_effect', bgEffect);
  }, [bgEffect]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleBgEffect = () => {
    setBgEffect(prev => (prev === 'neural' ? 'nebula' : 'neural'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, bgEffect, toggleBgEffect }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
