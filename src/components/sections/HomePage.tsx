"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, CircleDot, Cpu, ExternalLink, Server, Shield, Zap } from "lucide-react";
import {
  automationFlow,
  company,
  principles,
  projects,
  solutionAreas,
  stats,
  technologies,
  telecomCapabilities,
  useCases,
  visualMetrics,
  workMethod
} from "@/data/site";
import { ContactForm } from "@/components/ui/ContactForm";

const fade = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

export function HomePage() {
  const whatsapp = `https://wa.me/${company.whatsapp.number}?text=${encodeURIComponent(company.whatsapp.message)}`;

  return (
    <main>
      <LoaderIntro />

      <section id="inicio" className="hero-section">
        <div className="hero-media" aria-hidden="true">
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            poster="/media/video/hero-poster.jpg"
          >
            <source src="/media/video/hero-desktop.webm" type="video/webm" />
            <source src="/media/video/hero-desktop.mp4" type="video/mp4" />
          </video>
          <div className="network-scene">
            <span className="node n1" />
            <span className="node n2" />
            <span className="node n3" />
            <span className="line l1" />
            <span className="line l2" />
          </div>
        </div>
        <div className="hero-grid">
          <motion.div initial="hidden" animate="visible" variants={fade} transition={{ duration: 0.7 }} className="hero-copy">
            <p className="eyebrow">Telecomunicaciones · Software · Automatización</p>
            <h1>
              Ingeniería digital para operar mejor
            </h1>
            <p>
              Diseñamos redes, plataformas y flujos automáticos para empresas que necesitan control técnico,
              velocidad de respuesta y una presencia digital de alto nivel.
            </p>
            <div className="hero-actions">
              <a href="#soluciones" className="btn-primary">
                Explorar soluciones <ArrowRight size={18} />
              </a>
              <a href="#contacto" className="btn-secondary">
                Hablar con un experto
              </a>
            </div>
          </motion.div>

          <motion.div className="hero-system" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.25, duration: 0.75 }}>
            <div className="topology">
              {["Internet", "Borde", "Core", "OLT", "Clientes"].map((node, index) => (
                <span key={node} className={`topology-node t${index + 1}`}>
                  {node}
                </span>
              ))}
            </div>
            <div className="monitor-panel">
              <div className="panel-head"><span /> <span /> <span /></div>
              {visualMetrics.map((metric) => (
                <div key={metric.label} className="metric-row">
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                </div>
              ))}
            </div>
            <div className="flow-chip"><Zap size={16} /> procesos automáticos</div>
          </motion.div>
        </div>
        <a href="#posicionamiento" className="scroll-cue" aria-label="Desplazarse a la siguiente sección" />
      </section>

      <RevealSection id="posicionamiento" className="positioning-section">
        <h2>Infraestructura, software y automatización en una misma estrategia.</h2>
        <p>Unimos redes, sistemas y procesos para que la operación funcione con menos fricción y más visibilidad.</p>
      </RevealSection>

      <RevealSection id="soluciones" className="areas-section">
        <SectionIntro
          eyebrow="Áreas principales"
          title="Tres frentes técnicos para una operación más fuerte"
          text="No se trata de tener más herramientas. Se trata de que todo hable entre sí."
        />
        <div className="areas-grid">
          {solutionAreas.map((area) => (
            <article key={area.id} className="area-panel" id={area.id}>
              <area.icon size={30} />
              <p className="eyebrow">{area.kicker}</p>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
              <div className="chips">
                {area.services.map((service) => (
                  <span key={service}>{service}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </RevealSection>

      <RevealSection id="telecom" className="telecom-section">
        <div className="split">
          <div>
            <p className="eyebrow">Telecomunicaciones para ISP y empresas</p>
            <h2>Expertos en el núcleo de tu operación</h2>
            <p>Trabajamos con redes que necesitan estabilidad, seguridad, escalabilidad y control.</p>
            <div className="capability-grid">
              {telecomCapabilities.map((capability) => (
                <span key={capability.label}>
                  <capability.icon size={18} /> {capability.label}
                </span>
              ))}
            </div>
          </div>
          <NetworkDiagram />
        </div>
      </RevealSection>

      <RevealSection className="technology-section">
        <SectionIntro
          eyebrow="Tecnologías"
          title="Tecnologías con las que trabajamos"
          text="Las marcas mencionadas pertenecen a sus respectivos propietarios. NetworX Solutions trabaja con tecnologías de distintos fabricantes y no implica afiliación oficial."
        />
        <div className="tech-strip">
          {technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </RevealSection>

      <RevealSection id="web" className="web-section">
        <div className="split reverse">
          <BrowserMockup />
          <div>
            <p className="eyebrow">Desarrollo web</p>
            <h2>Interfaces que se sienten precisas por fuera y robustas por dentro.</h2>
            <p>Creamos productos digitales que combinan identidad, velocidad, experiencia de usuario y lógica de negocio.</p>
            <div className="process-tabs">
              {["Idea", "Diseño", "Desarrollo", "Publicación", "Optimización"].map((step) => (
                <span key={step}>{step}</span>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection id="automatizacion" className="automation-section">
        <SectionIntro
          eyebrow="Automatización"
          title="Procesos que trabajan incluso cuando tú no estás mirando"
          text="Integramos plataformas, APIs y sistemas para reducir errores, tiempos de espera y tareas repetitivas."
        />
        <div className="automation-flow">
          {automationFlow.map((item, index) => (
            <div key={item} className="flow-step">
              <span>{index + 1}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="method-section">
        <SectionIntro
          eyebrow="Metodología"
          title="Cada proyecto comienza entendiendo el problema"
          text="No vendemos una solución prefabricada. Diseñamos el camino técnico según la operación."
        />
        <div className="timeline">
          {workMethod.map((step, index) => (
            <div key={step} className="timeline-step">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
      </RevealSection>

      <RevealSection id="proyectos" className="projects-section">
        <SectionIntro
          eyebrow="Portafolio"
          title="Proyectos que conectan estrategia y tecnología"
          text="Contenido editable desde datos. Los placeholders deben reemplazarse por proyectos reales."
        />
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.name} className="project-card">
              <div className={`project-visual ${project.name === "Fibertech" ? "fibertech-cover" : ""}`}>
                {project.name === "Fibertech" ? <span className="fibertech-f">F</span> : <Cpu size={38} />}
              </div>
              <p className="eyebrow">{project.category}</p>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="chips">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <a href={project.link} target={project.link === "#" ? undefined : "_blank"} rel="noreferrer">
                Ver proyecto <ExternalLink size={15} />
              </a>
            </article>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="usecases-section">
        <SectionIntro eyebrow="Casos de uso" title="Soluciones para diferentes operaciones" text="Adaptamos la arquitectura técnica al perfil y ritmo de cada organización." />
        <div className="usecase-grid">
          {useCases.map((useCase) => (
            <article key={useCase.title}>
              <h3>{useCase.title}</h3>
              {useCase.items.map((item) => (
                <p key={item}><Check size={16} /> {item}</p>
              ))}
            </article>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="stats-section">
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </RevealSection>

      <RevealSection id="nosotros" className="about-section">
        <div className="split">
          <div>
            <p className="eyebrow">Nosotros</p>
            <h2>Tecnología entendida desde la experiencia</h2>
          </div>
          <div>
            <p>
              NetworX Solutions nace para ayudar a empresas y operadores a resolver retos tecnológicos reales. Combinamos experiencia
              en telecomunicaciones, desarrollo de software y automatización para crear soluciones adaptadas a cada operación.
            </p>
            <div className="principles">
              {principles.map((principle) => (
                <span key={principle}>{principle}</span>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="cta-section">
        <div className="cta-box">
          <div className="x-mark">X</div>
          <h2>Convirtamos tu próximo desafío en una solución</h2>
          <p>Cuéntanos qué necesitas mejorar, conectar o automatizar. Nuestro equipo analizará tu proyecto y te ayudará a definir el mejor camino.</p>
          <div className="hero-actions center">
            <a href="#contacto" className="btn-primary">Solicitar una consulta</a>
            <a href={whatsapp} target="_blank" rel="noreferrer" className="btn-secondary">Contactar por WhatsApp</a>
          </div>
        </div>
      </RevealSection>

      <RevealSection id="contacto" className="contact-section">
        <div className="split">
          <div>
            <p className="eyebrow">Contacto</p>
            <h2>Hablemos de tu operación</h2>
            <p>El formulario queda preparado para conectarlo posteriormente con una API, correo o CRM.</p>
          </div>
          <ContactForm />
        </div>
      </RevealSection>
    </main>
  );
}

function LoaderIntro() {
  return (
    <motion.div className="loader-intro" initial={{ opacity: 1 }} animate={{ opacity: 0, pointerEvents: "none" }} transition={{ delay: 1.7, duration: 0.45 }}>
      <motion.div className="loader-x" initial={{ scale: 0.4, rotate: -12 }} animate={{ scale: 1, rotate: 0 }} transition={{ duration: 0.6 }}>
        X
      </motion.div>
      <motion.div className="loader-lines" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35, duration: 0.6 }} />
      <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75, duration: 0.5 }}>
        NetworX Solutions
      </motion.p>
    </motion.div>
  );
}

function RevealSection({ id, className, children }: { id?: string; className?: string; children: React.ReactNode }) {
  return (
    <motion.section
      id={id}
      className={`section ${className || ""}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
      variants={fade}
      transition={{ duration: 0.65 }}
    >
      {children}
    </motion.section>
  );
}

function SectionIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="section-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function NetworkDiagram() {
  const nodes = ["Internet", "Router de borde", "Core", "Switch", "OLT", "Clientes", "Servidores", "Monitoreo"];
  return (
    <div className="network-diagram" aria-label="Topología de red animada">
      {nodes.map((node, index) => (
        <span key={node} className={`diagram-node d${index + 1}`}>
          <CircleDot size={15} /> {node}
        </span>
      ))}
      <div className="pulse-line p1" />
      <div className="pulse-line p2" />
      <div className="pulse-line p3" />
      <div className="server-card"><Server size={22} /> uptime monitor</div>
      <div className="shield-card"><Shield size={22} /> firewall rules</div>
    </div>
  );
}

function BrowserMockup() {
  return (
    <div className="browser-mockup" aria-label="Vista de desarrollo web">
      <div className="code-video-bg" aria-hidden="true">
        <span>deploy:web --target production</span>
        <span>api.sync(payments, clients)</span>
        <span>router bgp 65001 / ipv6 ready</span>
        <span>build completed in 1.8s</span>
        <span>automation.flow.status = active</span>
        <span>monitor latency: 7ms</span>
      </div>
      <div className="browser-top"><span /><span /><span /></div>
      <div className="browser-body">
        <aside />
        <main>
          <div className="skeleton hero" />
          <div className="skeleton line" />
          <div className="skeleton line short" />
          <div className="mini-grid">
            <span />
            <span />
            <span />
          </div>
        </main>
        <div className="phone-preview">
          <span />
          <strong />
          <em />
        </div>
      </div>
    </div>
  );
}
