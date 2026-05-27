import type { Metadata } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import WhatsAppFAB from "@/components/site/WhatsAppFAB";
import Analytics from "@/components/site/Analytics";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap"
});
const instrument = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400",
  style: ["normal", "italic"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://world-travel-co.vercel.app"),
  title: {
    default: "World Travel Co. · Concierge 360° de lujo en México",
    template: "%s · World Travel Co."
  },
  description:
    "Hoteles 5★, jets privados, cruceros, palcos hospitality, Mundial 2026. El concierge 360° de viajes de lujo en México.",
  openGraph: {
    type: "website",
    title: "World Travel Co.",
    description: "Hoteles, jets, cruceros, conciertos, Mundial 2026. Una sola agencia.",
    url: "https://world-travel-co.vercel.app",
    siteName: "World Travel Co.",
    locale: "es_MX",
    images: [{
      url: "/api/og?title=Concierge%20360%C2%B0%20de%20lujo&eyebrow=World%20Travel%20Co.&accent=ink",
      width: 1200, height: 630, alt: "World Travel Co."
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "World Travel Co.",
    description: "Hoteles, jets, cruceros, conciertos, Mundial 2026. Una sola agencia.",
    images: ["/api/og?title=Concierge%20360%C2%B0%20de%20lujo&eyebrow=World%20Travel%20Co.&accent=ink"]
  },
  icons: {
    icon:      "/icon.png",
    apple:     "/apple-icon.png"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${manrope.variable} ${instrument.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFAB />
        <Analytics />
      </body>
    </html>
  );
}
