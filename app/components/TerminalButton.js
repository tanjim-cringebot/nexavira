"use client";
import React from "react";
import { FaTerminal } from "react-icons/fa";

const TerminalButton = ({
  showTerminal,
  isTerminalOpen,
  isTerminalMinimized,
  onClick,
}) => {
  return (
    <div
      className={`fixed bottom-8 right-8 transition-all duration-300 z-[100] ${
        (showTerminal && !isTerminalOpen) || isTerminalMinimized
          ? "translate-y-0 opacity-100"
          : "translate-y-16 opacity-0"
      }`}
    >
      <button
        onClick={onClick}
        className="group flex items-center justify-center w-12 h-12 bg-black/80 border border-green-500/20 rounded-full 
                   hover:bg-black/90 hover:border-green-500/40 transition-all duration-300
                   text-green-400 backdrop-blur-sm hover:scale-110"
        title="Open Terminal"
      >
        <FaTerminal className="text-xl" />
        <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
      </button>
    </div>
  );
};

export default TerminalButton;
