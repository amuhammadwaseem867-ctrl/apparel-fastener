import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import "@/components/EditorialHero.css";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://apparelfastener.com"),
  title: {
    default: "APPAREL FASTENER — Garments, Fabrics & Garment Accessories",
    template: "%s — APPAREL FASTENER",
  },
  description:
    "Apparel Fastener is an international apparel company across three divisions: Garments, Fabrics and Garment Accessories.",
  keywords: [
    "apparel manufacturer",
    "garments",
    "fabrics",
    "garment accessories",
    "jackets",
    "sweaters",
  ],
  openGraph: {
    type: "website",
    siteName: "Apparel Fastener",
    title:
      "APPAREL FASTENER — Garments, Fabrics & Garment Accessories",
    description:
      "An integrated apparel company connecting garments, fabrics and garment accessories.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable}`}>
      <body>
        <SmoothScroll>
          <a className="skip-link" href="#main-content">
            Skip to content
          </a>

          <Header />

          {children}

          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}