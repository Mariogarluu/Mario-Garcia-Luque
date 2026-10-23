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
  Sparkles,
  ExternalLink,
  Loader2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, DiscordIcon } from './Icons';
import './Contact.css';

// Custom WhatsApp SVG for recognizable branding
const WhatsAppIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.16C10.57 20.16 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.05 20.16ZM16.56 14.33C16.31 14.21 15.09 13.61 14.86 13.52C14.64 13.44 14.47 13.4 14.31 13.65C14.14 13.9 13.66 14.47 13.51 14.63C13.37 14.8 13.22 14.82 12.97 14.7C12.72 14.57 11.92 14.31 10.97 13.47C10.23 12.81 9.73 12 9.58 11.75C9.44 11.5 9.57 11.37 9.69 11.24C9.8 11.13 9.94 10.95 10.06 10.81C10.19 10.66 10.23 10.56 10.31 10.39C10.39 10.23 10.35 10.08 10.29 9.96C10.23 9.83 9.74 8.63 9.53 8.14C9.33 7.65 9.13 7.72 8.98 7.71C8.84 7.7 8.67 7.7 8.51 7.7C8.34 7.7 8.07 7.76 7.84 8.01C7.62 8.26 6.98 8.85 6.98 10.06C6.98 11.27 7.86 12.44 7.98 12.6C8.11 12.77 9.71 15.24 12.16 16.3C12.75 16.55 13.2 16.7 13.56 16.82C14.3 17.05 14.97 17.02 15.5 16.94C16.09 16.85 17.32 16.19 17.58 15.48C17.83 14.76 17.83 14.15 17.75 14.02C17.68 13.9 17.51 13.83 17.26 13.7" />
  </svg>
);

