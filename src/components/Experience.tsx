import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle, 
  ChevronDown, 
  ChevronUp, 
  Building2,
  Sparkles,
  Truck,
  Heart,
  Network
} from 'lucide-react';
import { TechIcon } from './TechIcons';
import './Experience.css';

export const Experience: React.FC = () => {
  const { experience, complementaryExperience } = portfolioData;
  const [showComplementary, setShowComplementary] = useState(false);

  const getComplementaryIcon = (index: number) => {
    switch (index) {
      case 0: return <Truck size={18} className="comp-icon green" />;
      case 1: return <Heart size={18} className="comp-icon purple" />;
      default: return <Network size={18} className="comp-icon green" />;
    }
  };

  return (
    <section className="section-wrapper" id="experiencia">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <Briefcase size={14} />
            <span>Trayectoria Laboral</span>
          </div>
          <h2 className="section-title">
            Experiencia <span className="gradient-text">Profesional</span>
          </h2>
          <p className="section-subtitle">
            Entornos reales donde he aportado valor técnico, colaborado con equipos multidisciplinares y construido soluciones escalables.
          </p>
        </div>

        {/* Primary Timeline */}
        <div className="experience-timeline">
          {experience.map((item, idx) => (
            <div key={item.id} className="timeline-item">
              {/* Timeline Connector Line & Marker */}
              <div className="timeline-marker-wrapper">
                <div className={`timeline-marker ${idx === 0 ? 'current' : ''}`}>
                  {idx === 0 ? (
                    <Sparkles size={16} className="marker-icon" />
                  ) : (
                    <Building2 size={16} className="marker-icon" />
                  )}
                </div>
                {idx < experience.length - 1 && <div className="timeline-line"></div>}
              </div>

              {/* Experience Card */}
              <div className="glass-card experience-card">
                <div className="card-top-accent"></div>

                <div className="exp-card-header">
                  <div className="exp-role-with-logo">
                    {item.companyLogo && (
                      <div className="exp-company-logo-box">
                        <img 
                          src={item.companyLogo} 
                          alt={item.company} 
                          className="exp-company-logo-img" 
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className="exp-role-company">
                      <h3 className="exp-role">{item.role}</h3>
                      <div className="exp-company-group">
                        <span className="exp-company gradient-purple-text">{item.company}</span>
                        <span className="exp-sep">·</span>
                        <span className="exp-location">
                          <MapPin size={13} />
                          <span>{item.location}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="exp-period-pill">
                    <Calendar size={13} />
                    <span>{item.period}</span>
                  </div>
                </div>

                <p className="exp-description">{item.description}</p>

                {/* Achievements List */}
                <div className="exp-achievements">
                  <h4 className="exp-achievements-title">Puntos Clave & Logros:</h4>
                  <ul className="exp-achievements-list">
                    {item.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="exp-achievement-item">
                        <CheckCircle size={15} className="ach-icon" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Pills */}
                <div className="exp-tech-stack">
                  {item.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="badge badge-purple tech-tag-with-icon">
                      <TechIcon name={tech} size={14} />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Complementary Roles Accordion */}
        <div className="complementary-wrapper">
          <button
            onClick={() => setShowComplementary(!showComplementary)}
            className="btn btn-secondary complementary-toggle-btn"
          >
            <span>Experiencias Complementarias (Aptitudes y Ética Laboral)</span>
            {showComplementary ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>

          {showComplementary && (
            <div className="complementary-grid">
              {complementaryExperience.map((item, cIdx) => (
                <div key={cIdx} className="glass-card comp-card">
                  <div className="comp-header">
                    <div className="comp-icon-box">
                      {getComplementaryIcon(cIdx)}
                    </div>
                    <div>
                      <h4 className="comp-role">{item.role}</h4>
                      <span className="comp-org">{item.organization}</span>
                    </div>
                    <span className="comp-period font-mono">{item.period}</span>
                  </div>
                  <p className="comp-details">{item.details}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
