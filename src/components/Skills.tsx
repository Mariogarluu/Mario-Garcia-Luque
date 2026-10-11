import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Wrench, 
  Layout, 
  Server, 
  Database, 
  Cpu, 
  Bot, 
  CheckCircle2 
} from 'lucide-react';
import './Skills.css';

export const Skills: React.FC = () => {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'layout': return <Layout size={20} className="cat-icon purple" />;
      case 'server': return <Server size={20} className="cat-icon green" />;
      case 'database': return <Database size={20} className="cat-icon purple" />;
      case 'cpu': return <Cpu size={20} className="cat-icon green" />;
      default: return <Bot size={20} className="cat-icon purple" />;
    }
  };

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(cat => cat.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section className="section-wrapper" id="habilidades">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <Wrench size={14} />
            <span>Stack & Tecnologías</span>
          </div>
          <h2 className="section-title">
            Habilidades <span className="gradient-text">Técnicas</span>
          </h2>
          <p className="section-subtitle">
            Herramientas dominadas en proyectos de empresa, algoritmia de bajo nivel y arquitectura web moderna.
          </p>
        </div>

        {/* Category Filters */}
        <div className="skills-filter-bar">
          <button
            onClick={() => setActiveCategory('all')}
            className={`skills-filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
          >
            Todos ({skills.reduce((acc, c) => acc + c.items.length, 0)})
          </button>
          <button
            onClick={() => setActiveCategory('frontend')}
            className={`skills-filter-btn ${activeCategory === 'frontend' ? 'active' : ''}`}
          >
            Frontend
          </button>
          <button
            onClick={() => setActiveCategory('backend')}
            className={`skills-filter-btn ${activeCategory === 'backend' ? 'active' : ''}`}
          >
            Backend & Cloud
          </button>
          <button
            onClick={() => setActiveCategory('database')}
            className={`skills-filter-btn ${activeCategory === 'database' ? 'active' : ''}`}
          >
            Bases de Datos
          </button>
          <button
            onClick={() => setActiveCategory('sistemas')}
            className={`skills-filter-btn ${activeCategory === 'sistemas' ? 'active' : ''}`}
          >
            Sistemas & C (42)
          </button>
          <button
            onClick={() => setActiveCategory('ia')}
            className={`skills-filter-btn ${activeCategory === 'ia' ? 'active' : ''}`}
          >
            IA & Productividad
          </button>
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {filteredSkills.map((category, catIdx) => (
            <div key={catIdx} className="glass-card skill-category-card">
              <div className="card-top-accent"></div>
              
              <div className="skill-cat-header">
                <div className="skill-cat-icon-box">
                  {getCategoryIcon(category.icon)}
                </div>
                <div>
                  <h3 className="skill-cat-title">{category.category}</h3>
                  <span className="skill-cat-count">{category.items.length} tecnologías</span>
                </div>
              </div>

              <div className="skill-pills-list">
                {category.items.map((item, itemIdx) => {
                  const isAdvanced = item.level === 'Avanzado';
                  return (
                    <div 
                      key={itemIdx} 
                      className={`skill-pill ${isAdvanced ? 'advanced' : ''}`}
                    >
                      <span className="skill-pill-bullet">
                        <CheckCircle2 size={14} className="bullet-icon" />
                      </span>
                      <span className="skill-pill-name">{item.name}</span>
                      {item.level && (
                        <span className="skill-pill-level">{item.level}</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
