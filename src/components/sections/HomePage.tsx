"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, CircleDot, Cpu, ExternalLink, Server, Shield } from "lucide-react";
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
  workMethod
} from "@/data/site";
import { ContactForm } from "@/components/ui/ContactForm";

const fade = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

const codeLines = [
  "const stack = ['telecom', 'software', 'automation'];",
  "await deploy.portal({ channel: 'stable', rollback: true });",
  "network.edge.latency < 8 && services.sync();",
  "ipv6.dualStack.enable({ customers, billing, support });",
  "payments.on('approved', () => activateService());",
  "monitor.uplinks().stream(logs => dashboard.push(logs));",
  "api.gateway.secure({ firewall: true, rateLimit: 'smart' });",
  "if (incident.open) notify.support.whatsapp();",
  "queue.jobs.process('client-portal', { retries: 3 });",
  "analytics.flow.map(route => route.optimize());"
];

export function HomePage() {
  const whatsapp = `https://wa.me/${company.whatsapp.number}?text=${encodeURIComponent(company.whatsapp.message)}`;

  return (
    <main>
      <LoaderIntro />

      <section id="inicio" className="hero-section">
        <div className="hero-media" aria-hidden="true">
          <div className="hero-generated-video">
            <div className="video-grid" />
            <div className="video-orbit orbit-a" />
            <div className="video-orbit orbit-b" />
            <div className="video-console">
              <span>networx@core:~$ monitor uplinks --live</span>
              <span>const workflow = connect(payments, clients, olt);</span>
              <span>bgp.neighbor("edge-01").status = "established";</span>
              <span>await deploy("portal-client", &#123; channel: "stable" &#125;);</span>
              <span>if invoice.paid then service.activate();</span>
              <span>ipv6.prefix.delegate("business-cpe");</span>
              <span>automation.webhook("/payments").listen();</span>
              <span>logger.info("network latency: 7ms");</span>
            </div>
          </div>
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
            <h1>
              Consultores para hacer crecer tu red
            </h1>
            <p>
              Ayudamos a proveedores de internet y empresas a ordenar, optimizar y escalar su infraestructura
              con redes solidas, automatizacion y presencia digital profesional.
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

          <motion.div className="hero-code-stage" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }} aria-hidden="true">
            <div className="code-window">
              <div className="code-glow" />
              <div className="code-stream code-stream-a">
                {[...codeLines, ...codeLines].map((line, index) => (
                  <span key={`a-${index}`}>{line}</span>
                ))}
              </div>
              <div className="code-stream code-stream-b">
                {[...codeLines.slice(3), ...codeLines.slice(0, 3), ...codeLines].map((line, index) => (
                  <span key={`b-${index}`}>{line}</span>
                ))}
              </div>
              <div className="typing-line">
                <span>networx.deploy("automatizacion", "redes", "software")</span>
              </div>
            </div>
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
          eyebrow="Lo que resolvemos"
          title="Consultoria, software y operacion para ISP que quieren crecer"
          text="NetworX Solutions trabaja donde mas duele: red, soporte, clientes, automatizacion y presencia digital."
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
            <p className="eyebrow">Gestores y consultores para ISP</p>
            <h2>Mejoramos tu red segun lo que tu operacion necesite.</h2>
            <p>
              Auditamos, disenamos y acompanamos decisiones tecnicas para que tu ISP tenga mas estabilidad,
              mejor control, seguridad, capacidad de crecimiento y una ruta clara hacia IPv6.
            </p>
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
          eyebrow="Base tecnica"
          title="Tecnologias y criterios que dominamos"
          text="Trabajamos con equipos, protocolos y buenas practicas reales de operacion ISP. Las marcas mencionadas pertenecen a sus respectivos propietarios."
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
            <p className="eyebrow">Web, portales y sistemas</p>
            <h2>Sitios que venden confianza y sistemas que ordenan tu operacion.</h2>
            <p>
              Creamos paginas corporativas, portales para clientes, paneles internos e integraciones pensadas
              para que el negocio se vea serio y funcione mejor.
            </p>
            <div className="process-tabs">
              {["Marca", "UX movil", "Portal", "APIs", "SEO tecnico"].map((step) => (
                <span key={step}>{step}</span>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection id="automatizacion" className="automation-section">
        <SectionIntro
          eyebrow="Automatizacion operativa"
          title="Menos tareas manuales, mas velocidad de respuesta"
          text="Integramos plataformas, APIs, pagos, soporte y datos para que la operacion avance con menos errores y mas control."
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
          eyebrow="Metodo de trabajo"
          title="Primero entendemos la red, luego proponemos el camino"
          text="No vendemos recetas. Revisamos la operacion, detectamos riesgos y construimos una ruta tecnica posible."
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
          title="Trabajo real, presentado con seriedad"
          text="Mostramos proyectos publicados y verificables. Fibertech es nuestro caso destacado actual."
        />
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.name} className="project-card">
              <div className={`project-visual ${project.name === "Fibertech" ? "fibertech-cover" : ""}`}>
                {project.name === "Fibertech" ? <span className="fibertech-f">F</span> : <Cpu size={38} />}
              </div>
              <p>{project.description}</p>
              <a href={project.link} target={project.link === "#" ? undefined : "_blank"} rel="noreferrer">
                Ver proyecto <ExternalLink size={15} />
              </a>
            </article>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="usecases-section">
        <SectionIntro eyebrow="Casos de uso" title="Donde NetworX puede ayudarte" text="Somos consultores tecnicos para mejorar redes, sistemas y presencia digital con foco en resultados reales." />
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
            <h2>Experiencia tecnica para decisiones importantes</h2>
          </div>
          <div>
            <p>
              NetworX Solutions acompana a ISP y empresas que necesitan mejorar su red, ordenar procesos y crecer con tecnologia.
              Somos especialistas en MikroTik, IPv4, IPv6, redes corporativas, sitios web y soluciones para escalar servicios.
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
          <h2>Llevemos tu red y tu operacion al siguiente nivel</h2>
          <p>Cuentanos que necesitas mejorar. Revisamos tu caso y te orientamos con una ruta tecnica clara para avanzar.</p>
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
            <h2>Hablemos de tu red, sistema o proyecto web</h2>
            <p>Describe que quieres mejorar y te contactaremos para analizar el caso con enfoque tecnico y comercial.</p>
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
  const diagnostics = [
    ["MikroTik core", "routing limpio"],
    ["IPv4 / IPv6", "plan de crecimiento"],
    ["Firewall", "reglas auditadas"],
    ["Clientes", "segmentacion clara"],
    ["Monitoreo", "alertas accionables"],
    ["Capacidad", "rutas optimizadas"]
  ];

  return (
    <div className="network-diagram isp-consulting-panel" aria-label="Panel de consultoria para red ISP">
      <div className="consulting-radar">
        <span />
        <span />
        <strong>ISP</strong>
      </div>
      <div className="consulting-path path-a" />
      <div className="consulting-path path-b" />
      <div className="consulting-summary">
        <p className="eyebrow">Diagnostico NetworX</p>
        <h3>Red lista para escalar</h3>
        <p>MikroTik, IPv4/IPv6, seguridad, monitoreo y operacion bajo control.</p>
      </div>
      <div className="diagnostic-grid">
        {diagnostics.map(([title, text], index) => (
          <div key={title} className={`diagnostic-card dc${index + 1}`}>
            <CircleDot size={15} />
            <strong>{title}</strong>
            <span>{text}</span>
          </div>
        ))}
      </div>
      <div className="server-card"><Server size={22} /> uptime y capacidad</div>
      <div className="shield-card"><Shield size={22} /> seguridad perimetral</div>
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
      <div className="browser-top"><span /><span /><span /><strong>networx/web-system</strong></div>
      <div className="browser-body web-product-board">
        <aside>
          <span />
          <span />
          <span />
          <span />
        </aside>
        <main>
          <div className="web-hero-preview">
            <p>Portal ISP</p>
            <strong>clientes · pagos · soporte</strong>
          </div>
          <div className="web-dashboard-row">
            <span>SEO</span>
            <span>UX movil</span>
            <span>API</span>
          </div>
          <div className="web-panel-lines">
            <i />
            <i />
            <i />
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
