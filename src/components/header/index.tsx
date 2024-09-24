"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const sections = [
  {
    label: "Sobre",
    id: "about"
  },
  {
    label: "Habilidades",
    id: "skills"
  },
  {
    label: "Projetos",
    id: "projects"
  },
  {
    label: "Contato",
    id: "contact"
  }
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleCloseMenu(event: KeyboardEvent) {
      if (!menuOpen) return;
      event.key === "Escape" && setMenuOpen(false);
    }
    window.addEventListener("keydown", handleCloseMenu);
    return () => window.removeEventListener("keydown", handleCloseMenu);
  }, []);

  return (
    <header className="sticky top-0 z-10 bg-light-black/90">
      <nav className="content-wrapper hidden !max-w-screen-3xl flex-row justify-between md:flex md:py-5">
        <Link href="/#" className="h-10 w-10">
          <Image src="/logo.svg" priority alt="logo" width={40} height={40} />
        </Link>
        <ul className="flex flex-row gap-16">
          {sections.map(({ label, id }) => (
            <li
              key={id}
              className="cursor-pointer text-lg font-bold text-primary-50 opacity-50 transition-all hover:opacity-100"
            >
              <Link href={`#${id}`} className="p-1">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="content-wrapper flex !max-w-screen-3xl flex-row justify-between md:hidden md:py-5">
        <Link href="/#" className="h-10 w-10">
          <Image src="/logo.svg" priority alt="logo" width={40} height={40} />
        </Link>
        <button
          className={`h-10 w-10 cursor-pointer ${
            menuOpen ? "opacity-0" : "opacity-100"
          }`}
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <Image src="/bars.svg" alt="menu" width={40} height={40} />
        </button>
        <div
          onClick={e => {
            if (e.target === e.currentTarget) setMenuOpen(false);
          }}
          className={`fixed left-0 top-0 flex h-full w-full transition-all ${
            menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <div className="ml-auto flex h-full w-full max-w-xs flex-col items-center justify-center bg-light-black/90 ">
            <button
              className={`h-10 w-10 ${
                menuOpen
                  ? "absolute right-3 top-3 opacity-100"
                  : "pointer-events-none opacity-0"
              }`}
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <Image src="/close.svg" alt="close" width={40} height={40} />
            </button>
            <ul className="m-auto flex flex-col gap-16">
              {sections.map(({ label, id }) => (
                <li
                  key={id}
                  className="cursor-pointer text-lg font-bold text-primary-50 opacity-50 transition-all hover:opacity-100"
                  onClick={() => setMenuOpen(false)}
                >
                  <Link href={`#${id}`} className="p-1">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
