import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Terminal, ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import './Footer.css';

export const Footer: React.FC = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer-main">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="footer-logo">
              <div className="logo-badge">
                <Terminal size={18} className="logo-icon" />
              </div>
              <span className="logo-text">
                Mario<span className="logo-accent">.dev</span>
              </span>
            </div>
            <p className="footer-tagline">
              Desarrollador Full Stack & Frontend especializado en React, TypeScript, Supabase y Node.js.
            </p>
            <div className="footer-socials">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="GitHub"
              >
                <GithubIcon size={17} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={17} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="social-icon-btn"
                aria-label="Email"
              >
                <Mail size={17} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Secciones</h4>
            <div className="footer-links-list">
              <a href="#sobre-mi">Sobre Mí</a>
              <a href="#habilidades">Habilidades</a>
              <a href="#experiencia">Experiencia</a>
              <a href="#proyectos">Proyectos</a>
              <a href="#formacion">Formación</a>
              <a href="#contacto">Contacto</a>
            </div>
          </div>

          {/* Deployment & Info */}
          <div className="footer-info-col">
            <h4 className="footer-col-title">Despliegue & Tech</h4>
            <p className="footer-deploy-text">
              Optimizado para despliegue 100% gratuito y continuo en <strong>Vercel</strong> o <strong>Cloudflare Pages</strong> con CI/CD desde GitHub.
            </p>
            <div className="footer-tech-pills">
              <span className="badge badge-purple">React 19</span>
              <span className="badge badge-purple">Vite</span>
              <span className="badge badge-green">TypeScript</span>
              <span className="badge badge-green">CSS3 Modules</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            © {new Date().getFullYear()} {personal.name}. Diseñado & Desarrollado con código limpio.
          </div>

          <button
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Volver arriba"
            title="Volver arriba"
          >
            <span>Subir</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};
