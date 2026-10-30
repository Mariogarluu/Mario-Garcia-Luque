import React, { useEffect, useRef } from 'react';
import { X, ShieldCheck, Cookie, Scale, Lock, Mail, ExternalLink, CheckCircle2 } from 'lucide-react';
import './LegalModal.css';

export type LegalTab = 'privacidad' | 'cookies' | 'aviso-legal';

interface LegalModalProps {
  isOpen: boolean;
  activeTab: LegalTab;
  onClose: () => void;
  onTabChange: (tab: LegalTab) => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  activeTab,
  onClose,
  onTabChange,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="legal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div className="legal-modal-card" ref={modalRef}>
        {/* Header */}
        <div className="legal-modal-header">
          <div className="legal-modal-title-group">
            <div className="legal-badge-icon">
              {activeTab === 'privacidad' && <ShieldCheck size={20} className="text-purple" />}
              {activeTab === 'cookies' && <Cookie size={20} className="text-green" />}
              {activeTab === 'aviso-legal' && <Scale size={20} className="text-purple" />}
            </div>
            <div>
              <h2 id="legal-modal-title" className="legal-modal-title">
                {activeTab === 'privacidad' && 'Política de Privacidad y Protección de Datos'}
                {activeTab === 'cookies' && 'Política de Cookies y Almacenamiento Local'}
                {activeTab === 'aviso-legal' && 'Aviso Legal e Información Corporativa'}
              </h2>
              <span className="legal-subtitle">Cumplimiento RGPD (UE 2016/679) &amp; LSSI-CE (Ley 34/2002)</span>
            </div>
          </div>

