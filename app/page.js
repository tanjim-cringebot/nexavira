"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  FaReact,
  FaPython,
  FaGlobe,
  FaDatabase,
  FaCode,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { SiDjango, SiNextdotjs, SiPostgresql } from "react-icons/si";
import { BiBrain } from "react-icons/bi";
import { AiOutlineCloud } from "react-icons/ai";

export default function Home() {
  const [count, setCount] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll event listener
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Initial Logo and Navigation */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex justify-center pt-8">
            <img
              src="/logo.png"
              alt="logo"
              className="w-[250px] sm:w-[300px] md:w-[400px] h-auto"
            />
          </div>

          {/* Navigation Links */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center space-x-2 text-sm sm:text-base text-gray-300">
              <a
                href="#home"
                className="hover:text-green-500 transition-colors duration-300"
              >
                Home
              </a>
              <span className="text-green-500">/</span>
              <a
                href="#about"
                className="hover:text-green-500 transition-colors duration-300"
              >
                About
              </a>
              <span className="text-green-500">/</span>
              <a
                href="#career"
                className="hover:text-green-500 transition-colors duration-300"
              >
                Career
              </a>
              <span className="text-green-500">/</span>
              <a
                href="#contact"
                className="hover:text-green-500 transition-colors duration-300"
              >
                Contact
              </a>
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
              <div className="hidden sm:flex sm:justify-center sm:w-full">
                <div className="flex items-center space-x-2">
                  <a
                    href="#home"
                    className="text-gray-300 hover:text-green-500 transition-colors duration-300"
                  >
                    Home
                  </a>
                  <span className="text-green-500">/</span>
                  <a
                    href="#about"
                    className="text-gray-300 hover:text-green-500 transition-colors duration-300"
                  >
                    About
                  </a>
                  <span className="text-green-500">/</span>
                  <a
                    href="#career"
                    className="text-gray-300 hover:text-green-500 transition-colors duration-300"
                  >
                    Career
                  </a>
                  <span className="text-green-500">/</span>
                  <a
                    href="#contact"
                    className="text-gray-300 hover:text-green-500 transition-colors duration-300"
                  >
                    Contact
                  </a>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="sm:hidden">
                <button
                  type="button"
                  className="text-gray-300 hover:text-green-500 focus:outline-none"
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
          <div className={`sm:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className="block px-3 py-2 text-gray-300 hover:text-green-500 transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-300 hover:text-green-500 transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#career"
                className="block px-3 py-2 text-gray-300 hover:text-green-500 transition-colors duration-300"
              >
                Career
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-300 hover:text-green-500 transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content - Add padding-top to account for fixed navbar */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-48 sm:pt-52">
        {/* Logo with responsive sizing */}
        {/* <div className="flex justify-center sm:justify-start">
          <img
            src="/logo.png"
            alt="logo"
            className="w-[250px] sm:w-[300px] md:w-[400px] h-auto"
          />
        </div> */}

        {/* Welcome message with responsive text */}
        <div className="text-white text-xl sm:text-2xl mt-6 sm:mt-8 font-bold text-center sm:text-left">
          Welcome to Quantanyx Studio
        </div>

        {/* Description with responsive text */}
        <div className="text-white text-sm sm:text-md mt-2 sm:mt-4 font-bold text-center sm:text-left">
          We are a team of developers who are passionate about creating
          innovative solutions.
        </div>

        {/* Services section */}
        <div className="mt-8 sm:mt-12 lg:mt-16">
          <h1 className="text-white text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center sm:text-left">
            What we do
          </h1>

          {/* Service cards with responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* First card */}
            <div className="px-4 py-6 sm:p-6 border border-green-500 border-opacity-20 rounded-lg hover:border-opacity-40 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <SiNextdotjs className="text-green-500" size={28} sm={32} />
                <FaReact className="text-green-500" size={28} sm={32} />
              </div>
              <h2 className="text-white text-lg sm:text-xl font-bold mb-2">
                React & Next.js
              </h2>
              <p className="text-white text-sm sm:text-base">
                Modern, performant web applications built with React and
                Next.js. Featuring server-side rendering and optimal user
                experiences.
              </p>
            </div>

            {/* Second card */}
            <div className="px-4 py-6 sm:p-6 border border-green-500 border-opacity-20 rounded-lg hover:border-opacity-40 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <FaPython className="text-green-500" size={28} sm={32} />
                <SiDjango className="text-green-500" size={28} sm={32} />
              </div>
              <h2 className="text-white text-lg sm:text-xl font-bold mb-2">
                Django Development
              </h2>
              <p className="text-white text-sm sm:text-base">
                Robust backend solutions with Django. Building secure, scalable
                APIs and web applications with Python's most powerful framework.
              </p>
            </div>

            {/* Remaining cards following the same pattern */}
            <div className="px-4 py-6 sm:p-6 border border-green-500 border-opacity-20 rounded-lg hover:border-opacity-40 transition-all duration-300">
              <BiBrain className="text-green-500 mb-3" size={28} sm={32} />
              <h2 className="text-white text-lg sm:text-xl font-bold mb-2">
                Machine Learning
              </h2>
              <p className="text-white text-sm sm:text-base">
                Custom ML solutions for your business needs. From data analysis
                to predictive modeling and AI integration.
              </p>
            </div>

            <div className="px-4 py-6 sm:p-6 border border-green-500 border-opacity-20 rounded-lg hover:border-opacity-40 transition-all duration-300">
              <FaGlobe className="text-green-500 mb-3" size={28} sm={32} />
              <h2 className="text-white text-lg sm:text-xl font-bold mb-2">
                Website Development
              </h2>
              <p className="text-white text-sm sm:text-base">
                End-to-end website development with modern tech stack.
                Responsive designs, SEO optimization, and exceptional user
                experience.
              </p>
            </div>

            <div className="px-4 py-6 sm:p-6 border border-green-500 border-opacity-20 rounded-lg hover:border-opacity-40 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <FaCode className="text-green-500" size={28} sm={32} />
                <FaDatabase className="text-green-500" size={28} sm={32} />
              </div>
              <h2 className="text-white text-lg sm:text-xl font-bold mb-2">
                Software Development
              </h2>
              <p className="text-white text-sm sm:text-base">
                Custom software solutions tailored to your business needs. From
                desktop applications to complex enterprise systems.
              </p>
            </div>

            <div className="px-4 py-6 sm:p-6 border border-green-500 border-opacity-20 rounded-lg hover:border-opacity-40 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <SiPostgresql className="text-green-500" size={28} sm={32} />
                <AiOutlineCloud className="text-green-500" size={28} sm={32} />
              </div>
              <h2 className="text-white text-lg sm:text-xl font-bold mb-2">
                Database & Cloud Solutions
              </h2>
              <p className="text-white text-sm sm:text-base">
                Database design, optimization, and cloud infrastructure setup.
                Ensuring scalable and reliable data management systems.
              </p>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mt-16 sm:mt-20">
          <div className="text-center mb-12">
            <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Our Projects
            </h1>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
              Explore our portfolio of innovative solutions that have helped
              businesses transform their digital presence
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* SSTU */}
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-green-900/20 to-black/40 p-1">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div
                className="relative p-6 h-full border border-green-500/20 rounded-lg bg-black/40 backdrop-blur-sm 
                            transform transition-transform duration-300 group-hover:-translate-y-1"
              >
                <div className="absolute top-0 right-0 p-4">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                </div>
                <h2 className="text-white text-xl sm:text-2xl font-bold mb-3">
                  SSTU
                </h2>
                <p className="text-gray-300 text-sm sm:text-base mb-4">
                  Official website of Sunamgonj Science and Technology
                  University, using Django in the backend and NextJS in the
                  frontend
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-green-500/10 border border-green-500/20 text-green-500 px-2 py-1 rounded-full">
                    University
                  </span>
                  <span className="text-xs bg-green-500/10 border border-green-500/20 text-green-500 px-2 py-1 rounded-full">
                    Education
                  </span>
                  <span className="text-xs bg-green-500/10 border border-green-500/20 text-green-500 px-2 py-1 rounded-full">
                    Full Stack
                  </span>
                </div>
              </div>
            </div>

            {/* AI Community */}
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-green-900/20 to-black/40 p-1">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div
                className="relative p-6 h-full border border-green-500/20 rounded-lg bg-black/40 backdrop-blur-sm 
                            transform transition-transform duration-300 group-hover:-translate-y-1"
              >
                <div className="absolute top-0 right-0 p-4">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                </div>
                <h2 className="text-white text-xl sm:text-2xl font-bold mb-3">
                  AI Community
                </h2>
                <p className="text-gray-300 text-sm sm:text-base mb-4">
                  A collaborative platform for AI enthusiasts and professionals
                  to share knowledge and resources.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-green-500/10 border border-green-500/20 text-green-500 px-2 py-1 rounded-full">
                    Community
                  </span>
                  <span className="text-xs bg-green-500/10 border border-green-500/20 text-green-500 px-2 py-1 rounded-full">
                    AI
                  </span>
                  <span className="text-xs bg-green-500/10 border border-green-500/20 text-green-500 px-2 py-1 rounded-full">
                    Collaboration
                  </span>
                </div>
              </div>
            </div>

            {/* AMIRLab */}
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-green-900/20 to-black/40 p-1">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div
                className="relative p-6 h-full border border-green-500/20 rounded-lg bg-black/40 backdrop-blur-sm 
                            transform transition-transform duration-300 group-hover:-translate-y-1"
              >
                <div className="absolute top-0 right-0 p-4">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                </div>
                <h2 className="text-white text-xl sm:text-2xl font-bold mb-3">
                  AMIRLab
                </h2>
                <p className="text-gray-300 text-sm sm:text-base mb-4">
                  Research and development laboratory management system with
                  integrated project tracking.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-green-500/10 border border-green-500/20 text-green-500 px-2 py-1 rounded-full">
                    Research
                  </span>
                  <span className="text-xs bg-green-500/10 border border-green-500/20 text-green-500 px-2 py-1 rounded-full">
                    Management
                  </span>
                  <span className="text-xs bg-green-500/10 border border-green-500/20 text-green-500 px-2 py-1 rounded-full">
                    Lab
                  </span>
                </div>
              </div>
            </div>

            {/* LMS (AMIRACADEMY) */}
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-green-900/20 to-black/40 p-1">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div
                className="relative p-6 h-full border border-green-500/20 rounded-lg bg-black/40 backdrop-blur-sm 
                            transform transition-transform duration-300 group-hover:-translate-y-1"
              >
                <div className="absolute top-0 right-0 p-4">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                </div>
                <h2 className="text-white text-xl sm:text-2xl font-bold mb-3">
                  AMIRACADEMY LMS
                </h2>
                <p className="text-gray-300 text-sm sm:text-base mb-4">
                  Comprehensive Learning Management System with interactive
                  courses and student progress tracking.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-green-500/10 border border-green-500/20 text-green-500 px-2 py-1 rounded-full">
                    Education
                  </span>
                  <span className="text-xs bg-green-500/10 border border-green-500/20 text-green-500 px-2 py-1 rounded-full">
                    LMS
                  </span>
                  <span className="text-xs bg-green-500/10 border border-green-500/20 text-green-500 px-2 py-1 rounded-full">
                    E-learning
                  </span>
                </div>
              </div>
            </div>

            {/* JMS */}
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-green-900/20 to-black/40 p-1">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div
                className="relative p-6 h-full border border-green-500/20 rounded-lg bg-black/40 backdrop-blur-sm 
                            transform transition-transform duration-300 group-hover:-translate-y-1"
              >
                <div className="absolute top-0 right-0 p-4">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                </div>
                <h2 className="text-white text-xl sm:text-2xl font-bold mb-3">
                  JMS
                </h2>
                <p className="text-gray-300 text-sm sm:text-base mb-4">
                  Journal Management System for efficient handling of academic
                  publications and reviews.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-green-500/10 border border-green-500/20 text-green-500 px-2 py-1 rounded-full">
                    Academic
                  </span>
                  <span className="text-xs bg-green-500/10 border border-green-500/20 text-green-500 px-2 py-1 rounded-full">
                    Publishing
                  </span>
                  <span className="text-xs bg-green-500/10 border border-green-500/20 text-green-500 px-2 py-1 rounded-full">
                    Management
                  </span>
                </div>
              </div>
            </div>

            {/* Arbab */}
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-green-900/20 to-black/40 p-1">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div
                className="relative p-6 h-full border border-green-500/20 rounded-lg bg-black/40 backdrop-blur-sm 
                            transform transition-transform duration-300 group-hover:-translate-y-1"
              >
                <div className="absolute top-0 right-0 p-4">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                </div>
                <h2 className="text-white text-xl sm:text-2xl font-bold mb-3">
                  Arbab
                </h2>
                <p className="text-gray-300 text-sm sm:text-base mb-4">
                  Custom enterprise solution for business management and
                  operations optimization.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-green-500/10 border border-green-500/20 text-green-500 px-2 py-1 rounded-full">
                    Enterprise
                  </span>
                  <span className="text-xs bg-green-500/10 border border-green-500/20 text-green-500 px-2 py-1 rounded-full">
                    Business
                  </span>
                  <span className="text-xs bg-green-500/10 border border-green-500/20 text-green-500 px-2 py-1 rounded-full">
                    Management
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 sm:mt-20 pb-8 border-t border-green-500 border-opacity-20">
          <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
              <p className="text-white text-sm">Email: info@quantanyx.com</p>
              <p className="text-white text-sm">Phone: +1 234 567 890</p>
            </div>

            <div>
              <h3 className="text-white text-lg font-bold mb-4">Location</h3>
              <p className="text-white text-sm">Almaty, Kazakhstan</p>
            </div>

            <div>
              <h3 className="text-white text-lg font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/quantanyx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-green-400"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://linkedin.com/company/quantanyx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-green-400"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-white text-sm">
            © {new Date().getFullYear()} Quantanyx Studio. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
}
