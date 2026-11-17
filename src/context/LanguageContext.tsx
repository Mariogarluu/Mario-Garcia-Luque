import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'es' | 'en';

export interface CVDownloadInfo {
  url: string;
  fileName: string;
  label: string;
  helperText: string;
  badge: string;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  cvDownload: CVDownloadInfo;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('portfolio_language') as Language;
      if (saved === 'es' || saved === 'en') return saved;
      const browserLang = typeof navigator !== 'undefined' ? navigator.language?.toLowerCase() || '' : '';
      return browserLang.startsWith('en') ? 'en' : 'es';
    } catch {
      return 'es';
    }
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('portfolio_language', lang);
      if (typeof document !== 'undefined') {
        document.documentElement.lang = lang;
      }
    } catch (e) {
      console.error('Error saving language preference:', e);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  // Si está en inglés: descarga CV General Sin Foto en inglés (normativo internacional para evitar sesgos)
  // Si está en español: descarga CV General Con Foto en español (norma de RRHH en España)
  const cvDownload: CVDownloadInfo = language === 'en'
    ? {
        url: '/cv/CV_General_SinFoto_EN.pdf',
        fileName: 'cv_Mario_García_Luque (General Sin Foto EN).pdf',
        label: 'Download CV',
        helperText: 'English · No Photo (Standard Normative)',
        badge: 'EN · No Photo',
      }
    : {
        url: '/cv/CV_General_Foto_ES.pdf',
        fileName: 'cv_Mario_García_Luque (General Con Foto ES).pdf',
        label: 'Descargar CV',
        helperText: 'Español · Con Foto (Oficial RRHH)',
        badge: 'ES · Con Foto',
      };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, cvDownload }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
