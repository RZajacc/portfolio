"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

function NavBar({}: Props) {
  const pathname = usePathname();

  return (
    <nav className="fixed left-0 top-0 flex w-full justify-center bg-blue-950 p-2 text-slate-100 lg:hidden">
      <Link
        href={"/"}
        className={`link ${pathname === "/" ? "m-1 rounded-2xl bg-gradient-radial from-slate-800 to-slate-500 px-2 py-1 font-bold" : "m-1 px-2 py-1"}`}
      >
        About
      </Link>
      <Link
        href={"/experience"}
        className={`link ${pathname === "/experience" ? "m-1 rounded-2xl bg-gradient-radial from-slate-800 to-slate-500 px-2 py-1 font-bold" : "m-1 px-2 py-1"}`}
      >
        Experience
      </Link>
      <Link
        href={"/projects"}
        className={`link ${pathname === "/projects" ? "m-1 rounded-2xl bg-gradient-radial from-slate-800 to-slate-500 px-2 py-1 font-bold" : "m-1 px-2 py-1"}`}
      >
        Projects
      </Link>
    </nav>
  );
}

export default NavBar;
