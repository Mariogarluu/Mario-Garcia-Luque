import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Wrench, 
  Layout, 
  Server, 
  Database, 
  Cpu, 
  Bot, 
  Sparkles
} from 'lucide-react';
import { TechIcon } from './TechIcons';
import './Skills.css';

const coreTechStack = [
  { name: 'React.js', label: 'React' },
  { name: 'TypeScript', label: 'TypeScript' },
  { name: 'Supabase', label: 'Supabase' },
  { name: 'PostgreSQL', label: 'PostgreSQL' },
  { name: 'Cursor', label: 'Cursor AI' },
  { name: 'Google Antigravity', label: 'Antigravity' },
  { name: 'Node.js', label: 'Node.js' },
  { name: 'Next.js', label: 'Next.js' },
  { name: 'Tailwind CSS', label: 'Tailwind CSS' },
  { name: 'C / C++', label: 'C / C++ (42)' },
  { name: 'Python', label: 'Python' },
  { name: 'Git', label: 'Git & GitHub' },
  { name: 'Vite', label: 'Vite' },
];

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

        {/* Core Tech Stack Showcase Banner */}
        <div className="core-tech-showcase glass-card">
          <div className="core-tech-header">
            <Sparkles size={16} className="core-tech-sparkle" />
            <span className="core-tech-title">Tecnologías Principales en Producción</span>
          </div>
          <div className="core-tech-badges">
            {coreTechStack.map((tech, idx) => (
              <div key={idx} className="core-tech-item" title={tech.name}>
                <div className="core-tech-logo-wrapper">
                  <TechIcon name={tech.name} size={22} />
                </div>
                <span className="core-tech-name">{tech.label}</span>
              </div>
            ))}
          </div>
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
                      <span className="skill-pill-logo">
                        <TechIcon name={item.name} size={18} />
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

