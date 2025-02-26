import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const HeroSection = () => {
  const router = useRouter();
  const [displayedCommands, setDisplayedCommands] = useState([]);
  const [inputValue, setInputValue] = useState('');
  
  const validCommands = {
    'cd home': '/',
    'cd about': '/about',
    'cd career': '/career',
    'cd contact': '/contact',
  };

  const initialMessages = [
    { text: '> cd quantanyx-studio', delay: 1000 },
    { text: '> git checkout -b feature/innovation', delay: 2000 },
    { text: '> npm install future-tech', delay: 3000 },
    { text: '> Starting development server...', delay: 4000 },
    { text: '> Ready to shape the future! 🚀', delay: 5000 },
    { text: '> Available commands: cd home, cd about, cd career, cd contact', delay: 6000 },
    { text: '> Type a command to navigate 🚀', delay: 7000 },
  ];

  useEffect(() => {
    const timeouts = [];  // Array to store timeout IDs
    
    initialMessages.forEach((message, index) => {
      const timeout = setTimeout(() => {
        setDisplayedCommands(prev => [...prev, { text: message.text, isCommand: false }]);
      }, message.delay);
      timeouts.push(timeout);  // Store timeout ID
    });

    // Cleanup function to clear all timeouts when component unmounts
    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  const handleInputSubmit = (e) => {
    e.preventDefault();
    const command = inputValue.toLowerCase().trim();
    
    // Add the command to displayed commands
    setDisplayedCommands(prev => [...prev, { text: `> ${inputValue}`, isCommand: true }]);
    
    // Check if it's a valid command
    if (validCommands[command]) {
      setDisplayedCommands(prev => [...prev, { text: `Navigating to ${command.substring(3)}...`, isCommand: false }]);
      router.push(validCommands[command]);
    } else {
      setDisplayedCommands(prev => [...prev, { text: 'Command not found. Try: cd home, cd about, cd career, cd contact', isCommand: false }]);
    }
    
    setInputValue('');
  };

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
            <div 
              key={index} 
              className="text-gray-300 mb-2"
            >
              {command.text}
            </div>
          ))}
          <form onSubmit={handleInputSubmit} className="flex items-center">
            <span className="text-green-500 mr-2">{'>'}</span>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-gray-300 focus:ring-0"
              autoFocus
              spellCheck="false"
            />
          </form>
        </div>
      </div>

      {/* Decorative Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-500/0 blur-xl -z-10"></div>
    </div>
  );
};

export default HeroSection;