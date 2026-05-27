import type { Metadata } from "next";
import { Manrope, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import WhatsAppFAB from "@/components/site/WhatsAppFAB";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap"
});
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wtravelcompany.com"),
  title: {
    default: "World Travel Co. · Cruceros, tours y experiencias únicas",
    template: "%s · World Travel Co."
  },
  description:
    "Agencia de viajes en México. Cruceros Disney, Royal Caribbean, Celebrity, Norwegian. Tours por Japón, Corea, Italia y Mediterráneo con asesoría personalizada.",
  openGraph: {
    type: "website",
    title: "World Travel Co.",
    description: "Cruceros, tours y experiencias únicas. Asesoría personalizada en México.",
    url: "https://wtravelcompany.com",
    siteName: "World Travel Co.",
    images: ["/paquetes/japon-samurai.jpg"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${manrope.variable} ${fraunces.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
