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
  // Connect cursor location with cursor image made in the div
  const cursorStyle = (e: MouseEvent<HTMLBodyElement>) => {
    let cursor = document.querySelector("#cursor") as HTMLDivElement;
    cursor.style.top = e.pageY - scrollY + "px";
    cursor.style.left = e.pageX - scrollX + "px";
  };

  useEffect(() => {
    // Select the cursor element
    let cursor = document.querySelector("#cursor") as HTMLDivElement;

    // Remove cursor if touchscreen is being used
    const handleTouchStart = () => {
      // If mouse pointer was moved previously I will delete pointer here
      const isHidden = cursor.classList.contains("hidden");
      if (!isHidden) {
        cursor.classList.add("hidden");
      }
    };

    // Add the cursor on mouse move
    const handleMouseMove = () => {
      // Cursor is hidden as default
      const isHidden = cursor.classList.contains("hidden");
      if (isHidden) {
        cursor.classList.remove("hidden");
      }
    };

    // Fire events
    window.addEventListener("touchstart", handleTouchStart);
    // Add the cursor (remove hidden class) when mouse cursor is being moved
    window.addEventListener("mousemove", handleMouseMove);

    // Clean event listeners
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className} onMouseMove={cursorStyle}>
        <div id="cursor" className="hidden"></div>
        <main className="mt-[55px] min-h-screen bg-gradient-to-r from-blue-950 to-sky-950 p-3 text-justify text-slate-100 ">
          {children}
        </main>
      </body>
    </html>
  );
}
