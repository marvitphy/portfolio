import type { Metadata } from "next";
import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { LanguageProvider } from "@/components/language-provider";

// Display: Bricolage Grotesque — grotesca de contraste alto, característica, longe
// do Inter/Space Grotesk genéricos. Carrega os pesos que a hierarquia usa.
const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// Mono: o toque de engenheiro — números de projeto, labels, meta.
const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Marcos Vitor · Fundador & CTO da LoveTickets",
  description: "Founder-engineer. Construo produtos de ponta a ponta e orquestro frotas de IA que desenvolvem em paralelo, em produção.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${mono.variable} antialiased`}>
      <body>
        <LanguageProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
