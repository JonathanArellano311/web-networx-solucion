# NetworX Solutions Web

Web corporativa premium para NetworX Solutions, enfocada en telecomunicaciones, desarrollo web y automatización.

## Requisitos

- Node.js 20 o superior
- npm

## Instalación

```bash
npm install
npm run dev
```

Abrir:

```text
http://localhost:3000
```

## Producción

```bash
npm run build
npm run start
```

## Contenido editable

La información principal está en:

```text
src/data/site.ts
```

Allí puedes cambiar:

- Navegación
- Servicios
- Proyectos
- Tecnologías
- Estadísticas
- Contacto
- WhatsApp
- Redes sociales

## Logo

Los logos temporales están en:

```text
public/media/logo/
```

Reemplaza:

```text
networx-solutions-logo.svg
networx-solutions-logo-light.svg
```

por los archivos reales sin borde morado.

## Video de portada

Coloca los videos reales aquí:

```text
public/media/video/
```

Nombres esperados:

```text
hero-desktop.webm
hero-desktop.mp4
hero-mobile.webm
hero-poster.jpg
```

Si no existen, la web muestra la escena tecnológica CSS de respaldo.

## Estadísticas

Las cifras en `stats` usan placeholders:

```text
[AÑOS_DE_EXPERIENCIA]
[PROYECTOS_COMPLETADOS]
[EMPRESAS_ATENDIDAS]
[REDES_OPTIMIZADAS]
```

Reemplazar por datos reales antes de publicar.

## Formulario

El formulario tiene validación local y estado visual. Para producción debe conectarse a:

- API propia
- Servicio SMTP
- CRM
- Webhook externo

## Despliegue en VPS/Nginx

1. Instalar dependencias:

```bash
npm install
npm run build
```

2. Ejecutar con PM2:

```bash
pm2 start npm --name networx-web -- start
```

3. Configurar Nginx como proxy hacia el puerto de Next.js.

## Despliegue en Vercel

Importar el repositorio y configurar:

```text
NEXT_PUBLIC_SITE_URL
NEXT_PUBLIC_WHATSAPP_NUMBER
NEXT_PUBLIC_CONTACT_EMAIL
```

## Notas

- No se inventaron certificaciones ni asociaciones.
- Los proyectos placeholder están marcados para reemplazo.
- Las marcas tecnológicas pertenecen a sus propietarios.
