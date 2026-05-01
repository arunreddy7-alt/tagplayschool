import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export const metadata = {
  title: "Tag Play School — Talented & Gifted",
  description:
    "Tag Play School: Where talented and gifted children learn, play, and grow. A fun, safe, and stimulating preschool & daycare experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased">
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <WhatsAppWidget />
        <Footer />
      </body>
    </html>
  );
}
