import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [displayedCommands, setDisplayedCommands] = useState([]);
  const commands = [
    { text: '> cd quantanyx-studio', delay: 1000 },
    { text: '> git checkout -b feature/innovation', delay: 2000 },
    { text: '> npm install future-tech', delay: 3000 },
    { text: '> Starting development server...', delay: 4000 },
    { text: '> Ready to shape the future! 🚀', delay: 5000 },
  ];

  useEffect(() => {
    commands.forEach((command, index) => {
      setTimeout(() => {
        setDisplayedCommands(prev => [...prev, command.text]);
      }, command.delay);
    });
  }, []);

  return (
    <div className="relative w-full max-w-3xl mx-auto mt-8">
      {/* Terminal Window */}
      <div className="backdrop-blur-md bg-black/30 rounded-lg border border-green-500/20 overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center px-4 py-2 bg-black/40 border-b border-green-500/10">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-1 text-center">
            <span className="text-gray-400 text-sm">terminal@quantanyx</span>
          </div>
        </div>
        
        {/* Terminal Content */}
        <div className="p-4 font-mono text-sm">
          {displayedCommands.map((command, index) => (
            <div key={index} className="text-gray-300 mb-2">
              {command}
            </div>
          ))}
          <div className="inline-block w-2 h-4 bg-green-500 animate-pulse"></div>
        </div>
      </div>

      {/* Decorative Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-500/0 blur-xl -z-10"></div>
    </div>
  );
};

export default HeroSection;