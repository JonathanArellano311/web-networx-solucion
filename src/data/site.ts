import {
  Activity,
  Cable,
  Code2,
  Gauge,
  GitBranch,
  Globe2,
  Lock,
  Network,
  RadioTower,
  ShieldCheck,
  Workflow
} from "lucide-react";

export const company = {
  name: "NetworX Solutions",
  tagline: "Telecomunicaciones · Desarrollo web · Automatización",
  email: "contacto@networxsolutions.example",
  phone: "+58 400-0000000",
  address: "Venezuela",
  whatsapp: {
    number: "584000000000",
    country: "VE",
    schedule: "Lunes a viernes",
    message:
      "Hola, visité la página de NetworX Solutions y me gustaría recibir información sobre sus servicios."
  },
  socials: {
    instagram: "#",
    linkedin: "#"
  }
};

export const navigation = [
  { label: "Inicio", href: "#inicio" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Telecomunicaciones", href: "#telecom" },
  { label: "Desarrollo web", href: "#web" },
  { label: "Automatización", href: "#automatizacion" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" }
];

export const solutionAreas = [
  {
    id: "telecom",
    kicker: "Telecomunicaciones",
    title: "Infraestructura preparada para crecer",
    description:
      "Construimos rutas claras para redes exigentes: arquitectura, configuración, seguridad, documentación y operación continua para empresas e ISP.",
    icon: RadioTower,
    services: ["Diseño de redes", "Routing y switching", "BGP y OSPF", "IPv4 e IPv6", "GPON", "Seguridad", "Monitoreo", "Optimización"]
  },
  {
    id: "web",
    kicker: "Desarrollo web",
    title: "Experiencias digitales que sí representan a tu empresa",
    description:
      "Convertimos identidad y procesos en productos web rápidos, sólidos y preparados para generar oportunidades reales.",
    icon: Code2,
    services: ["Webs corporativas", "Portales empresariales", "Sistemas administrativos", "Aplicaciones web", "Paneles de control", "Integración con APIs", "Diseño responsive", "SEO"]
  },
  {
    id: "automatizacion",
    kicker: "Automatización",
    title: "Menos tareas manuales. Más control.",
    description:
      "Diseñamos flujos que conectan pagos, clientes, plataformas y notificaciones para reducir tareas repetitivas y errores.",
    icon: Workflow,
    services: ["Automatización de pagos", "Activación de servicios", "Gestión de clientes", "Alertas", "Reportes", "Integraciones", "Flujos empresariales", "Automatización para ISP"]
  }
];

export const telecomCapabilities = [
  { label: "Arquitectura de red", icon: Network },
  { label: "Implementación", icon: Cable },
  { label: "Migraciones", icon: GitBranch },
  { label: "Auditorías", icon: ShieldCheck },
  { label: "Seguridad", icon: Lock },
  { label: "Optimización", icon: Gauge },
  { label: "Monitoreo", icon: Activity },
  { label: "Documentación técnica", icon: Globe2 }
];

export const technologies = ["MikroTik", "Cisco", "Huawei", "ZTE"];

export const projects = [
  {
    name: "Fibertech",
    client: "Fibertech",
    category: "Desarrollo web / Telecomunicaciones",
    year: "2026",
    description:
      "Presencia digital para una empresa de telecomunicaciones, con enfoque en planes, canales de atención, marca y experiencia móvil.",
    technologies: ["Web corporativa", "Contenido editable", "UX responsive"],
    result: "Proyecto publicado",
    link: "https://fibertech.com.ve"
  },
  {
    name: "Portal ISP",
    client: "Placeholder",
    category: "Sistemas",
    year: "Pendiente",
    description: "Proyecto de ejemplo para reemplazar por un caso real de portal de usuarios, pagos o soporte.",
    technologies: ["Placeholder"],
    result: "Pendiente por reemplazar",
    link: "#"
  },
  {
    name: "Automatización operativa",
    client: "Placeholder",
    category: "Automatización",
    year: "Pendiente",
    description: "Espacio reservado para documentar un flujo automático real con APIs, pagos o notificaciones.",
    technologies: ["Placeholder"],
    result: "Pendiente por reemplazar",
    link: "#"
  },
  {
    name: "Consultoría de red",
    client: "Placeholder",
    category: "Telecomunicaciones",
    year: "Pendiente",
    description: "Placeholder para un proyecto de arquitectura, optimización o documentación de redes.",
    technologies: ["Placeholder"],
    result: "Pendiente por reemplazar",
    link: "#"
  }
];

export const useCases = [
  {
    title: "Para ISP",
    items: ["Diseño de red", "Gestión de clientes", "Automatización de pagos", "Portales de usuarios", "Monitoreo", "IPv6", "Integración con MikroTik y OLT"]
  },
  {
    title: "Para empresas",
    items: ["Redes corporativas", "Ciberseguridad", "Plataformas internas", "Automatización", "Sitios web", "Dashboards", "Integración de sistemas"]
  },
  {
    title: "Para emprendedores",
    items: ["Landing pages", "Presencia digital", "Sistemas simples", "Integraciones de pago", "Automatización comercial"]
  }
];

// Reemplazar por cifras reales antes de publicar en produccion.
export const stats = [
  { label: "Años de experiencia", value: "[AÑOS_DE_EXPERIENCIA]" },
  { label: "Proyectos completados", value: "[PROYECTOS_COMPLETADOS]" },
  { label: "Empresas atendidas", value: "[EMPRESAS_ATENDIDAS]" },
  { label: "Redes optimizadas", value: "[REDES_OPTIMIZADAS]" }
];

export const principles = ["Compromiso", "Innovación", "Claridad", "Seguridad", "Escalabilidad", "Acompañamiento"];

export const automationFlow = [
  "Cliente realiza un pago",
  "Sistema verifica",
  "Plataforma actualiza",
  "Servicio se activa",
  "Cliente recibe notificación"
];

export const workMethod = ["Analizamos", "Diseñamos", "Implementamos", "Probamos", "Optimizamos", "Acompañamos"];

export const serviceOptions = ["Telecomunicaciones", "Desarrollo web", "Automatización", "Consultoría", "Otro"];

export const visualMetrics = [
  { label: "Core", value: "stable" },
  { label: "API", value: "ready" },
  { label: "IPv6", value: "dual" },
  { label: "Flow", value: "auto" }
];
