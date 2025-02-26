"use client";
import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 mt-36 pb-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 relative inline-block">
          Contact Us
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
        </h1>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
          Have a question or want to work together? Let's connect!
        </p>
        <HeroSection />
      </div>

      {/* Contact Form Section */}
      <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="backdrop-blur-md bg-black/30 p-6 rounded-lg border border-green-500/20">
          <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-green-400 font-semibold mb-1">Location</h3>
              <p className="text-gray-300">Silicon Valley, CA</p>
            </div>
            <div>
              <h3 className="text-green-400 font-semibold mb-1">Email</h3>
              <p className="text-gray-300">contact@quantanyx.com</p>
            </div>
            <div>
              <h3 className="text-green-400 font-semibold mb-1">Social</h3>
              <div className="flex space-x-6">
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-green-400 transition-colors flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-xl" />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-green-400 transition-colors flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="text-xl" />
                  <span>Twitter</span>
                </a>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-green-400 transition-colors flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-xl" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="backdrop-blur-md bg-black/30 p-6 rounded-lg border border-green-500/20">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-green-400 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-black/50 border border-green-500/20 rounded-md px-4 py-2 text-white focus:outline-none focus:border-green-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-green-400 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-black/50 border border-green-500/20 rounded-md px-4 py-2 text-white focus:outline-none focus:border-green-500"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-green-400 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-black/50 border border-green-500/20 rounded-md px-4 py-2 text-white focus:outline-none focus:border-green-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-green-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full bg-black/50 border border-green-500/20 rounded-md px-4 py-2 text-white focus:outline-none focus:border-green-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 