/* This is the RootLayout component, it´s a layout component that wraps the whole app.
   It includes the Header and Footer components and also the Geist and Geist_Mono fonts.
*/

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chuck´s Quotes",
  description: "Generated by Antoni for W&S",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <div className="flex flex-col min-h-screen px-8">
          <Header />
          <main className="grid sm:flex-grow max-w-7xl">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
