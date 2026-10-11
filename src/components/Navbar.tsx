import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X, Terminal, ArrowUpRight } from 'lucide-react';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Sobre Mí', href: '#sobre-mi' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Formación', href: '#formacion' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
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
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="nav-actions">
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
            <span className="theme-label-hint">
              {theme === 'dark' ? 'Claro' : 'Oscuro'}
            </span>
          </button>

          {/* Quick Contact CTA */}
          <a href="#contacto" className="btn btn-sm btn-primary nav-cta">
            <span>Hablemos</span>
            <ArrowUpRight size={15} />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle-btn"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-links">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="mobile-menu-footer">
              <a
                href="#contacto"
                className="btn btn-primary"
                style={{ width: '100%' }}
                onClick={handleLinkClick}
              >
                <span>Contactar</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
