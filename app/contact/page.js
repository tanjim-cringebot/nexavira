"use client";
import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook
} from "react-icons/fa";
import TerminalButton from "../components/TerminalButton";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Terminal states
  const [showTerminal, setShowTerminal] = useState(true);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isTerminalMinimized, setIsTerminalMinimized] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add loading state and animation here
    try {
      // Handle form submission logic here
      console.log("Form submitted:", formData);
      // Show success message
    } catch (error) {
      // Show error message
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://linkedin.com/company/quantanyx",
      color: "hover:text-blue-400",
    },
    {
      name: "Facebook",
      icon: FaFacebook,
      url: "https://www.facebook.com/quantanyx",
      color: "hover:text-blue-500",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/quantanyx",
      color: "hover:text-purple-400",
    },
  ];

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 mt-36 pb-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 relative inline-block">
            Get in Touch
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Have a question or want to work together? We'd love to hear from
            you!
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div
            className="backdrop-blur-md bg-black/30 p-8 rounded-lg border border-green-500/20 
                        transform hover:scale-[1.02] transition-all duration-300"
          >
            <h2 className="text-2xl font-bold text-white mb-8">Contact Info</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-green-500/10 rounded-lg">
                  <FaMapMarkerAlt className="text-green-400 text-xl" />
                </div>
                <div>
                  <h3 className="text-green-400 font-semibold mb-1">
                    Location
                  </h3>
                  <p className="text-gray-300">Dhaka, Bangladesh</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-green-500/10 rounded-lg">
                  <FaEnvelope className="text-green-400 text-xl" />
                </div>
                <div>
                  <h3 className="text-green-400 font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:contact@quantanyx.com"
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    ask@quantanyx.com
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-green-500/10">
                <h3 className="text-green-400 font-semibold mb-4">
                  Connect With Us
                </h3>
                <div className="flex space-x-6">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className={`text-gray-300 ${social.color} transition-all duration-300 
                                transform hover:scale-110 flex items-center gap-2`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="text-2xl" />
                      <span className="text-sm">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="backdrop-blur-md bg-black/30 p-8 rounded-lg border border-green-500/20
                     transform hover:scale-[1.02] transition-all duration-300"
          >
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-green-400 mb-2 font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-green-500/20 rounded-lg px-4 py-3 text-white 
                           focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500
                           transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-green-400 mb-2 font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-green-500/20 rounded-lg px-4 py-3 text-white 
                           focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500
                           transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-green-400 mb-2 font-medium"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-green-500/20 rounded-lg px-4 py-3 text-white 
                           focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500
                           transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-green-400 mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-black/50 border border-green-500/20 rounded-lg px-4 py-3 text-white 
                           focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500
                           transition-all duration-300 resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-500/20 hover:bg-green-500/30 text-green-400 font-semibold 
                         py-3 px-6 rounded-lg transition-all duration-300 border border-green-500/20
                         hover:border-green-500/40 focus:outline-none focus:ring-2 focus:ring-green-500/50
                         transform hover:scale-[1.02]"
              >
                Send Message
              </button>
            </div>
          </form>
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
