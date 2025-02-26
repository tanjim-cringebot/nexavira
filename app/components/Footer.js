"use client";
import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="mt-16 sm:mt-20 pb-8 border-t border-green-500 border-opacity-20">
      <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
          <p className="text-white text-sm">Email: info@quantanyx.studio</p>
          <p className="text-white text-sm">Phone: +8801717171717</p>
        </div>

        <div>
          <h3 className="text-white text-lg font-bold mb-4">Location</h3>
          <p className="text-white text-sm">Dhaka, Bangladesh</p>
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
        © {currentYear} Quantanyx Studio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
