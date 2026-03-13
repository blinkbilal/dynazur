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
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href={`${base}/icon.svg`} />
        <link rel="apple-touch-icon" href={`${base}/logos/apple-touch-icon.png`} />
      </head>
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
