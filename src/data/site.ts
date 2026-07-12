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
  tagline: "Consultoria ISP · MikroTik · IPv4/IPv6 · Desarrollo web",
  email: "contacto@networxsolutions.example",
  phone: "+58 400-0000000",
  address: "Venezuela",
  whatsapp: {
    number: "584000000000",
    country: "VE",
    schedule: "Lunes a viernes",
    message:
      "Hola, visite la pagina de NetworX Solutions y me gustaria recibir asesoria para mejorar mi red o proyecto."
  },
  socials: {
    instagram: "#",
    linkedin: "#"
  }
};

export const navigation = [
  { label: "Inicio", href: "#inicio" },
  { label: "Consultoria", href: "#soluciones" },
  { label: "Redes ISP", href: "#telecom" },
  { label: "Web y sistemas", href: "#web" },
  { label: "Automatizacion", href: "#automatizacion" },
  { label: "Portafolio", href: "#proyectos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" }
];

export const solutionAreas = [
  {
    id: "telecom",
    kicker: "Consultoria ISP",
    title: "Gestion tecnica para escalar tu red",
    description:
      "Acompanamos a proveedores de internet en arquitectura, MikroTik, IPv4, IPv6, seguridad, optimizacion y decisiones tecnicas para crecer con control.",
    icon: RadioTower,
    services: ["MikroTik", "Routing y switching", "BGP y OSPF", "IPv4 e IPv6", "GPON", "Seguridad", "Monitoreo", "Optimizacion"]
  },
  {
    id: "web",
    kicker: "Web y sistemas",
    title: "Presencia digital con logica de negocio",
    description:
      "Disenamos sitios, portales y herramientas que no solo se ven bien: ayudan a vender, atender clientes, ordenar procesos y proyectar confianza.",
    icon: Code2,
    services: ["Webs corporativas", "Portales de clientes", "Sistemas internos", "Aplicaciones web", "Paneles de control", "Integracion con APIs", "Diseno responsive", "SEO"]
  },
  {
    id: "automatizacion",
    kicker: "Procesos inteligentes",
    title: "Automatizacion para operar sin friccion",
    description:
      "Conectamos pagos, clientes, soporte, redes y notificaciones para que el ISP o la empresa reduzca tareas manuales y responda mas rapido.",
    icon: Workflow,
    services: ["Pagos", "Activacion de servicios", "Gestion de clientes", "Alertas", "Reportes", "Integraciones", "Flujos empresariales", "Automatizacion para ISP"]
  }
];

export const telecomCapabilities = [
  { label: "Consultoria MikroTik", icon: Network },
  { label: "IPv4 e IPv6", icon: Cable },
  { label: "Migraciones controladas", icon: GitBranch },
  { label: "Auditorias de red", icon: ShieldCheck },
  { label: "Firewall y seguridad", icon: Lock },
  { label: "Optimizacion de trafico", icon: Gauge },
  { label: "Monitoreo operativo", icon: Activity },
  { label: "Documentacion tecnica", icon: Globe2 }
];

export const technologies = ["MikroTik", "Cisco", "Huawei", "ZTE", "IPv4", "IPv6", "GPON", "APIs"];

export const projects = [
  {
    name: "Fibertech",
    client: "Fibertech",
    category: "Web corporativa / ISP",
    year: "2026",
    description:
      "Sitio corporativo para un ISP real, trabajado con enfoque en marca, planes, cobertura, WhatsApp, experiencia movil y comunicacion clara para clientes finales.",
    technologies: ["Web corporativa", "ISP", "UX movil", "Atencion comercial"],
    result: "Sitio publicado",
    link: "https://fibertech.com.ve"
  }
];

export const useCases = [
  {
    title: "ISP que quieren escalar",
    items: ["MikroTik", "IPv4 e IPv6", "Segmentacion", "Monitoreo", "GPON", "Firewall", "Optimizar rutas y capacidad"]
  },
  {
    title: "Empresas con redes criticas",
    items: ["Redes corporativas", "Seguridad", "VPN", "Documentacion", "Soporte tecnico", "Dashboards", "Integracion de sistemas"]
  },
  {
    title: "Negocios que necesitan presencia digital",
    items: ["Sitios web", "Portales", "Automatizacion comercial", "Formularios", "WhatsApp", "SEO tecnico", "Experiencia movil"]
  }
];

export const stats = [
  { label: "Anos de experiencia", value: "+8" },
  { label: "Cliente destacado", value: "Fibertech" },
  { label: "Especialidad", value: "MikroTik" },
  { label: "Stack de red", value: "IPv4/IPv6" }
];

export const principles = ["Consultoria", "Claridad", "Escalabilidad", "Seguridad", "Acompanamiento", "Mejora continua"];

export const automationFlow = [
  "Detectamos la tarea repetitiva",
  "Conectamos plataformas",
  "Validamos datos y reglas",
  "Ejecutamos acciones",
  "Reportamos el resultado"
];

export const workMethod = ["Diagnostico", "Diseno", "Implementacion", "Pruebas", "Optimizacion", "Acompanamiento"];

export const serviceOptions = ["Consultoria ISP", "MikroTik / redes", "Desarrollo web", "Automatizacion", "Otro"];
