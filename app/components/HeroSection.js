import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  FiChevronRight,
  FiFolder,
  FiInfo,
  FiHelpCircle,
  FiUser,
  FiMonitor,
  FiTrash2,
  FiCode,
} from "react-icons/fi";
import { FaGithub, FaReact, FaNpm } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

const HeroSection = ({ onClose, onMinimize, onMaximize, isMaximized }) => {
  const router = useRouter();
  const [displayedCommands, setDisplayedCommands] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(0);
  const terminalRef = useRef(null);

  const validCommands = {
    "cd home": "/",
    "cd about": "/about",
    "cd career": "/career",
    "cd contact": "/contact",
    ls: "list",
    whoami: "identity",
    neofetch: "system",
    help: "help",
    clear: "clear",
  };

  const commandResponses = {
    list: [
      "Documents/",
      "Projects/",
      "README.md",
      "about.txt",
      "career.json",
      "contact.sh",
    ],
    identity: "visitor@quantanyx-studio",
    system: [
      '<div class="flex gap-4">',
      '  <div class="w-16 h-16 rounded-lg bg-black/40 flex items-center justify-center">',
      '    <img src="/icon.png" class="w-16 h-16"/>',
      "  </div>",
      '  <div class="flex flex-col">',
      '    <span class="text-green-400 font-bold">visitor@quantanyx</span>',
      '    <span class="text-gray-500">----------------</span>',
      '    <div class="grid grid-cols-2 gap-x-3 text-sm mt-1">',
      '      <span class="text-green-400">OS</span>',
      '      <span class="text-gray-300">QuantanyxOS x86_64</span>',
      '      <span class="text-green-400">Host</span>',
      `      <span class="text-gray-300">${
        typeof window !== "undefined"
          ? window.navigator.userAgent
              .match(/(?:Chrome|Firefox|Safari|Edge)\/[\d.]+/)?.[0]
              .split("/")[0]
          : "Browser"
      }</span>`,
      '      <span class="text-green-400">Kernel</span>',
      '      <span class="text-gray-300">5.0.0-quantum</span>',
      '      <span class="text-green-400">Shell</span>',
      '      <span class="text-gray-300">Next.js 15</span>',
      '      <span class="text-green-400">Memory</span>',
      `      <span class="text-gray-300">${
        Math.round(performance?.memory?.usedJSHeapSize / 1024 / 1024) || "64"
      }MB / ${
        Math.round(performance?.memory?.jsHeapSizeLimit / 1024 / 1024) || "128"
      }MB</span>`,
      '      <span class="text-green-400">Theme</span>',
      '      <span class="text-gray-300">Quantum Dark</span>',
      "    </div>",
      "  </div>",
      "</div>",
    ],
    help: [
      "Available commands:",
      "  cd home     - Navigate to home page",
      "  cd about    - Navigate to about page",
      "  cd career   - Navigate to career page",
      "  cd contact  - Navigate to contact page",
      "  ls         - List directory contents",
      "  whoami     - Display current user",
      "  neofetch   - Display system information",
      "  clear      - Clear terminal",
      "  help       - Display this help message",
    ],
  };

  const initialMessages = [
    { text: "cd quantanyx-studio", delay: 1000, isCommand: true },
    {
      text: "git checkout -b feature/innovation",
      delay: 2000,
      isCommand: true,
    },
    { text: "npm install future-tech", delay: 3000, isCommand: true },
    { text: "Starting development server...", delay: 4000, isCommand: true },
    { text: "Ready to shape the future! 🚀", delay: 5000, isCommand: true },
    {
      text: 'Type "help" to see available commands',
      delay: 6000,
      isCommand: false,
    },
  ];

  useEffect(() => {
    const timeouts = [];

    initialMessages.forEach((message, index) => {
      const timeout = setTimeout(() => {
        setDisplayedCommands((prev) => [
          ...prev,
          {
            text: message.text,
            isCommand: message.isCommand,
            isExecuted: true,
          },
        ]);
      }, message.delay);
      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [displayedCommands]);

  const getSuggestions = (input) => {
    const commands = Object.keys(validCommands);
    return commands.filter((cmd) =>
      cmd.toLowerCase().startsWith(input.toLowerCase())
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      if (suggestions.length > 0) {
        setInputValue(suggestions[selectedSuggestionIndex]);
        setSuggestions([]);
      }
    } else if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault();
      if (suggestions.length > 0) {
        setSelectedSuggestionIndex((prev) =>
          e.key === "ArrowUp"
            ? (prev - 1 + suggestions.length) % suggestions.length
            : (prev + 1) % suggestions.length
        );
      }
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setSuggestions(value ? getSuggestions(value) : []);
    setSelectedSuggestionIndex(0);
  };

  const handleInputSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newCommand = { text: inputValue, isCommand: true };
    setDisplayedCommands([...displayedCommands, newCommand]);
    setInputValue("");
    setSuggestions([]);

    // Process command and add response
    const command = inputValue.toLowerCase().trim();
    if (validCommands[command]) {
      const responseType = validCommands[command];
      const response = commandResponses[responseType];

      if (Array.isArray(response)) {
        if (responseType === "list") {
          // Format ls command output in columns
          setDisplayedCommands((prev) => [
            ...prev,
            {
              text: response.map((item) => `${item}`).join("\n"),
              isCommand: false,
            },
          ]);
        } else {
          // Other array responses (help, etc.) already formatted
          setDisplayedCommands((prev) => [
            ...prev,
            {
              text: response.join("\n"),
              isCommand: false,
              isHtml: responseType === "system",
            },
          ]);
        }
      } else if (responseType === "clear") {
        setDisplayedCommands([]);
      } else if (responseType.startsWith("/")) {
        router.push(responseType);
      } else {
        setDisplayedCommands((prev) => [
          ...prev,
          {
            text: response,
            isCommand: false,
          },
        ]);
      }
    } else {
      setDisplayedCommands((prev) => [
        ...prev,
        {
          text: `Command not found: ${inputValue}`,
          isCommand: false,
        },
      ]);
    }
  };

  const handleWindowControls = (action) => {
    switch (action) {
      case "close":
        onClose?.();
        break;
      case "minimize":
        onMinimize?.();
        break;
      case "maximize":
        onMaximize?.();
        break;
    }
  };

  const getCommandIcon = (command) => {
    if (command.startsWith("cd "))
      return <FiFolder className="text-green-500 mr-2" />;
    if (command.startsWith("git "))
      return <FaGithub className="text-green-500 mr-2" />;
    if (command.startsWith("npm "))
      return <FaNpm className="text-green-500 mr-2" />;
    if (command.includes("development server"))
      return <FiCode className="text-green-500 mr-2" />;

    switch (command.toLowerCase()) {
      case "ls":
        return <FiFolder className="text-green-500 mr-2" />;
      case "whoami":
        return <FiUser className="text-green-500 mr-2" />;
      case "neofetch":
        return <FiMonitor className="text-green-500 mr-2" />;
      case "help":
        return <FiHelpCircle className="text-green-500 mr-2" />;
      case "clear":
        return <FiTrash2 className="text-green-500 mr-2" />;
      default:
        return <FiChevronRight className="text-green-500 mr-2" />;
    }
  };

  return (
    <div
      className={`relative w-full ${
        isMaximized ? "max-w-none" : "max-w-3xl"
      } mx-auto ${isMaximized ? "m-0" : "mt-8"}`}
    >
      {/* Terminal Window */}
      <div
        className={`backdrop-blur-md bg-black/30 rounded-lg border border-green-500/20 overflow-hidden 
                      ${isMaximized ? "h-screen" : ""}`}
      >
        {/* Terminal Header */}
        <div className="flex items-center px-4 py-2 bg-black/40 border-b border-green-500/10">
          <div className="flex gap-2">
            <button
              onClick={() => handleWindowControls("close")}
              className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
            ></button>
            <button
              onClick={() => handleWindowControls("minimize")}
              className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors"
            ></button>
            <button
              onClick={() => handleWindowControls("maximize")}
              className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors"
            ></button>
          </div>
          <div className="flex-1 text-center">
            <span className="text-gray-400 text-sm">terminal@quantanyx</span>
          </div>
        </div>

        {/* Terminal Content */}
        <div
          ref={terminalRef}
          className={`p-4 font-mono text-sm overflow-y-auto ${
            isMaximized ? "h-[calc(100vh-40px)]" : "h-[400px]"
          } scrollbar-thin scrollbar-thumb-green-500/20 scrollbar-track-black/20 hover:scrollbar-thumb-green-500/40`}
        >
          {displayedCommands.map((command, index) => (
            <div key={index} className="text-gray-300 mb-2">
              {command.isCommand ? (
                <div className="flex items-center">
                  {command.isExecuted && (
                    <span className="text-green-500 mr-1">✓</span>
                  )}
                  {getCommandIcon(command.text)}
                  <span>
                    {command.text.split(" ").map((word, i) => (
                      <span
                        key={i}
                        className={
                          Object.keys(validCommands).includes(
                            word.toLowerCase().trim()
                          )
                            ? "text-blue-400"
                            : "text-gray-300"
                        }
                      >
                        {word}{" "}
                      </span>
                    ))}
                  </span>
                </div>
              ) : command.isHtml ? (
                <div dangerouslySetInnerHTML={{ __html: command.text }} />
              ) : (
                <div className="flex items-start">
                  <FiInfo className="text-green-500 mr-2 mt-1" />
                  <pre className="whitespace-pre-wrap text-gray-300 font-mono">
                    {command.text}
                  </pre>
                </div>
              )}
            </div>
          ))}

          <form
            onSubmit={handleInputSubmit}
            className="flex items-center relative"
          >
            <FiChevronRight className="text-green-500 mr-2" />
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-gray-300 focus:ring-0"
              autoFocus
              spellCheck="false"
            />

            {/* Autocomplete suggestions */}
            {suggestions.length > 0 && (
              <div className="absolute left-0 right-0 bottom-full mb-2 bg-black/80 border border-green-500/20 rounded-md overflow-hidden">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={suggestion}
                    className={`px-3 py-1 ${
                      index === selectedSuggestionIndex
                        ? "bg-green-500/20 text-green-400"
                        : "text-gray-400"
                    }`}
                    onClick={() => {
                      setInputValue(suggestion);
                      setSuggestions([]);
                    }}
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Decorative Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-500/0 blur-xl -z-10"></div>
    </div>
  );
};

export default HeroSection;
