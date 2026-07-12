import type { Metadata, Viewport } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body"
});

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display"
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://networxsolutions.example"),
  title: "NetworX Solutions | Telecomunicaciones, Desarrollo Web y Automatización",
  description:
    "Soluciones profesionales en telecomunicaciones, desarrollo web y automatización para empresas, operadores e ISP.",
  keywords: [
    "consultoría en telecomunicaciones",
    "redes para ISP",
    "MikroTik",
    "Cisco",
    "Huawei",
    "ZTE",
    "desarrollo web",
    "automatización de procesos",
    "IPv6",
    "GPON"
  ],
  openGraph: {
    title: "NetworX Solutions",
    description:
      "Telecomunicaciones, desarrollo web y automatización para empresas, operadores e ISP.",
    type: "website",
    locale: "es_VE",
    siteName: "NetworX Solutions"
  },
  twitter: {
    card: "summary_large_image",
    title: "NetworX Solutions",
    description:
      "Soluciones profesionales en telecomunicaciones, desarrollo web y automatización."
  },
  alternates: {
    canonical: "/"
  },
  manifest: "/manifest.webmanifest"
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#090909"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${manrope.variable} ${sora.variable}`}>
      <body>{children}</body>
    </html>
  );
}
