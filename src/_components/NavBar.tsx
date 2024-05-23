"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import LanguageSwitch from "./LanguageSwitch";

type Props = {
  lang: {
    about: string;
    experience: string;
    projects: string;
  };
};

function NavBar({ lang }: Props) {
  const [activeSection, setActiveSection] = useState("");
  // Handling scrolling into element on the page
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionID: string,
  ) => {
    e.preventDefault();

    // Section to scroll into
    const section = document.getElementById(sectionID);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
      // Adjustment for navbar height (its position is fixed)
      const yOffset = 55;
      const y = section.getBoundingClientRect().top + window.scrollY - yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Get all secions in the page
      const sections = document.querySelectorAll("section");
      // Set current location
      let currentSection = "";
      // Loop through sections and define which one is active
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        // Activate new section short before it starts
        if (scrollY >= sectionTop - 100) {
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
    <nav className="fixed left-0 top-0 flex w-full items-baseline justify-center bg-gradient-to-r from-blue-950 to-sky-950 p-2 align-middle text-slate-100">
      <Link
        href={"#about"}
        scroll={false}
        className={
          activeSection === "about"
            ? " m-1 rounded-2xl bg-gradient-radial from-slate-800 to-slate-500 px-2 py-1 font-bold duration-300 ease-in"
            : "m-1 px-2 py-1"
        }
        onClick={(e) => {
          handleLinkClick(e, "about");
        }}
      >
        {lang.about}
      </Link>
      <Link
        href={"#experience"}
        scroll={false}
        className={
          activeSection === "experience"
            ? "m-1 rounded-2xl bg-gradient-radial from-slate-800 to-slate-500 px-2 py-1 font-bold duration-300 ease-in"
            : "m-1 px-2 py-1"
        }
        onClick={(e) => {
          handleLinkClick(e, "experience");
        }}
      >
        {lang.experience}
      </Link>
      <Link
        href={"#projects"}
        scroll={false}
        className={
          activeSection === "projects"
            ? "m-1 rounded-2xl bg-gradient-radial from-slate-800 to-slate-500 px-2 py-1 font-bold duration-300 ease-in"
            : "m-1 px-2 py-1"
        }
        onClick={(e) => {
          handleLinkClick(e, "projects");
        }}
      >
        {lang.projects}
      </Link>
      <LanguageSwitch />
    </nav>
  );
}

export default NavBar;
