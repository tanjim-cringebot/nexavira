"use client";
import React, { useState, useEffect } from "react";
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
import HeroSection
 from "./components/HeroSection";
export default function Home() {
  const [count, setCount] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [mousePositions, setMousePositions] = useState({
    card1: { x: 0, y: 0 },
    card2: { x: 0, y: 0 },
    card3: { x: 0, y: 0 },
    card4: { x: 0, y: 0 },
    card5: { x: 0, y: 0 },
    card6: { x: 0, y: 0 },
  });

  // Add useEffect to handle client-side initialization
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Add scroll event listener

  // Updated mouse move handler with card identifier
  const handleMouseMove = (e, card, cardId) => {
    const rect = card.getBoundingClientRect();
    setMousePositions((prev) => ({
      ...prev,
      [cardId]: {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      },
    }));
  };

  return (
    <div suppressHydrationWarning>
      {/* Main Content - Add padding-top to account for fixed navbar */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-48 sm:pt-60">
        <HeroSection />
        {/* Welcome message with responsive text */}
        <div className="text-white text-xl sm:text-2xl mt-6 sm:mt-8 font-bold text-center sm:text-left">
          Welcome to Quantanyx Studio
        </div>

        {/* Description with responsive text */}
        <div className="text-white text-sm sm:text-md mt-2 sm:mt-4  text-center sm:text-left">
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
            <div
              className="group relative overflow-hidden px-4 py-6 sm:p-6 border border-green-500 border-opacity-20 rounded-lg hover:border-opacity-40 transition-all duration-300"
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget, "card1")}
              style={{
                background: `radial-gradient(circle at ${mousePositions.card1.x}px ${mousePositions.card1.y}px, rgba(34, 197, 94, 0.1) 0%, transparent 50%)`,
              }}
            >
              <div className="relative z-10">
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
            </div>

            {/* Second card */}
            <div
              className="group relative overflow-hidden px-4 py-6 sm:p-6 border border-green-500 border-opacity-20 rounded-lg hover:border-opacity-40 transition-all duration-300"
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget, "card2")}
              style={{
                background: `radial-gradient(circle at ${mousePositions.card2.x}px ${mousePositions.card2.y}px, rgba(34, 197, 94, 0.1) 0%, transparent 50%)`,
              }}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <FaPython className="text-green-500" size={28} sm={32} />
                  <SiDjango className="text-green-500" size={28} sm={32} />
                </div>
                <h2 className="text-white text-lg sm:text-xl font-bold mb-2">
                  Django Development
                </h2>
                <p className="text-white text-sm sm:text-base">
                  Robust backend solutions with Django. Building secure,
                  scalable APIs and web applications with Python's most powerful
                  framework.
                </p>
              </div>
            </div>

            {/* Third card */}
            <div
              className="group relative overflow-hidden px-4 py-6 sm:p-6 border border-green-500 border-opacity-20 rounded-lg hover:border-opacity-40 transition-all duration-300"
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget, "card3")}
              style={{
                background: `radial-gradient(circle at ${mousePositions.card3.x}px ${mousePositions.card3.y}px, rgba(34, 197, 94, 0.1) 0%, transparent 50%)`,
              }}
            >
              <div className="relative z-10">
                <BiBrain className="text-green-500 mb-3" size={28} sm={32} />
                <h2 className="text-white text-lg sm:text-xl font-bold mb-2">
                  Machine Learning
                </h2>
                <p className="text-white text-sm sm:text-base">
                  Custom ML solutions for your business needs. From data
                  analysis to predictive modeling and AI integration.
                </p>
              </div>
            </div>

            {/* Fourth card */}
            <div
              className="group relative overflow-hidden px-4 py-6 sm:p-6 border border-green-500 border-opacity-20 rounded-lg hover:border-opacity-40 transition-all duration-300"
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget, "card4")}
              style={{
                background: `radial-gradient(circle at ${mousePositions.card4.x}px ${mousePositions.card4.y}px, rgba(34, 197, 94, 0.1) 0%, transparent 50%)`,
              }}
            >
              <div className="relative z-10">
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
            </div>

            {/* Fifth card */}
            <div
              className="group relative overflow-hidden px-4 py-6 sm:p-6 border border-green-500 border-opacity-20 rounded-lg hover:border-opacity-40 transition-all duration-300"
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget, "card5")}
              style={{
                background: `radial-gradient(circle at ${mousePositions.card5.x}px ${mousePositions.card5.y}px, rgba(34, 197, 94, 0.1) 0%, transparent 50%)`,
              }}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <FaCode className="text-green-500" size={28} sm={32} />
                  <FaDatabase className="text-green-500" size={28} sm={32} />
                </div>
                <h2 className="text-white text-lg sm:text-xl font-bold mb-2">
                  Software Development
                </h2>
                <p className="text-white text-sm sm:text-base">
                  Custom software solutions tailored to your business needs.
                  From desktop applications to complex enterprise systems.
                </p>
              </div>
            </div>

            {/* Sixth card */}
            <div
              className="group relative overflow-hidden px-4 py-6 sm:p-6 border border-green-500 border-opacity-20 rounded-lg hover:border-opacity-40 transition-all duration-300"
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget, "card6")}
              style={{
                background: `radial-gradient(circle at ${mousePositions.card6.x}px ${mousePositions.card6.y}px, rgba(34, 197, 94, 0.1) 0%, transparent 50%)`,
              }}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <SiPostgresql className="text-green-500" size={28} sm={32} />
                  <AiOutlineCloud
                    className="text-green-500"
                    size={28}
                    sm={32}
                  />
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

        {/* Contact Section */}
        <div className="mt-16 sm:mt-20 px-0 sm:px-6 lg:px-8" id="contact">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 relative inline-block">
              Get in Touch
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
            </h1>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto mt-4 sm:mt-6 px-4 sm:px-0">
              Have a project in mind? We'd love to hear from you. Send us a
              message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="max-w-2xl mx-auto relative">
            {/* Decorative elements - Hidden on mobile */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-green-500/40"></div>
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-green-500/40"></div>

            <form className="space-y-4 sm:space-y-6 backdrop-blur-sm bg-black/20 p-4 sm:p-6 md:p-8 rounded-xl border border-green-500/10 shadow-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="relative group">
                  <input
                    type="text"
                    name="name"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black/40 border border-green-500/20 rounded-lg 
                             focus:outline-none focus:border-green-500/40 focus:ring-1 focus:ring-green-500/20 
                             text-white text-sm sm:text-base transition-all duration-300 placeholder-gray-500"
                    placeholder="Your Name"
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-focus-within:w-full"></div>
                </div>
                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black/40 border border-green-500/20 rounded-lg 
                             focus:outline-none focus:border-green-500/40 focus:ring-1 focus:ring-green-500/20 
                             text-white text-sm sm:text-base transition-all duration-300 placeholder-gray-500"
                    placeholder="Your Email"
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-focus-within:w-full"></div>
                </div>
              </div>
              <div className="relative group">
                <input
                  type="text"
                  name="subject"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black/40 border border-green-500/20 rounded-lg 
                           focus:outline-none focus:border-green-500/40 focus:ring-1 focus:ring-green-500/20 
                           text-white text-sm sm:text-base transition-all duration-300 placeholder-gray-500"
                  placeholder="Subject"
                />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-focus-within:w-full"></div>
              </div>
              <div className="relative group">
                <textarea
                  name="message"
                  rows="4"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black/40 border border-green-500/20 rounded-lg 
                           focus:outline-none focus:border-green-500/40 focus:ring-1 focus:ring-green-500/20 
                           text-white text-sm sm:text-base transition-all duration-300 placeholder-gray-500 resize-none"
                  placeholder="Your Message"
                ></textarea>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-focus-within:w-full"></div>
              </div>
              <div className="text-center pt-2 sm:pt-4">
                <button
                  type="submit"
                  className="group relative w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-green-500/10 text-white rounded-lg overflow-hidden transition-all duration-300
                           hover:bg-green-500/20 border border-green-500/20 hover:border-green-500/40 text-sm sm:text-base"
                >
                  <div className="relative z-10">Send Message</div>
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-500/0 
                                transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                  ></div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
