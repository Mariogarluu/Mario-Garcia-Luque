import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  User, 
  Quote, 
  Sparkles, 
  Compass, 
  ShieldCheck, 
  HeartHandshake, 
  Lightbulb, 
  Target,
  ExternalLink 
} from 'lucide-react';
import './About.css';

export const About: React.FC = () => {
  const { about, testimonial, personal } = portfolioData;

  const softSkillIcons = [
    <Target size={20} className="skill-icon purple" />,
    <Lightbulb size={20} className="skill-icon green" />,
    <Compass size={20} className="skill-icon purple" />,
    <ShieldCheck size={20} className="skill-icon green" />,
    <HeartHandshake size={20} className="skill-icon purple" />
  ];

  return (
    <section className="section-wrapper" id="sobre-mi">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <User size={14} />
            <span>Perfil & Trayectoria</span>
          </div>
          <h2 className="section-title">
            Una base sólida de ingeniería, <br className="hidden-mobile" />
            <span className="gradient-text">sin atajos ni fórmulas genéricas</span>
          </h2>
          <p className="section-subtitle">
            Desde la arquitectura cliente/servidor y el bajo nivel de memoria en C, hasta aplicaciones web interactivas listas para producción.
          </p>
        </div>

        {/* Narrative & Testimonial Grid */}
        <div className="about-grid">
          {/* Left Column: Biography Narrative */}
          <div className="about-story glass-card">
            <div className="card-top-accent"></div>
            <h3 className="story-title">
              <Sparkles size={20} className="story-icon" />
              <span>Mi Enfoque de Desarrollo</span>
            </h3>

            <div className="story-paragraphs">
              {about.extendedBio.map((paragraph, index) => (
                <p key={index} className="story-text">
                  {paragraph}
                </p>
              ))}
            </div>

            {about.workspaceImage && (
              <div className="about-workspace-box">
                <img 
                  src={about.workspaceImage} 
                  alt="Workspace y entorno de desarrollo de Mario" 
                  className="about-workspace-img"
                  loading="lazy"
                />
                <div className="workspace-badge font-mono">
                  <span>⚡ Entorno de trabajo · VS Code & Linux</span>
                </div>
              </div>
            )}

            <div className="story-meta-pills">
              <span className="meta-pill">
                📍 {personal.location}
              </span>
              <span className="meta-pill">
                🚗 {personal.driverLicense}
              </span>
              <span className="meta-pill">
                🗣️ Español (Nativo) · Inglés (B1 Profesional)
              </span>
            </div>
          </div>

          {/* Right Column: Real Testimonial Card with Luis Photo */}
          <div className="testimonial-card glass-card">
            <div className="testimonial-glow-corner"></div>
            <div className="testimonial-header">
              <div className="quote-badge">
                <Quote size={22} className="quote-icon" />
              </div>
              <div className="testimonial-badge-pill">
                <span className="status-dot"></span>
                <span>{testimonial.badge}</span>
              </div>
            </div>

            <blockquote className="testimonial-quote">
              "{testimonial.text}"
            </blockquote>

            <div className="testimonial-author-wrapper">
              <div className="author-photo-box">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="author-real-img"
                />
              </div>
              <div className="author-info">
                <div className="author-name">{testimonial.author}</div>
                <div className="author-role">
                  {testimonial.role} · <strong className="gradient-purple-text">{testimonial.company}</strong>
                </div>
              </div>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="testimonial-linkedin-link"
                title="Ver recomendación en LinkedIn"
              >
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Soft Skills & Philosophy Grid */}
        <div className="soft-skills-section">
          <h3 className="soft-skills-title">
            Valores de Trabajo & <span className="gradient-text">Resolución de Problemas</span>
          </h3>

          <div className="soft-skills-grid">
            {about.softSkills.map((skill, index) => (
              <div key={index} className="glass-card soft-skill-card">
                <div className="soft-skill-icon-wrapper">
                  {softSkillIcons[index % softSkillIcons.length]}
                </div>
                <h4 className="soft-skill-heading">{skill.title}</h4>
                <p className="soft-skill-desc">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
