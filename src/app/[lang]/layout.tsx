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
    const handleTouch = () => {
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

    // Add the cursor when action with mouse is made
    const handleMouseClick = () => {
      // Cursor is hidden as default
      const isHidden = cursor.classList.contains("hidden");

      if (isHidden) {
        cursor.classList.remove("hidden");
      }
    };

    const handleClickEvent = () => {
      // If mouse pointer was moved previously I will delete pointer here
      const isHidden = cursor.classList.contains("hidden");
      if (!isHidden) {
        cursor.classList.add("hidden");
      }
    };

    // Fire events
    window.addEventListener("touchstart", handleTouch);
    window.addEventListener("touchend", handleTouch);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseClick);
    window.addEventListener("mouseup", handleMouseClick);
    window.addEventListener("click", handleClickEvent);

    // Clean event listeners
    return () => {
      window.removeEventListener("touchstart", handleTouch);
      window.removeEventListener("touchend", handleTouch);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseClick);
      window.removeEventListener("mouseup", handleMouseClick);
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
