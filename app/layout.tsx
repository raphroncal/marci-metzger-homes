import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Outfit,
  Playfair_Display_SC,
} from "next/font/google";
import "./globals.css";
import { Footer } from "./sections/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairSC = Playfair_Display_SC({
  variable: "--font-playfair-display-sc",
  subsets: ["latin"],
  weight: "400",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marci Metzger Homes",
  description: "Real estate website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairSC.variable} ${outfit.variable} antialiased scrollbar-hidden`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
