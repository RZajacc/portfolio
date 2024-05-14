"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

function NavBar({}: Props) {
  const pathname = usePathname();
  return (
    <nav>
      <Link
        href={"/"}
        className={`link ${pathname === "/" ? "m-1 font-bold" : "m-1"}`}
      >
        About
      </Link>
      <Link
        href={"/experience"}
        className={`link ${pathname === "/experience" ? "m-1 font-bold" : "m-1"}`}
      >
        Experience
      </Link>
      <Link
        href={"/projects"}
        className={`link ${pathname === "/projects" ? "m-1 font-bold" : "m-1"}`}
      >
        Projects
      </Link>
    </nav>
  );
}

export default NavBar;
