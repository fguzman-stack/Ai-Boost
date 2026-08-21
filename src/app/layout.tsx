import type { Metadata } from "next";
import Footer from "./components/Footer";
import { LanguageProvider } from "./components/LanguageProvider";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI-Boost Pro | Plantilla premium para negocios de IA",
  description: "Plantilla premium para negocios de inteligencia artificial, con herramientas de chat, contenido, resúmenes e imágenes listas para personalizar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
