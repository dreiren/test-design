import type { Metadata } from "next";
import { Manrope, Outfit, Plus_Jakarta_Sans, Sora } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "United Royale Corporation — Design Concepts",
  description:
    "Two light, Gen Z/Alpha-friendly website redesign concepts for United Royale Corporation — Next.js ready.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${jakarta.variable} ${sora.variable} ${manrope.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
