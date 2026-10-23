import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  Briefcase, 
  Rocket, 
  Layers, 
  Sparkles 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, DiscordIcon } from './Icons';
import './Hero.css';

export const Hero: React.FC = () => {
  const { personal, quickStats } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [copiedDiscord, setCopiedDiscord] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleCopyDiscord = () => {
    navigator.clipboard.writeText(personal.discord);
    setCopiedDiscord(true);
    setTimeout(() => setCopiedDiscord(false), 2200);
  };

  return (
    <section className="hero-section" id="inicio">
      <div className="container hero-container">
        {/* Left Column: Personal Brand & Positioning */}
        <div className="hero-content">
          {/* Dual Availability Pill */}
          <div className="hero-badge">
            <span className="status-dot"></span>
            <span className="hero-badge-text">Disponible para Empleo & Proyectos Freelance</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-title">
            Hola, soy <span className="hero-name">{personal.name}</span>
            <span className="hero-title-role">
              <span className="gradient-text">{personal.role}</span>
            </span>
          </h1>

          {/* Punchy Narrative Pitch */}
          <p className="hero-description">
            Combino el rigor de <strong>42 Málaga</strong> y doble grado superior (<strong>DAW + DAM</strong>) con experiencia real en <strong>React, TypeScript, Supabase y modelos de IA</strong>. Creo productos digitales que no solo se ven profesionales, sino que resuelven problemas reales y cargan al instante.
          </p>

          {/* Dual Value Proposition: Empresas vs Freelance */}
          <div className="hero-intent-cards">
            <div className="glass-card intent-card">
              <div className="intent-header">
                <Briefcase size={16} className="intent-icon purple" />
                <span className="intent-title">Para Empresas & Startups</span>
              </div>
              <p className="intent-desc">
                Incorporación inmediata en Málaga (presencial/híbrido) o 100% remoto. Código mantenible, arquitectura modular y autonomía técnica.
              </p>
            </div>

            <div className="glass-card intent-card">
              <div className="intent-header">
                <Rocket size={16} className="intent-icon green" />
                <span className="intent-title">Para Clientes Freelance</span>
              </div>
              <p className="intent-desc">
                Desarrollo completo de MVPs, plataformas web modernas, bases de datos con Supabase y automatización de procesos con IA.
              </p>
            </div>
          </div>

          {/* Call to Actions */}
          <div className="hero-cta-group">
            <a href="#contacto" className="btn btn-primary">
              <span>Hablemos de tu proyecto / vacante</span>
              <ArrowRight size={17} />
            </a>

            <a href="#proyectos" className="btn btn-secondary">
              <Layers size={17} />
              <span>Ver Proyectos</span>
            </a>

            <button 
              onClick={handleCopyEmail} 
              className="btn btn-outline-green"
              title="Copiar email al portapapeles"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              <span>{copied ? '¡Email Copiado!' : 'Copiar Email'}</span>
            </button>
          </div>

          {/* Social Links & Quick Contact */}
          <div className="hero-social-strip">
            <span className="social-label">Contacto directo:</span>
            <div className="social-links">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="GitHub de Mario"
                title="Ver GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn de Mario"
                title="Ver LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <button
                type="button"
                onClick={handleCopyDiscord}
                className="social-icon-btn btn-social-reset"
                aria-label="Discord de Mario (mariogarlu)"
                title={copiedDiscord ? '¡Discord copiado: @mariogarlu!' : 'Copiar Discord: @mariogarlu'}
              >
                {copiedDiscord ? <Check size={18} className="text-green" /> : <DiscordIcon size={18} />}
              </button>
              <a
                href={`mailto:${personal.email}`}
                className="social-icon-btn"
                aria-label="Enviar Email a Mario"
                title="Enviar Email"
              >
                <Mail size={18} />
              </a>
              <a
                href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                className="social-icon-btn"
                aria-label="Llamar a Mario"
                title="Llamar por teléfono"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Authentic Human Presentation with Real Photo */}
        <div className="hero-photo-wrapper">
          <div className="hero-photo-card glass-card">
            <div className="card-top-accent"></div>
            
            <div className="photo-frame">
              <img 
                src={personal.photo} 
                alt="Mario García Luque - Desarrollador Full Stack" 
                className="hero-avatar-img"
              />
              <div className="photo-overlay-gradient"></div>
            </div>

            {/* Floating Info Chips */}
            <div className="floating-chip top-left">
              <span className="chip-indicator purple"></span>
              <span className="chip-text">Full Stack & Frontend</span>
            </div>

            <div className="floating-chip bottom-right">
              <Sparkles size={14} className="chip-sparkle green" />
              <span className="chip-text">42 Málaga + DAW + DAM</span>
            </div>

            {/* Bottom mini-bio info */}
            <div className="photo-caption-bar">
              <div className="caption-text">
                <span className="caption-name">{personal.name}</span>
                <span className="caption-sub">Alhaurín de la Torre, Málaga</span>
              </div>
              <div className="caption-badge">
                <span className="badge badge-green">Activo</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="container">
        <div className="hero-stats-grid">
          {quickStats.map((stat, idx) => (
            <div key={idx} className="glass-card stat-item">
              <div className="stat-value gradient-text">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-detail">{stat.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
