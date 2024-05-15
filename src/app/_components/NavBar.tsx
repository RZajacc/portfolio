"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Props = {};

function NavBar({}: Props) {
  const pathname = usePathname();

  const [activeSection, setActiveSection] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute("id")!;
        }
      });
      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed left-0 top-0 flex w-full justify-center bg-blue-950 p-2 text-slate-100 lg:hidden">
      <Link
        href={"#about"}
        className={
          activeSection === "about"
            ? "m-1 rounded-2xl bg-gradient-radial from-slate-800 to-slate-500 px-2 py-1 font-bold"
            : "m-1 px-2 py-1"
        }
      >
        About
      </Link>
      <Link
        href={"#experience"}
        className={
          activeSection === "experience"
            ? "m-1 rounded-2xl bg-gradient-radial from-slate-800 to-slate-500 px-2 py-1 font-bold"
            : "m-1 px-2 py-1"
        }
      >
        Experience
      </Link>
      <Link
        href={"#projects"}
        className={
          activeSection === "projects"
            ? "m-1 rounded-2xl bg-gradient-radial from-slate-800 to-slate-500 px-2 py-1 font-bold"
            : "m-1 px-2 py-1"
        }
      >
        Projects
      </Link>
    </nav>
  );
}

export default NavBar;