export const Contact: React.FC = () => {
  const { personal } = portfolioData;

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedDiscord, setCopiedDiscord] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const whatsappDigits = personal.phone.replace(/[^0-9]/g, '');

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

  const handleCopyDiscord = () => {
    navigator.clipboard.writeText(personal.discord);
    setCopiedDiscord(true);
    setTimeout(() => setCopiedDiscord(false), 2200);
  };

  const handleCopyFullMessage = () => {
    const text = `De: ${formData.name} (${formData.email})\nAsunto: ${formData.subject || 'Contacto'}\n\nMensaje:\n${formData.message}`;
    navigator.clipboard.writeText(text);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2200);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/garcialuquemario7@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `Contacto Portfolio de ${formData.name}`,
          message: formData.message,
          _subject: `[Portfolio Mario García] Nuevo mensaje de ${formData.name}: ${formData.subject || 'Contacto'}`,
          _template: 'table'
        })
      });

      if (response.ok) {
        setSubmitSuccess(true);
      } else {
        setSubmitSuccess(false);
      }
    } catch {
      // If network fails (e.g. adblocker or privacy extension blocks AJAX), graceful fallback
      setSubmitSuccess(false);
    } finally {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }
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

        {/* Developer Brand Banner */}
        {personal.banner && (
          <div className="contact-banner-wrapper">
            <div className="glass-card contact-brand-banner">
              <div className="card-top-accent"></div>
              <img
                src={personal.banner}
                alt={`${personal.name} - Desarrollador de Software`}
                className="contact-brand-banner-img"
                loading="lazy"
              />
            </div>
          </div>
        )}

        {/* Contact Layout */}
        <div className="contact-grid">
          {/* Left Column: Direct Info Cards */}
          <div className="contact-info-col">
            {/* WhatsApp Card */}
            <div className="glass-card contact-channel-card contact-channel-wa">
              <div className="channel-icon-box channel-icon-wa">
                <WhatsAppIcon size={24} className="channel-icon-wa-glyph" />
              </div>
              <div className="channel-content">
                <div className="channel-label-row">
                  <span className="channel-label">WhatsApp Directo</span>
                  <span className="channel-badge-chip">Respuesta Rápida</span>
                </div>
                <a 
                  href={`https://wa.me/${whatsappDigits}?text=${encodeURIComponent('Hola Mario, he visto tu portfolio y me gustaría hablar contigo.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-value channel-value-wa"
                >
                  {personal.phone}
                </a>
              </div>
              <a 
                href={`https://wa.me/${whatsappDigits}?text=${encodeURIComponent('Hola Mario, he visto tu portfolio y me gustaría hablar contigo.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="channel-action-btn channel-action-wa"
                title="Abrir chat en WhatsApp"
                aria-label="Abrir chat en WhatsApp"
              >
                <ExternalLink size={16} />
              </a>
            </div>

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
                <span className="channel-label">Teléfono Móvil / Llamada</span>
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

            {/* Discord Card */}
            <div className="glass-card contact-channel-card contact-channel-discord">
              <div className="channel-icon-box channel-icon-discord">
                <DiscordIcon size={22} className="channel-icon-discord-glyph" />
              </div>
              <div className="channel-content">
                <div className="channel-label-row">
                  <span className="channel-label">Discord</span>
                  <span className="channel-badge-chip-discord">Chat & Comunidad</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyDiscord}
                  className="channel-value channel-value-discord"
                  title="Copiar usuario de Discord: mariogarlu"
                >
                  @{personal.discord}
                </button>
              </div>
              <button 
                type="button"
                onClick={handleCopyDiscord}
                className="channel-action-btn channel-action-discord"
                title="Copiar usuario de Discord: mariogarlu"
                aria-label="Copiar usuario de Discord"
              >
                {copiedDiscord ? <Check size={16} className="text-green" /> : <Copy size={16} />}
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
              <h4 className="socials-card-title">Perfiles Profesionales & Redes:</h4>
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
                <button
                  type="button"
                  onClick={handleCopyDiscord}
                  className="btn btn-secondary social-link-card-btn social-link-discord-btn"
                  title="Copiar usuario de Discord: mariogarlu"
                >
                  <DiscordIcon size={18} className="social-discord-icon" />
                  <span>Discord (@{personal.discord})</span>
                  <span className="btn-discord-copy-tag font-mono">
                    {copiedDiscord ? '¡Copiado!' : 'Copiar'}
                  </span>
                </button>
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
                  <h4 className="success-title">
                    {submitSuccess ? '¡Mensaje Enviado con Éxito!' : '¡Mensaje Preparado!'}
                  </h4>
                  <p className="success-desc">
                    {submitSuccess
                      ? `Tu mensaje ha sido entregado en la bandeja de entrada de ${personal.email}. Te responderé a la mayor brevedad posible.`
                      : `Tu mensaje ha sido procesado para ${personal.email}. Si lo prefieres, también puedes remitirlo al instante con un solo click por cualquiera de estos canales directos:`}
                  </p>

                  <div className="success-actions-grid">
                    <a
                      href={`https://wa.me/${whatsappDigits}?text=${encodeURIComponent(`Hola Mario, soy ${formData.name} (${formData.email}).\n\nAsunto: ${formData.subject || 'Contacto'}\n\n${formData.message}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary success-action-btn btn-wa-action"
                    >
                      <WhatsAppIcon size={18} />
                      <span>Enviar por WhatsApp</span>
                      <ExternalLink size={14} />
                    </a>

                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personal.email}&su=${encodeURIComponent(formData.subject || `Contacto desde Portfolio de ${formData.name}`)}&body=${encodeURIComponent(`De: ${formData.name} (${formData.email})\n\nMensaje:\n${formData.message}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary success-action-btn btn-gmail-action"
                    >
                      <Mail size={18} />
                      <span>Abrir en Gmail Web</span>
                      <ExternalLink size={14} />
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyFullMessage}
                      className="btn btn-secondary success-action-btn"
                    >
                      {copiedMessage ? <Check size={18} className="text-green" /> : <Copy size={18} />}
                      <span>{copiedMessage ? '¡Texto Copiado!' : 'Copiar Texto del Mensaje'}</span>
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="btn btn-secondary btn-sm form-reset-btn"
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
                      disabled={isSubmitting}
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
                      disabled={isSubmitting}
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
                      disabled={isSubmitting}
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
                      disabled={isSubmitting}
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary form-submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        <span>Enviando mensaje...</span>
                      </>
                    ) : (
                      <>
                        <span>Enviar Mensaje</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>

                  <div className="form-instant-notice">
                    <span>⚡ ¿Necesitas respuesta inmediata?</span>
                    <a 
                      href={`https://wa.me/${whatsappDigits}?text=${encodeURIComponent('Hola Mario, he visto tu portfolio y me gustaría contactar contigo.')}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="instant-wa-link"
                    >
                      <WhatsAppIcon size={14} />
                      <span>Escríbeme directo por WhatsApp</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
