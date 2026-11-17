import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { Sun, Moon, Menu, X, Terminal, ArrowUpRight, Download, Languages } from 'lucide-react';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, cvDownload } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll and handle Escape key when mobile menu is open (especially on iOS Safari)
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setMobileMenuOpen(false);
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [mobileMenuOpen]);

  const allNavLinks = language === 'en' ? [
    { label: 'Skills', href: '#habilidades' },
    { label: 'Experience', href: '#experiencia' },
    { label: 'Projects', href: '#proyectos' },
    { label: 'Education', href: '#formacion' },
    { label: 'Services', href: '#servicios' },
    { label: 'About', href: '#sobre-mi' },
    { label: 'Contact', href: '#contacto' },
  ] : [
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Formación', href: '#formacion' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Sobre Mí', href: '#sobre-mi' },
    { label: 'Contacto', href: '#contacto' },
  ];

  // En la barra de escritorio, 'Contacto' ya está cubierto por el botón de acción principal 'Hablemos ↗'
  const desktopNavLinks = allNavLinks.filter((link) => link.href !== '#contacto');

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Brand / Logo */}
          <a href="#" className="navbar-logo">
            <div className="logo-badge">
              <Terminal size={18} className="logo-icon" />
            </div>
            <span className="logo-text">
              Mario<span className="logo-accent">.dev</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" aria-label="Navegación principal">
            {desktopNavLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="nav-actions">
            {/* Language Switcher Toggle */}
            <button
              onClick={toggleLanguage}
              className="lang-toggle-btn"
              aria-label={`Cambiar a ${language === 'es' ? 'Inglés' : 'Español'}`}
              title={`Idioma actual: ${language === 'es' ? 'Español' : 'English'}. Clic para cambiar.`}
            >
              <Languages size={14} className="lang-icon" />
              <span>{language.toUpperCase()}</span>
            </button>

            {/* CV Download Button (Tailored by Language Norms) */}
            <a
              href={cvDownload.url}
              download={cvDownload.fileName}
              className="btn btn-sm btn-outline-cv"
              title={`${cvDownload.label} (${cvDownload.helperText})`}
            >
              <Download size={14} />
              <span className="cv-label-full">{cvDownload.label}</span>
              <span className="cv-label-short">CV</span>
            </a>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              aria-label={`Cambiar a modo ${theme === 'dark' ? 'claro' : 'oscuro'}`}
              title={`Modo actual: ${theme === 'dark' ? 'Oscuro' : 'Claro'}. Clic para cambiar.`}
            >
              <div className={`theme-toggle-slider ${theme}`}>
                {theme === 'dark' ? (
                  <Sun size={17} className="theme-icon sun" />
                ) : (
                  <Moon size={17} className="theme-icon moon" />
                )}
              </div>
            </button>

            {/* Quick Contact CTA */}
            <a href="#contacto" className="btn btn-sm btn-primary nav-cta">
              <span>{language === 'en' ? "Let's Talk" : 'Hablemos'}</span>
              <ArrowUpRight size={15} />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle-btn"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Rendered via React Portal directly into body to avoid iOS Safari backdrop-filter clipping bug) */}
      {mobileMenuOpen &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            className="mobile-menu-overlay"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden={!mobileMenuOpen}
          >
            <div
              className="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Menú de navegación móvil"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drawer Header */}
              <div className="mobile-menu-header">
                <a href="#" className="navbar-logo" onClick={handleLinkClick}>
                  <div className="logo-badge">
                    <Terminal size={18} className="logo-icon" />
                  </div>
                  <span className="logo-text">
                    Mario<span className="logo-accent">.dev</span>
                  </span>
                </a>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="mobile-close-btn"
                  aria-label="Cerrar menú"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="mobile-menu-links" aria-label="Navegación móvil">
                {allNavLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="mobile-nav-link"
                    onClick={handleLinkClick}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight size={16} className="mobile-nav-arrow" />
                  </a>
                ))}
              </nav>

              {/* Drawer Footer Actions */}
              <div className="mobile-menu-footer">
                {/* Mobile Language Toggle */}
                <div className="mobile-menu-theme-row">
                  <span className="mobile-theme-label">Idioma / Language</span>
                  <button
                    onClick={toggleLanguage}
                    className="mobile-lang-btn"
                  >
                    <Languages size={15} className="lang-icon" />
                    <span>{language === 'es' ? 'Español (ES)' : 'English (EN)'}</span>
                  </button>
                </div>

                {/* Mobile Theme Toggle */}
                <div className="mobile-menu-theme-row">
                  <span className="mobile-theme-label">Tema visual</span>
                  <button
                    onClick={toggleTheme}
                    className="theme-toggle-btn mobile-theme-btn"
                    aria-label={`Cambiar a modo ${theme === 'dark' ? 'claro' : 'oscuro'}`}
                  >
                    <div className={`theme-toggle-slider ${theme}`}>
                      {theme === 'dark' ? (
                        <Sun size={16} className="theme-icon sun" />
                      ) : (
                        <Moon size={16} className="theme-icon moon" />
                      )}
                    </div>
                    <span>{theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}</span>
                  </button>
                </div>

                {/* Mobile CV Download Button */}
                <a
                  href={cvDownload.url}
                  download={cvDownload.fileName}
                  className="mobile-cv-btn"
                  onClick={handleLinkClick}
                >
                  <Download size={16} />
                  <span>{cvDownload.label} ({cvDownload.badge})</span>
                </a>

                <a
                  href="#contacto"
                  className="btn btn-primary mobile-cta-btn"
                  onClick={handleLinkClick}
                >
                  <span>{language === 'en' ? 'Get In Touch' : 'Contactar'}</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};
