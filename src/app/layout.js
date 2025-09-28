"use client";
import { Geist_Mono, Barlow } from "next/font/google";
import "./globals.css";
import Header from "@/components/view/Header";
import Footer from "@/components/view/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-barlow",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <html lang="en">
      <body className={`${barlow.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
