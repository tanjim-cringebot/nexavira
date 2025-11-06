"use client";
import React, { useState, useEffect } from "react";
import { FaLightbulb, FaHandshake, FaRocket, FaCode } from "react-icons/fa";
import { BsLightningCharge } from "react-icons/bs";
import { IoMdTrendingUp } from "react-icons/io";
import TerminalButton from "../components/TerminalButton";
import HeroSection from "../components/HeroSection";

export default function About() {
  const [isClient, setIsClient] = useState(false);

  // Terminal states
  const [showTerminal, setShowTerminal] = useState(true);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isTerminalMinimized, setIsTerminalMinimized] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Terminal control handlers
  const handleTerminalClose = () => {
    setIsTerminalOpen(false);
    setIsTerminalMinimized(false);
  };

  const handleTerminalMinimize = () => {
    setIsTerminalMinimized(true);
  };

  const handleTerminalMaximize = () => {
    setIsTerminalMinimized(false);
  };

  if (!isClient) {
    return null;
  }

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 mt-36 pb-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 relative inline-block">
            About Nexavira
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Building the future of technology through innovation and excellence
          </p>
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="backdrop-blur-sm bg-black/20 border border-green-500/10 rounded-xl p-8 text-center">
            <h2 className="text-white text-2xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              At Nexavira, we're dedicated to transforming innovative ideas
              into powerful digital solutions. Our mission is to empower
              businesses through cutting-edge technology while maintaining the
              highest standards of quality and reliability.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-white text-2xl font-bold mb-8 text-center relative inline-block">
            Our Core Values
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group p-6 backdrop-blur-sm bg-black/20 border border-green-500/10 rounded-xl hover:border-green-500/30 transition-all duration-300">
              <div className="flex items-center mb-4">
                <FaLightbulb className="text-green-500 text-2xl mr-3" />
                <h3 className="text-white text-xl font-semibold">Innovation</h3>
              </div>
              <p className="text-gray-400">
                Constantly pushing boundaries and embracing new technologies to
                deliver cutting-edge solutions.
              </p>
            </div>
            <div className="group p-6 backdrop-blur-sm bg-black/20 border border-green-500/10 rounded-xl hover:border-green-500/30 transition-all duration-300">
              <div className="flex items-center mb-4">
                <FaHandshake className="text-green-500 text-2xl mr-3" />
                <h3 className="text-white text-xl font-semibold">
                  Collaboration
                </h3>
              </div>
              <p className="text-gray-400">
                Working together with clients and team members to achieve
                exceptional results.
              </p>
            </div>
            <div className="group p-6 backdrop-blur-sm bg-black/20 border border-green-500/10 rounded-xl hover:border-green-500/30 transition-all duration-300">
              <div className="flex items-center mb-4">
                <FaRocket className="text-green-500 text-2xl mr-3" />
                <h3 className="text-white text-xl font-semibold">Excellence</h3>
              </div>
              <p className="text-gray-400">
                Maintaining the highest standards in every project we undertake.
              </p>
            </div>
          </div>
        </div>

        {/* What Sets Us Apart */}
        <div className="mb-20">
          <h2 className="text-white text-2xl font-bold mb-8 text-center relative inline-block">
            What Sets Us Apart
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="backdrop-blur-sm bg-black/20 border border-green-500/10 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <BsLightningCharge className="text-green-500 text-2xl mr-3" />
                <h3 className="text-white text-xl font-semibold">
                  Rapid Development
                </h3>
              </div>
              <p className="text-gray-400">
                Our agile methodology and experienced team ensure quick
                turnaround without compromising quality.
              </p>
            </div>
            <div className="backdrop-blur-sm bg-black/20 border border-green-500/10 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <FaCode className="text-green-500 text-2xl mr-3" />
                <h3 className="text-white text-xl font-semibold">
                  Technical Excellence
                </h3>
              </div>
              <p className="text-gray-400">
                Expertise in the latest technologies and best practices in
                software development.
              </p>
            </div>
            <div className="backdrop-blur-sm bg-black/20 border border-green-500/10 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <IoMdTrendingUp className="text-green-500 text-2xl mr-3" />
                <h3 className="text-white text-xl font-semibold">
                  Scalable Solutions
                </h3>
              </div>
              <p className="text-gray-400">
                Building systems that grow with your business and adapt to
                changing needs.
              </p>
            </div>
            <div className="backdrop-blur-sm bg-black/20 border border-green-500/10 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <FaHandshake className="text-green-500 text-2xl mr-3" />
                <h3 className="text-white text-xl font-semibold">
                  Client Partnership
                </h3>
              </div>
              <p className="text-gray-400">
                We work closely with our clients to ensure their vision is
                realized in every project.
              </p>
            </div>
          </div>
        </div>

        {/* Company Stats */}
        <div className="text-center">
          <h2 className="text-white text-2xl font-bold mb-8 relative inline-block">
            Our Impact
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 backdrop-blur-sm bg-black/20 border border-green-500/10 rounded-xl">
              <div className="text-green-500 text-3xl font-bold mb-2">100+</div>
              <div className="text-white font-semibold">Projects Completed</div>
            </div>
            <div className="p-6 backdrop-blur-sm bg-black/20 border border-green-500/10 rounded-xl">
              <div className="text-green-500 text-3xl font-bold mb-2">50+</div>
              <div className="text-white font-semibold">Happy Clients</div>
            </div>
            <div className="p-6 backdrop-blur-sm bg-black/20 border border-green-500/10 rounded-xl">
              <div className="text-green-500 text-3xl font-bold mb-2">5+</div>
              <div className="text-white font-semibold">Years Experience</div>
            </div>
            <div className="p-6 backdrop-blur-sm bg-black/20 border border-green-500/10 rounded-xl">
              <div className="text-green-500 text-3xl font-bold mb-2">20+</div>
              <div className="text-white font-semibold">Team Members</div>
            </div>
          </div>
        </div>
      </div>

      {/* Terminal Button */}
      <TerminalButton
        showTerminal={showTerminal}
        isTerminalOpen={isTerminalOpen}
        isTerminalMinimized={isTerminalMinimized}
        onClick={() => {
          setIsTerminalOpen(true);
          setIsTerminalMinimized(false);
        }}
      />

      {/* Terminal Modal */}
      {isTerminalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div className="relative w-full max-w-4xl z-10">
            <HeroSection
              onClose={handleTerminalClose}
              onMinimize={handleTerminalMinimize}
              onMaximize={handleTerminalMaximize}
              isMaximized={false}
            />
          </div>
        </div>
      )}
    </>
  );
}
