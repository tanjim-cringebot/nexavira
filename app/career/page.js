"use client";
import React, { useState, useEffect } from "react";
import { FaBriefcase, FaRegClock } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdOutlineNotInterested } from "react-icons/md";
import TerminalButton from "../components/TerminalButton";
import HeroSection from "../components/HeroSection";

export default function Career() {
  const [isClient, setIsClient] = useState(false);
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
            Career Opportunities
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Join our team of innovators and help shape the future of technology
          </p>
        </div>

        {/* No Openings Message */}
        <div className="max-w-3xl mx-auto">
          <div className="backdrop-blur-sm bg-black/20 border border-green-500/10 rounded-xl p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <MdOutlineNotInterested className="text-green-500 text-6xl sm:text-7xl animate-pulse" />
                <div className="absolute inset-0 bg-green-500/10 rounded-full blur-xl"></div>
              </div>
            </div>
            <h2 className="text-white text-xl sm:text-2xl font-bold mb-4">
              No Current Openings
            </h2>
            <p className="text-gray-400 mb-8">
              While we don't have any positions available at the moment, we're
              always interested in connecting with talented individuals.
            </p>

            {/* Future Opportunities Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="p-4 border border-green-500/10 rounded-lg bg-black/20">
                <FaBriefcase className="text-green-500 text-2xl mb-3 mx-auto" />
                <h3 className="text-white font-semibold mb-2">Future Roles</h3>
                <p className="text-gray-400 text-sm">
                  Stay tuned for upcoming positions
                </p>
              </div>
              <div className="p-4 border border-green-500/10 rounded-lg bg-black/20">
                <FaRegClock className="text-green-500 text-2xl mb-3 mx-auto" />
                <h3 className="text-white font-semibold mb-2">
                  Regular Updates
                </h3>
                <p className="text-gray-400 text-sm">
                  Check back for new opportunities
                </p>
              </div>
              <div className="p-4 border border-green-500/10 rounded-lg bg-black/20">
                <BsPersonWorkspace className="text-green-500 text-2xl mb-3 mx-auto" />
                <h3 className="text-white font-semibold mb-2">Remote Work</h3>
                <p className="text-gray-400 text-sm">
                  Flexible working arrangements
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="text-center">
              <h3 className="text-white text-lg font-semibold mb-4">
                Stay Connected
              </h3>
              <p className="text-gray-400 mb-6">
                Send your resume to{" "}
                <a
                  href="mailto:careers@quantanyx.info"
                  className="text-green-500 hover:text-green-400 transition-colors duration-300"
                >
                  careers@quantanyx.info
                </a>{" "}
                and we'll keep you updated on future opportunities.
              </p>
              <button
                className="group relative px-6 py-3 bg-green-500/10 text-white rounded-lg overflow-hidden transition-all duration-300
                         hover:bg-green-500/20 border border-green-500/20 hover:border-green-500/40"
              >
                <span className="relative z-10">Submit Your Resume</span>
                <div
                  className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-500/0 
                            transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                ></div>
              </button>
            </div>
          </div>

          {/* Why Join Us Section */}
          <div className="mt-16 text-center">
            <h2 className="text-white text-2xl font-bold mb-8 relative inline-block">
              Why Join Quantanyx?
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 backdrop-blur-sm bg-black/20 border border-green-500/10 rounded-xl">
                <h3 className="text-white text-lg font-semibold mb-3">
                  Innovation First
                </h3>
                <p className="text-gray-400">
                  Work on cutting-edge projects using the latest technologies
                  and methodologies
                </p>
              </div>
              <div className="p-6 backdrop-blur-sm bg-black/20 border border-green-500/10 rounded-xl">
                <h3 className="text-white text-lg font-semibold mb-3">
                  Growth & Learning
                </h3>
                <p className="text-gray-400">
                  Continuous learning opportunities and professional development
                  support
                </p>
              </div>
              <div className="p-6 backdrop-blur-sm bg-black/20 border border-green-500/10 rounded-xl">
                <h3 className="text-white text-lg font-semibold mb-3">
                  Work-Life Balance
                </h3>
                <p className="text-gray-400">
                  Flexible schedules and remote work options for optimal
                  work-life integration
                </p>
              </div>
              <div className="p-6 backdrop-blur-sm bg-black/20 border border-green-500/10 rounded-xl">
                <h3 className="text-white text-lg font-semibold mb-3">
                  Collaborative Culture
                </h3>
                <p className="text-gray-400">
                  Join a team of passionate professionals in a supportive
                  environment
                </p>
              </div>
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
