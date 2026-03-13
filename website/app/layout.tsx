import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SocialSidebar from "@/components/layout/SocialSidebar";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dynazur.com'),
  title: {
    default: "Dynazur — For Those Who Live in Tomorrow",
    template: "%s | Dynazur",
  },
  description:
    "Premium print-on-demand brand offering apparel, books, mugs, home decor, and digital products. Designed for those who live in tomorrow.",
  icons: {
    icon: "/logos/favicon-32.png",
    apple: "/logos/apple-touch-icon.png",
  },
  openGraph: {
    title: "Dynazur — For Those Who Live in Tomorrow",
    description:
      "Premium print-on-demand brand offering apparel, books, mugs, home decor, and digital products.",
    type: "website",
    siteName: "Dynazur",
    images: [{ url: "/logos/logo-blue.png", width: 2051, height: 561, alt: "Dynazur" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} font-nunito antialiased`}>
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <Header />
        <SocialSidebar />
        <main id="main-content" className="pt-16 lg:pt-[72px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
