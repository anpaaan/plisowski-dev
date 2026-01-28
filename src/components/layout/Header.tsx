"use client";

import { useState, useEffect } from "react";
import { navigation } from "@/data/content";
import { MenuIcon, CloseIcon } from "@/components/ui/Icons";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--background)]/90 backdrop-blur-md shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="group relative font-mono text-lg font-semibold"
        >
          <span className="text-[var(--foreground)]">plisowski</span>
          <span className="text-[var(--accent)]">.dev</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--accent)] to-[var(--accent)]/50 group-hover:w-full transition-all duration-300" />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navigation.map((item, index) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors font-mono text-sm"
              >
                <span className="text-[var(--accent)]">0{index + 1}.</span>{" "}
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[var(--accent)] text-[var(--accent)] px-4 py-2 rounded font-mono text-sm hover:bg-[var(--accent-hover)] transition-colors"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[var(--accent)]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-[var(--background-light)]/95 backdrop-blur-md">
          <ul className="flex flex-col items-center justify-center h-full gap-8">
            {navigation.map((item, index) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[var(--foreground)] hover:text-[var(--accent)] transition-colors font-mono text-lg"
                >
                  <span className="text-[var(--accent)] block text-center text-sm mb-1">
                    0{index + 1}.
                  </span>
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[var(--accent)] text-[var(--accent)] px-8 py-3 rounded font-mono text-base hover:bg-[var(--accent-hover)] transition-colors"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
