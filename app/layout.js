import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import "@/components/ui.css";
import SmoothScroll from "@/components/SmoothScroll";
import RevealObserver from "@/components/RevealObserver";
import InlineScript from "@/components/InlineScript";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { company, siteUrl } from "@/lib/site";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const description =
  "Apparel Fastener Group manufactures garments, fabrics and garment accessories — one integrated group across Hong Kong, China and Pakistan with more than 15 years in textiles and apparel.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} — Garments, Fabrics & Garment Accessories`,
    template: `%s — ${company.name}`,
  },
  description,
  keywords: [
    "apparel manufacturer",
    "garment manufacturer China",
    "fabric manufacturer",
    "garment accessories",
    "sustainable fabrics",
    "jackets",
    "sweaters",
    "denim",
    "AF Group",
  ],
  openGraph: {
    type: "website",
    siteName: company.name,
    title: `${company.name} — Garments, Fabrics & Garment Accessories`,
    description,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <body>
        <InlineScript html="document.documentElement.classList.add('js')" />

        <SmoothScroll>
          <a className="skip-link" href="#main-content">
            Skip to content
          </a>

          <Header />

          {children}

          <Footer />
        </SmoothScroll>

        <RevealObserver />
      </body>
    </html>
  );
}
