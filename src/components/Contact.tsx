import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import './Contact.css';

export const Contact: React.FC = () => {
  const { personal } = portfolioData;

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger mailto with user's content as a direct backup
    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(formData.subject || `Contacto desde Portfolio de ${formData.name}`)}&body=${encodeURIComponent(`De: ${formData.name} (${formData.email})\n\nMensaje:\n${formData.message}`)}`;
    
    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  return (
    <section className="section-wrapper" id="contacto">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <Mail size={14} />
            <span>Contacto Directo</span>
          </div>
          <h2 className="section-title">
            ¿Tienes un proyecto o vacante? <br className="hidden-mobile" />
            <span className="gradient-text">Hablemos hoy mismo</span>
          </h2>
          <p className="section-subtitle">
            Disponible para incorporación inmediata en Málaga (presencial/híbrido) o en remoto para cualquier ubicación.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="contact-grid">
          {/* Left Column: Direct Info Cards */}
          <div className="contact-info-col">
            {/* Email Card */}
            <div className="glass-card contact-channel-card">
              <div className="channel-icon-box">
                <Mail size={22} className="channel-icon purple" />
              </div>
              <div className="channel-content">
                <span className="channel-label">Correo Electrónico</span>
                <a href={`mailto:${personal.email}`} className="channel-value">
                  {personal.email}
                </a>
              </div>
              <button 
                onClick={handleCopyEmail}
                className="channel-action-btn"
                title="Copiar email"
                aria-label="Copiar email"
              >
                {copiedEmail ? <Check size={16} className="text-green" /> : <Copy size={16} />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-card contact-channel-card">
              <div className="channel-icon-box">
                <Phone size={22} className="channel-icon green" />
              </div>
              <div className="channel-content">
                <span className="channel-label">Teléfono Móvil</span>
                <a href={`tel:${personal.phone.replace(/\s+/g, '')}`} className="channel-value">
                  {personal.phone}
                </a>
              </div>
              <button 
                onClick={handleCopyPhone}
                className="channel-action-btn"
                title="Copiar teléfono"
                aria-label="Copiar teléfono"
              >
                {copiedPhone ? <Check size={16} className="text-green" /> : <Copy size={16} />}
              </button>
            </div>

            {/* Location Card */}
            <div className="glass-card contact-channel-card">
              <div className="channel-icon-box">
                <MapPin size={22} className="channel-icon purple" />
              </div>
              <div className="channel-content">
                <span className="channel-label">Ubicación & Modalidad</span>
                <span className="channel-value-text">
                  {personal.location}
                </span>
                <span className="channel-subtext">
                  {personal.workPreference}
                </span>
              </div>
            </div>

            {/* Social Network Links */}
            <div className="glass-card contact-socials-card">
              <h4 className="socials-card-title">Perfiles Profesionales:</h4>
              <div className="socials-buttons-group">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary social-link-card-btn"
                >
                  <LinkedinIcon size={18} />
                  <span>Perfil en LinkedIn</span>
                </a>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary social-link-card-btn"
                >
                  <GithubIcon size={18} />
                  <span>GitHub (@Mariogarluu)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="contact-form-col">
            <div className="glass-card contact-form-card">
              <div className="card-top-accent"></div>

              <div className="form-header">
                <MessageSquare size={20} className="form-header-icon purple" />
                <h3 className="form-title">Envíame un Mensaje</h3>
              </div>

              {formSubmitted ? (
                <div className="form-success-message">
                  <div className="success-icon-box">
                    <Sparkles size={28} className="success-icon" />
                  </div>
                  <h4 className="success-title">¡Mensaje Preparado!</h4>
                  <p className="success-desc">
                    Se abrirá tu cliente de correo para enviar el mensaje directamente a <strong>{personal.email}</strong>. También puedes escribir directamente o llamar al <strong>{personal.phone}</strong>.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="btn btn-secondary btn-sm"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Tu Nombre <span className="req">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Ej. Laura Martínez"
                      className="form-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Tu Correo Electrónico <span className="req">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="laura@empresa.com"
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                      Asunto
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="Oportunidad laboral / Proyecto Full Stack"
                      className="form-input"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Mensaje <span className="req">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      placeholder="Cuéntame sobre tu proyecto o puesto disponible..."
                      className="form-textarea"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary form-submit-btn">
                    <span>Enviar Mensaje</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
