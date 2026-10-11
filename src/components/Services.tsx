import React from 'react';
import { portfolioData, type Service } from '../data/portfolioData';
import { 
  Briefcase, 
  Layers, 
  Code, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import './Services.css';

export const Services: React.FC = () => {
  const { services } = portfolioData;

  const getServiceIcon = (icon: Service['icon']) => {
    switch (icon) {
      case 'layers': return <Layers size={24} className="service-icon purple" />;
      case 'code': return <Code size={24} className="service-icon green" />;
      case 'sparkles': return <Sparkles size={24} className="service-icon purple" />;
    }
  };

  return (
    <section className="section-wrapper" id="servicios">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <Briefcase size={14} />
            <span>Capacidades & Servicios</span>
          </div>
          <h2 className="section-title">
            Soluciones para <span className="gradient-text">Empresas y Clientes</span>
          </h2>
          <p className="section-subtitle">
            Tanto si necesitas sumar un desarrollador resolutivo a tu equipo técnico, como si buscas un profesional freelance para lanzar tu producto digital.
          </p>
        </div>

        {/* Services Cards */}
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="glass-card service-card">
              <div className="card-top-accent"></div>

              <div className="service-header">
                <div className="service-icon-box">
                  {getServiceIcon(service.icon)}
                </div>
                <div>
                  <h3 className="service-title">{service.title}</h3>
                  <span className="service-subtitle">{service.subtitle}</span>
                </div>
              </div>

              <p className="service-description">{service.description}</p>

              <div className="service-ideal">
                <span className="ideal-label">Para quién es:</span>
                <p className="ideal-text">{service.idealFor}</p>
              </div>

              <div className="service-deliverables">
                <span className="deliverables-title">Qué incluye:</span>
                <ul className="deliverables-list">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="deliverable-item">
                      <CheckCircle2 size={15} className="deliv-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="service-footer">
                <a href="#contacto" className="btn btn-secondary btn-sm service-cta">
                  <span>Consultar disponibilidad</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
