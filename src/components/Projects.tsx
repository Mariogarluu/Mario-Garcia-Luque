import React, { useState } from 'react';
import { portfolioData, type Project } from '../data/portfolioData';
import { 
  FolderGit2, 
  ExternalLink, 
  CheckCircle2, 
  GraduationCap,
  Bot,
  AlertTriangle,
  KeyRound,
  Copy,
  Check,
  Radio,
  Sparkles,
  Layers,
  Users,
  Trophy
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { TechIcon } from './TechIcons';
import './Projects.css';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState<'all' | 'fantasy' | 'dam' | 'bot'>('all');
  const [copiedKey, setCopiedKey] = useState(false);

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  const handleCopyCredentials = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2200);
  };

  return (
    <section className="section-wrapper" id="proyectos">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <FolderGit2 size={14} />
            <span>Proyectos Reales Seleccionados</span>
          </div>
          <h2 className="section-title">
            Proyectos <span className="gradient-text">Destacados</span>
          </h2>
          <p className="section-subtitle">
            Software en producción y desarrollos reales: el simulador competitivo <strong>LoL Fantasy</strong> (Angular 19 & Supabase), la plataforma integral <strong>Meta Force</strong> (DAM · Multiplataforma) y el reproductor concurrente <strong>Bot de Música para Discord</strong>.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="projects-filter-bar">
          <button
            onClick={() => setFilter('all')}
            className={`filter-tab-btn ${filter === 'all' ? 'active' : ''}`}
          >
            Todos ({projects.length})
          </button>
          <button
            onClick={() => setFilter('fantasy')}
            className={`filter-tab-btn ${filter === 'fantasy' ? 'active' : ''}`}
          >
            LoL Fantasy (Esports · Manager)
          </button>
          <button
            onClick={() => setFilter('dam')}
            className={`filter-tab-btn ${filter === 'dam' ? 'active' : ''}`}
          >
            Meta Force (DAM · Full Stack)
          </button>
          <button
            onClick={() => setFilter('bot')}
            className={`filter-tab-btn ${filter === 'bot' ? 'active' : ''}`}
          >
            Bot de Música (Discord · Node.js)
          </button>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid curated-grid">
          {filteredProjects.map((project: Project) => {
            const isMetaForce = project.id === 'meta-force';
            return (
              <div 
                key={project.id} 
                id={project.id}
                className={`glass-card project-card ${project.featured ? 'featured-flagship' : ''}`}
              >
                <div className="card-top-accent"></div>

                {/* Project Preview Image */}
                {project.image && (
                  <div className="project-image-box">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="project-img" 
                      loading="lazy"
                    />
                    <div className="project-image-overlay"></div>
                    
                    {/* Floating Context & Status Badges */}
                    <div className="project-floating-badges">
                      <div className="project-category-badge-floating">
                        {project.category === 'fantasy' ? (
                          <Trophy size={13} style={{ color: '#E5C158' }} />
                        ) : isMetaForce ? (
                          <GraduationCap size={13} className="context-icon purple" />
                        ) : (
                          <Bot size={13} className="context-icon green" />
                        )}
                        <span>{project.contextLabel}</span>
                      </div>

                      {project.statusType === 'active' && (
                        <div className="project-live-badge">
                          <span className="live-dot"></span>
                          <span>Producción Activa</span>
                        </div>
                      )}

                      {project.statusType === 'deprecated' && (
                        <div className="project-deprecated-badge">
                          <AlertTriangle size={12} />
                          <span>En desuso (API)</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div className="project-card-body">
                  <div className="project-role-bar">
                    <span className="role-tag">
                      <Sparkles size={13} />
                      <strong>Rol:</strong> {project.roleInProject}
                    </span>
                  </div>

                  <div className="project-card-header">
                    <div>
                      <h3 className="project-title">{project.title}</h3>
                      <span className="project-subtitle">{project.subtitle}</span>
                    </div>

                    <div className="project-links">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link-btn"
                          title="Ver Código en GitHub"
                          aria-label="Código GitHub"
                        >
                          <GithubIcon size={17} />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link-btn demo"
                          title="Ver Aplicación Desplegada en Vercel"
                          aria-label="Ver Demo"
                        >
                          <ExternalLink size={17} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Status Notice if in disuse */}
                  {project.statusNotice && (
                    <div className="project-notice-box">
                      <AlertTriangle size={16} className="notice-icon" />
                      <div className="notice-content">
                        <strong>Nota de estado técnico:</strong>
                        <p>{project.statusNotice}</p>
                      </div>
                    </div>
                  )}

                  <p className="project-description">{project.description}</p>

                  {/* Project Team & Collaborators Section */}
                  {project.collaborators && project.collaborators.length > 0 && (
                    <div className="project-collaborators-box">
                      <div className="collab-header">
                        <Users size={14} className="collab-icon" />
                        <span className="collab-title">Equipo de Desarrollo del Proyecto:</span>
                      </div>
                      <div className="collab-cards-list">
                        <div className="collab-member-item">
                          <a
                            href="https://github.com/Mariogarluu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="collab-profile-link"
                          >
                            <GithubIcon size={15} className="collab-gh-icon" />
                            <span className="collab-name">Mario García Luque</span>
                            <span className="collab-handle font-mono">@Mariogarluu</span>
                            <ExternalLink size={12} className="collab-ext-icon" />
                          </a>
                        </div>
                        {project.collaborators.map((collab, cIdx) => (
                          <div key={cIdx} className="collab-member-item">
                            <a
                              href={collab.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="collab-profile-link"
                            >
                              <GithubIcon size={15} className="collab-gh-icon" />
                              <span className="collab-name">{collab.name}</span>
                              <span className="collab-handle font-mono">@{collab.github}</span>
                              <ExternalLink size={12} className="collab-ext-icon" />
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Expo Access Notice (Credentials and evaluation guide in Expo repo) */}
                  {project.expoAccess && (
                    <div className="project-expo-access-box">
                      <div className="expo-access-header">
                        <div className="expo-access-title">
                          <KeyRound size={15} className="expo-access-icon" />
                          <span>Acceso a la Demo & Credenciales de Prueba:</span>
                        </div>
                        <a
                          href={project.expoAccess.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-expo-docs-link"
                        >
                          <GithubIcon size={13} />
                          <span>{project.expoAccess.linkText}</span>
                          <ExternalLink size={12} />
                        </a>
                      </div>
                      <p className="expo-access-text">
                        {project.expoAccess.message}
                      </p>
                    </div>
                  )}

                  {/* Demo Credentials Box (Fallback if present) */}
                  {project.credentialsDemo && (
                    <div className="project-creds-container">
                      <div className="creds-header">
                        <div className="creds-title">
                          <KeyRound size={14} className="creds-icon" />
                          <span>Credenciales de prueba para evaluación (Superadmin):</span>
                        </div>
                        <button
                          onClick={() => handleCopyCredentials(`Email: ${project.credentialsDemo?.user}\nPassword: ${project.credentialsDemo?.pass}`)}
                          className="btn-copy-creds"
                          title="Copiar credenciales al portapapeles"
                        >
                          {copiedKey ? <Check size={13} className="text-green" /> : <Copy size={13} />}
                          <span>{copiedKey ? 'Copiado' : 'Copiar'}</span>
                        </button>
                      </div>
                      <div className="creds-details font-mono">
                        <span className="cred-item"><strong>Usuario:</strong> {project.credentialsDemo.user}</span>
                        <span className="cred-separator">|</span>
                        <span className="cred-item"><strong>Contraseña:</strong> {project.credentialsDemo.pass}</span>
                      </div>
                    </div>
                  )}

                  {/* Multi-repository Links (Meta Force) */}
                  {project.repositories && project.repositories.length > 1 && (
                    <div className="project-subrepos-section">
                      <h4 className="subrepos-title">
                        <Layers size={14} />
                        <span>Arquitectura Desacoplada (Repositorios en GitHub):</span>
                      </h4>
                      <div className="subrepos-grid">
                        {project.repositories.map((repo, rIdx) => (
                          <a
                            key={rIdx}
                            href={repo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="subrepo-card"
                          >
                            <div className="subrepo-info">
                              <span className="subrepo-badge">{repo.badge}</span>
                              <span className="subrepo-label">{repo.label}</span>
                            </div>
                            <GithubIcon size={14} className="subrepo-icon" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Highlights */}
                  <div className="project-highlights">
                    <h4 className="highlights-title">Aspectos Técnicos Clave:</h4>
                    <ul className="highlights-list">
                      {project.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="highlight-item">
                          <CheckCircle2 size={14} className="highlight-icon" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons Row */}
                  <div className="project-card-footer">
                    <div className="project-tech-tags">
                      {project.technologies.map((tech, tIdx) => (
                        <span key={tIdx} className="badge badge-purple tech-tag-with-icon">
                          <TechIcon name={tech} size={14} />
                          <span>{tech}</span>
                        </span>
                      ))}
                    </div>

                    <div className="project-primary-actions">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary btn-sm"
                        >
                          <Radio size={14} />
                          <span>Abrir App en Vercel</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-secondary btn-sm"
                        >
                          <GithubIcon size={14} />
                          <span>Ver Repositorio</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub Direct Link Card */}
        <div className="glass-card add-project-banner">
          <div className="add-project-content">
            <div className="add-project-icon-box">
              <FolderGit2 size={24} className="add-icon" />
            </div>
            <div>
              <h4 className="add-project-title">Código Abierto & Repositorios de Formación</h4>
              <p className="add-project-desc">
                Explora el resto de código fuente, algoritmos en C de 42 Málaga (<code>Ft-Maincore</code>) y utilidades en mi perfil de GitHub <code className="font-mono">github.com/Mariogarluu</code>.
              </p>
            </div>
          </div>
          <a
            href="https://github.com/Mariogarluu"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
          >
            <GithubIcon size={15} />
            <span>Ver Todo en @Mariogarluu</span>
          </a>
        </div>
      </div>
    </section>
  );
};
