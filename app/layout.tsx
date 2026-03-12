import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

export const metadata: Metadata = {
  title: "Barbell Cartel | Premier Strength Gym – Brookefield, Bangalore",
  description: "Barbell Cartel – Brookefield's most serious strength gym. Calibrated equipment, expert coaches, real results.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}