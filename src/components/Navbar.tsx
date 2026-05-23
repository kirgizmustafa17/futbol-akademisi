"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#anasayfa", label: "Ana Sayfa" },
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#programlar", label: "Programlar" },
  { href: "#antrenorler", label: "Antrenörler" },
  { href: "#fiyatlandirma", label: "Fiyatlandırma" },
  { href: "#iletisim", label: "İletişim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16 md:h-20">
        {/* Logo */}
        <a
          href="#anasayfa"
          className="flex items-center gap-2 text-xl md:text-2xl font-extrabold font-montserrat"
        >
          <span className="text-3xl">⚽</span>
          <span
            className={`transition-colors ${
              scrolled ? "text-green-700" : "text-white"
            }`}
          >
            AKADEMI
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors hover:bg-green-500/10 ${
                  scrolled
                    ? "text-gray-700 hover:text-green-700"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#iletisim"
              className="ml-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white text-sm font-bold rounded-full transition-colors shadow-md hover:shadow-lg"
            >
              Kayıt Ol
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg"
          aria-label="Menü"
        >
          <svg
            className={`w-6 h-6 ${scrolled ? "text-gray-800" : "text-white"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t shadow-xl">
          <ul className="flex flex-col px-4 py-3 gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-lg text-gray-700 font-semibold hover:bg-green-50 hover:text-green-700 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#iletisim"
                onClick={() => setMobileOpen(false)}
                className="block text-center px-4 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors"
              >
                Kayıt Ol
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
