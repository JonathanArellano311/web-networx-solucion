import { MessageCircle } from "lucide-react";
import { company } from "@/data/site";

export function FloatingWhatsApp() {
  const href = `https://wa.me/${company.whatsapp.number}?text=${encodeURIComponent(company.whatsapp.message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-ember text-white shadow-glow transition hover:scale-105 hover:bg-flame"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={25} />
    </a>
  );
}
