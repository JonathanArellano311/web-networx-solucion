import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { HomePage } from "@/components/sections/HomePage";

export default function Page() {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