          <button
            type="button"
            className="legal-close-btn"
            onClick={onClose}
            aria-label="Cerrar modal de información legal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="legal-tabs-nav" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'privacidad'}
            className={`legal-tab-btn ${activeTab === 'privacidad' ? 'active' : ''}`}
            onClick={() => onTabChange('privacidad')}
          >
            <ShieldCheck size={16} />
            <span>Privacidad &amp; RGPD</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'cookies'}
            className={`legal-tab-btn ${activeTab === 'cookies' ? 'active' : ''}`}
            onClick={() => onTabChange('cookies')}
          >
            <Cookie size={16} />
            <span>Política de Cookies</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'aviso-legal'}
            className={`legal-tab-btn ${activeTab === 'aviso-legal' ? 'active' : ''}`}
            onClick={() => onTabChange('aviso-legal')}
          >
            <Scale size={16} />
            <span>Aviso Legal</span>
          </button>
        </div>

        {/* Body content */}
        <div className="legal-modal-body">
          {/* TAB 1: PRIVACIDAD */}
          {activeTab === 'privacidad' && (
            <div className="legal-content-section">
              <div className="legal-highlight-box green">
                <CheckCircle2 size={20} className="highlight-icon" />
                <div>
                  <strong>Compromiso de Privacidad por Diseño:</strong> Este portfolio no comercializa datos,
                  no emplea rastreadores publicitarios y recopila únicamente los datos mínimos indispensables
                  facilitados conscientemente para establecer contacto profesional.
                </div>
              </div>

              <h3>1. Responsable del Tratamiento de Datos</h3>
              <p>
                En conformidad con el <strong>Reglamento General de Protección de Datos (RGPD UE 2016/679)</strong> y
                la <strong>Ley Orgánica 3/2018 (LOPDGDD)</strong>, te informamos de que el responsable del tratamiento
                de los datos facilitados a través de esta web es:
              </p>
              <ul className="legal-list">
                <li><strong>Responsable:</strong> Mario García Luque</li>
                <li><strong>Actividad:</strong> Desarrollador Full Stack &amp; Frontend</li>
                <li><strong>Ubicación:</strong> Alhaurín de la Torre, Málaga, España</li>
                <li><strong>Correo de contacto:</strong> <a href="mailto:garcialuquemario7@gmail.com">garcialuquemario7@gmail.com</a></li>
              </ul>

              <h3>2. Datos Personales Recabados y Finalidad</h3>
              <p>
                A través del <strong>formulario de contacto</strong> o mediante el envío directo de correo electrónico,
                se recaban los siguientes datos de carácter personal:
              </p>
              <ul className="legal-list">
                <li><strong>Datos recogidos:</strong> Nombre o alias, dirección de correo electrónico, asunto y el contenido del mensaje.</li>
                <li><strong>Finalidad exclusiva:</strong> Dar respuesta a consultas, solicitudes de presupuestos, propuestas de empleo o colaboraciones técnicas solicitadas por el propio usuario.</li>
                <li><strong>No perfilado ni publicidad:</strong> Tus datos jamás se usarán para boletines no solicitados (spam), mercadotecnia ni cesión a empresas publicitarias.</li>
              </ul>

              <h3>3. Base Legal y Legitimación</h3>
              <p>
                La base jurídica para el tratamiento de tus datos es el <strong>consentimiento expreso del interesado</strong> (Art. 6.1.a RGPD)
                manifestado al remitir activamente el formulario o correo electrónico. Puedes revocar dicho consentimiento en cualquier momento.
              </p>

              <h3>4. Destinatarios y Proveedores de Servicio</h3>
              <p>
                Los datos no se ceden a terceros salvo requerimiento u obligación legal. Para canalizar técnicamente las comunicaciones
                del formulario web se utiliza el servicio de entrega cifrada <strong>FormSubmit</strong> mediante conexión segura HTTPS/TLS,
                sin almacenamiento permanente de datos con fines publicitarios.
              </p>

              <h3>5. Plazo de Conservación</h3>
              <p>
                Los datos facilitados se conservarán durante el tiempo estrictamente necesario para resolver tu consulta y gestionar la
                relación profesional derivada, tras lo cual serán eliminados de manera segura.
              </p>

              <h3>6. Derechos del Usuario (ARCO &amp; Portabilidad)</h3>
              <p>
                Puedes ejercer en cualquier momento y de forma gratuita tus derechos de:
              </p>
              <ul className="legal-list">
                <li><strong>Acceso:</strong> Saber qué datos tuyos se han tratado.</li>
                <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos.</li>
                <li><strong>Supresión («Derecho al olvido»):</strong> Pedir la eliminación de tus datos de contacto.</li>
                <li><strong>Limitación y Oposición:</strong> Restringir u oponerte a determinados tratamientos.</li>
                <li><strong>Portabilidad:</strong> Solicitar la entrega de tus datos en formato interoperable.</li>
              </ul>
              <p>
                Para ejercitar cualquiera de estos derechos, envía un mensaje indicando el derecho que deseas ejercer a:{' '}
                <a href="mailto:garcialuquemario7@gmail.com" className="legal-link">
                  <Mail size={14} /> garcialuquemario7@gmail.com
                </a>. Si consideras que no se han respetado tus derechos, puedes formular una reclamación ante la{' '}
                <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="legal-link">
                  Agencia Española de Protección de Datos (AEPD) <ExternalLink size={12} />
                </a>.
              </p>
            </div>
          )}

          {/* TAB 2: COOKIES */}
          {activeTab === 'cookies' && (
            <div className="legal-content-section">
              <div className="legal-highlight-box purple">
                <CheckCircle2 size={20} className="highlight-icon" />
                <div>
                  <strong>Web 100% Libre de Cookies de Rastreo:</strong> Este sitio web respeta tu navegación. No utilizamos
                  cookies analíticas de terceros (como Google Analytics), ni cookies publicitarias ni trackers de comportamiento.
                </div>
              </div>

              <h3>1. ¿Qué son las Cookies y qué usa esta web?</h3>
              <p>
                Las cookies son pequeños ficheros de datos que los sitios web almacenan en el dispositivo del visitante.
                En consonancia con el principio de minimización tecnológica y la <strong>Directiva ePrivacy (2002/58/CE)</strong>:
              </p>
              <div className="legal-grid-cards">
                <div className="legal-info-card">
                  <span className="badge badge-green">Cookies de Terceros: CERO</span>
                  <h4>Sin Rastreo Externo</h4>
                  <p>No se cargan scripts de telemetría invasiva, Meta Pixel, Hotjar ni servicios analíticos de seguimiento.</p>
                </div>
                <div className="legal-info-card">
                  <span className="badge badge-purple">Almacenamiento Local</span>
                  <h4>LocalStorage Técnico</h4>
                  <p>Se utiliza exclusivamente una variable de almacenamiento local en el navegador para recordar tu preferencia visual (Tema Oscuro o Claro).</p>
                </div>
              </div>

              <h3>2. Detalle del Almacenamiento Utilizado</h3>
              <div className="legal-table-responsive">
                <table className="legal-table">
                  <thead>
                    <tr>
                      <th>Identificador</th>
                      <th>Tipo</th>
                      <th>Finalidad</th>
                      <th>Persistencia</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>theme</code></td>
                      <td>LocalStorage (Técnico)</td>
                      <td>Recordar si el usuario prefiere interfaz en Modo Oscuro o Claro</td>
                      <td>Persistente en navegador del usuario</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="legal-note-text">
                * Conforme al <strong>artículo 22.2 de la LSSI-CE</strong> y las directrices de la AEPD, las herramientas
                estrictamente necesarias para prestar un servicio expresamente solicitado por el usuario (como la preferencia visual de interfaz)
                están legalmente exentas del requisito de consentimiento previo mediante banners obstructivos.
              </p>

              <h3>3. Gestión y Eliminación en tu Navegador</h3>
              <p>
                Aun cuando no se instalan cookies de rastreo, puedes borrar o restringir en cualquier instante los datos locales
                almacenados a través de las preferencias de privacidad de tu navegador:
              </p>
              <ul className="legal-list">
                <li><strong>Google Chrome:</strong> Configuración &gt; Privacidad y seguridad &gt; Cookies y otros datos de sitios.</li>
                <li><strong>Mozilla Firefox:</strong> Ajustes &gt; Privacidad &amp; Seguridad &gt; Cookies y datos del sitio.</li>
                <li><strong>Apple Safari:</strong> Preferencias &gt; Privacidad &gt; Gestionar datos de sitios web.</li>
                <li><strong>Microsoft Edge:</strong> Configuración &gt; Permisos del sitio &gt; Cookies y datos almacenados.</li>
              </ul>
            </div>
          )}

          {/* TAB 3: AVISO LEGAL */}
          {activeTab === 'aviso-legal' && (
            <div className="legal-content-section">
              <div className="legal-highlight-box green">
                <CheckCircle2 size={20} className="highlight-icon" />
                <div>
                  <strong>Aviso Legal LSSI-CE:</strong> Información requerida por la Ley 34/2002, de 11 de julio, de servicios
                  de la sociedad de la información y de comercio electrónico (LSSI-CE).
                </div>
              </div>

              <h3>1. Datos Identificativos del Titular</h3>
              <p>
                En cumplimiento del artículo 10 de la Ley 34/2002 (LSSI-CE), se facilitan los datos identificativos del responsable
                del presente sitio web:
              </p>
              <ul className="legal-list">
                <li><strong>Titular:</strong> Mario García Luque</li>
                <li><strong>Actividad Profesional:</strong> Desarrollo de Software &amp; Soluciones Web Full Stack</li>
                <li><strong>Residencia y Localización:</strong> Alhaurín de la Torre, Málaga (España)</li>
                <li><strong>Correo electrónico:</strong> <a href="mailto:garcialuquemario7@gmail.com">garcialuquemario7@gmail.com</a></li>
                <li><strong>Dominio oficial:</strong> mario-garcia-luque.vercel.app</li>
                <li>
                  <strong>Identificación Fiscal (NIF):</strong> Por motivos de ciberseguridad, prevención de phishing y minimización
                  de riesgos frente al fraude de identidad digital, el documento fiscal se encuentra a disposición y será facilitado de forma
                  inmediata a cualquier parte interesada o autoridad competente previa solicitud justificada remitida al correo electrónico indicado.
                </li>
              </ul>

              <h3>2. Objeto y Condiciones de Uso</h3>
              <p>
                El acceso y navegación por este sitio web atribuye la condición de Usuario e implica la aceptación plena de las presentes
                disposiciones. La finalidad del sitio es presentar el portfolio profesional, proyectos de software, formación técnica y vías
                de contacto directo de Mario García Luque.
              </p>

              <h3>3. Propiedad Intelectual e Industrial</h3>
              <p>
                El diseño de la web, estructura de interfaz, textos, componentes y logotipos son titularidad de Mario García Luque o
                disponen de autorización legítima.
              </p>
              <ul className="legal-list">
                <li>
                  <strong>Proyectos de Código Abierto:</strong> Los proyectos de software exhibidos con enlace a repositorios públicos
                  (GitHub) se distribuyen bajo los términos de sus respectivas licencias de código abierto (MIT, GPL, Apache 2.0 u homologadas).
                </li>
                <li>
                  <strong>Marcas de Terceros:</strong> Los nombres comerciales, logos y tecnologías citadas (React, TypeScript, Vercel, etc.)
                  pertenecen a sus respectivos titulares y se mencionan exclusivamente con fines identificativos y divulgativos de habilidades técnicas.
                </li>
              </ul>

              <h3>4. Exclusión de Responsabilidad</h3>
              <p>
                El titular realiza los mayores esfuerzos para asegurar la fiabilidad y disponibilidad ininterrumpida del sitio web, pero
                no se responsabiliza de posibles caídas técnicas derivadas de la infraestructura del proveedor de hosting (Vercel) o
                incidencias ajenas en la red.
              </p>
              <p>
                Asimismo, respecto a los <strong>enlaces externos</strong> (links a GitHub, LinkedIn, demostraciones de proyectos u otras páginas),
                el titular no ejerce control sobre contenidos o políticas de sitios externos enlazados, eximiéndose de cualquier responsabilidad por los mismos.
              </p>

              <h3>5. Seguridad y Cabeceras Defensivas</h3>
              <div className="legal-security-pill">
                <Lock size={16} />
                <span>
                  Este sitio web implementa cabeceras defensivas estrictas de seguridad (Content-Security-Policy, HSTS preloaded, X-Frame-Options SAMEORIGIN,
                  X-Content-Type-Options nosniff y Referrer-Policy estricta) para proteger la integridad y privacidad de sus visitantes.
                </span>
              </div>

              <h3>6. Legislación Aplicable y Jurisdicción</h3>
              <p>
                Para la resolución de cualquier controversia o cuestión relativa al presente sitio web, será de aplicación la
                legislación española y de la Unión Europea, siendo competentes los Juzgados y Tribunales de Málaga (España).
              </p>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="legal-modal-footer">
          <div className="legal-footer-info">
            Última actualización: Octubre 2026
          </div>
          <button type="button" className="legal-accept-btn" onClick={onClose}>
            Entendido y cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
