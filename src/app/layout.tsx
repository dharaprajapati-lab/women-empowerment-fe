import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Women Empowerment & Community Development",
  description:
    "Empowering women and communities through sustainable development, education, healthcare, and livelihood programs across India.",
  keywords: [
    "women empowerment",
    "NGO India",
    "WAMMCO",
    "SANKALP",
    "community development",
    "livelihoods",
    "public health",
  ],
  openGraph: {
    title: "Women - Women Empowerment & Community Development",
    description:
      "Empowering women and communities through sustainable development, education, healthcare, and livelihood programs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased font-sans bg-background text-foreground">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
