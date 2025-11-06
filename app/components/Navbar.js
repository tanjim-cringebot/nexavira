"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Return a loading state or null during SSR
  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Initial Logo and Navigation */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-1 sm:pt-2">
          {/* Logo */}
          <div className="flex justify-center pt-4 sm:pt-8">
            <img
              src="/Nexavira.png"
              alt="logo"
              className="w-[180px] xs:w-[220px] sm:w-[560px] md:w-[500px] h-auto"
            />
          </div>

          {/* Navigation Links */}
          <div className="flex justify-center mt-1 sm:mt-2">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[13px] sm:text-base text-gray-300">
              <Link
                href="/"
                className="hover:text-green-500 transition-colors duration-300"
              >
                Home
              </Link>
              <span className="text-green-500">/</span>
              <Link
                href="/about"
                className="hover:text-green-500 transition-colors duration-300"
              >
                About
              </Link>
              <span className="text-green-500">/</span>
              <Link
                href="/our-team"
                className="hover:text-green-500 transition-colors duration-300"
              >
                Team
              </Link>

              <span className="text-green-500">/</span>
              <Link
                href="/career"
                className="hover:text-green-500 transition-colors duration-300"
              >
                Career
              </Link>
              <span className="text-green-500">/</span>
              <Link
                href="/contact"
                className="hover:text-green-500 transition-colors duration-300"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolled Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${
          isScrolled ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="bg-black/50 backdrop-blur-sm border-b border-green-500/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo for mobile */}
              <div className="flex-shrink-0 sm:hidden">
                <img src="/logo.png" alt="logo" className="h-8 w-auto" />
              </div>

              {/* Desktop Navigation */}
              <div className="hidden sm:flex sm:justify-between sm:w-full">
                <div className="">
                  <img src="/Nexavira.png" alt="logo" className="h-8 w-auto" />
                </div>
                <div className="flex items-center space-x-2">
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-green-500 transition-colors duration-300"
                  >
                    Home
                  </Link>
                  <span className="text-green-500">/</span>
                  <Link
                    href="/about"
                    className="text-gray-300 hover:text-green-500 transition-colors duration-300"
                  >
                    About
                  </Link>
                  <span className="text-green-500">/</span>
                  <Link
                    href="/our-team"
                    className="text-gray-300 hover:text-green-500 transition-colors duration-300"
                  >
                    Team
                  </Link>

                  <span className="text-green-500">/</span>
                  <Link
                    href="/career"
                    className="text-gray-300 hover:text-green-500 transition-colors duration-300"
                  >
                    Career
                  </Link>
                  <span className="text-green-500">/</span>
                  <Link
                    href="/contact"
                    className="text-gray-300 hover:text-green-500 transition-colors duration-300"
                  >
                    Contact
                  </Link>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="sm:hidden">
                <button
                  type="button"
                  className="text-gray-300 hover:text-green-500 focus:outline-none"
                  aria-controls="mobile-menu"
                  aria-expanded={mobileMenuOpen}
                  aria-label="Toggle navigation menu"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <div id="mobile-menu" className={`sm:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/70 backdrop-blur-sm">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-300 hover:text-green-500 transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-300 hover:text-green-500 transition-colors duration-300"
              >
                About
              </Link>

              <Link
                href="/our-team"
                className="block px-3 py-2 text-gray-300 hover:text-green-500 transition-colors duration-300"
              >
                Team
              </Link>
              
              <Link
                href="/career"
                className="block px-3 py-2 text-gray-300 hover:text-green-500 transition-colors duration-300"
              >
                Career
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-gray-300 hover:text-green-500 transition-colors duration-300"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* Spacer to prevent content from sliding under the fixed navbar */}
      <div aria-hidden="true" className="h-28" />
    </>
  );
}
