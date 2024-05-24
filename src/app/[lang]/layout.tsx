"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { MouseEvent, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <main className="mt-[55px] min-h-screen bg-gradient-to-r from-blue-950 to-sky-950 p-3 text-justify text-slate-100 ">
          {children}
        </main>
      </body>
    </html>
  );
}
