import React from 'react';
import { portfolioData, type Education as EducationType } from '../data/portfolioData';
import { 
  GraduationCap, 
  Terminal, 
  Code, 
  Server, 
  Network, 
  Award, 
  Calendar, 
  MapPin, 
  Sparkles,
  FolderGit2,
  ExternalLink,
  ArrowUpRight
} from 'lucide-react';
import './Education.css';

export const Education: React.FC = () => {
  const { education, certifications } = portfolioData;

  const getEducationIcon = (iconType: EducationType['iconType']) => {
    switch (iconType) {
      case 'terminal':
        return <Terminal size={20} className="edu-icon green" />;
      case 'code':
        return <Code size={20} className="edu-icon purple" />;
      case 'server':
        return <Server size={20} className="edu-icon purple" />;
      case 'network':
        return <Network size={20} className="edu-icon green" />;
    }
  };

  return (
    <section className="section-wrapper" id="formacion">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <GraduationCap size={14} />
            <span>Formación Académica & Proyectos Vinculados</span>
          </div>
          <h2 className="section-title">
            Educación & <span className="gradient-text">Proyectos de Estudio</span>
          </h2>
          <p className="section-subtitle">
            Formación técnica conectada directamente con proyectos y repositorios de código real: desde sistemas en C en 42 Málaga hasta el proyecto intermodular Meta Force en DAM.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="education-grid">
          {education.map((item) => {
            const is42 = item.id === '42malaga';
            return (
              <div 
                key={item.id} 
                className={`glass-card education-card ${is42 ? 'featured-42' : ''}`}
              >
                <div className="card-top-accent"></div>

                <div className="edu-card-top">
                  <div className="edu-icon-container">
                    {getEducationIcon(item.iconType)}
                  </div>
                  <div className="edu-period font-mono">
                    <Calendar size={13} />
                    <span>{item.period}</span>
                  </div>
                </div>

                <div className="edu-card-content">
                  {is42 && (
                    <div className="edu-badge-42">
                      <Sparkles size={12} />
                      <span>Metodología P2P Estricta</span>
                    </div>
                  )}
                  
                  <h3 className="edu-degree">{item.degree}</h3>
                  
                  <div className="edu-institution-row">
                    <span className="edu-institution gradient-purple-text">{item.institution}</span>
                    <span className="edu-dot">·</span>
                    <span className="edu-loc">
                      <MapPin size={12} />
                      <span>{item.location}</span>
                    </span>
                  </div>

                  <p className="edu-topics">
                    <strong>Competencias:</strong> {item.topics}
                  </p>

                  {/* Linked Project / Repo */}
                  {item.relatedProject && (
                    <div className="edu-linked-project">
                      <div className="edu-linked-header">
                        <span className="edu-linked-badge">
                          <FolderGit2 size={12} />
                          <span>{item.relatedProject.badge}</span>
                        </span>
                      </div>
                      <h4 className="edu-linked-name">{item.relatedProject.name}</h4>
                      <p className="edu-linked-desc">{item.relatedProject.description}</p>
                      {item.relatedProject.isExternal ? (
                        <a
                          href={item.relatedProject.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="edu-linked-action"
                        >
                          <span>{item.relatedProject.buttonText}</span>
                          <ExternalLink size={13} />
                        </a>
                      ) : (
                        <a
                          href={item.relatedProject.url}
                          className="edu-linked-action highlight"
                        >
                          <span>{item.relatedProject.buttonText}</span>
                          <ArrowUpRight size={13} />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications & Additional Badges Bar */}
        <div className="glass-card certifications-bar">
          <div className="cert-bar-header">
            <Award size={20} className="cert-icon" />
            <span className="cert-bar-title">Certificaciones & Acreditaciones Clave:</span>
          </div>
          <div className="cert-tags-list">
            {certifications.map((cert, idx) => (
              <span key={idx} className="badge badge-green">
                ✓ {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
