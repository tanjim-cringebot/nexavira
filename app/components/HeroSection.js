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
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalRef = useRef(null);

  const validCommands = {
    "cd home": "/",
    "cd about": "/about",
    "cd career": "/career",
    "cd contact": "/contact",
    "cd projects": "/projects",
    ls: "list",
    whoami: "identity",
    neofetch: "system",
    help: "help",
    clear: "clear",
    date: "date",
    pwd: "pwd",
    echo: "echo",
    projects: "projects",
    skills: "skills",
    social: "social",
    weather: "weather",
    time: "time",
    version: "version",
    exit: "exit",
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
    identity: "visitor@nexavira-studio",
    system: [
      '<div class="flex gap-4">',
      '  <div class="w-16 h-16 rounded-lg bg-black/40 flex items-center justify-center">',
      '    <img src="/icon.png" class="w-16 h-16"/>',
      "  </div>",
      '  <div class="flex flex-col">',
      '    <span class="text-green-400 font-bold">visitor@Nexavira</span>',
      '    <span class="text-gray-500">----------------</span>',
      '    <div class="grid grid-cols-2 gap-x-3 text-sm mt-1">',
      '      <span class="text-green-400">OS</span>',
      '      <span class="text-gray-300">NexaviraOS x86_64</span>',
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
    date: [
      `📅 Current Date: ${new Date().toLocaleDateString()}`,
      `⏰ Current Time: ${new Date().toLocaleTimeString()}`,
      `📍 Timezone: ${Intl.DateTimeFormat().resolvedOptions().timeZone}`,
    ],
    pwd: ["📂 Current Directory:", "~/nexavira-studio/user/visitor"],
    echo: (args) => {
      return args ? args : "Usage: echo [message]";
    },
    projects: [
      "🚀 Featured Projects:",
      "",
      "1. AI Community Platform",
      "   • Next.js, Python, Django",
      "   • Status: Active Development",
      "",
      "2. AMIRLab Research Platform",
      "   • React, Node.js, MongoDB",
      "   • Status: Completed",
      "",
      "Type 'cd projects' for more details",
    ],
    skills: [
      "🛠️ Technical Skills:",
      "",
      "Languages:",
      "  • JavaScript/TypeScript ⭐⭐⭐⭐⭐",
      "  • Python ⭐⭐⭐⭐",
      "  • SQL ⭐⭐⭐⭐",
      "",
      "Frameworks:",
      "  • React/Next.js ⭐⭐⭐⭐⭐",
      "  • Django ⭐⭐⭐⭐",
      "  • Node.js ⭐⭐⭐⭐",
      "",
      "Tools:",
      "  • Git ⭐⭐⭐⭐",
      "  • Docker ⭐⭐⭐⭐",
      "  • AWS ⭐⭐⭐",
    ],
    social: [
      "🔗 Social Links:",
      "",
      "• GitHub: github.com/yourusername",
      "• LinkedIn: linkedin.com/in/yourusername",
      "• Twitter: @yourusername",
      "• Portfolio: yourwebsite.com",
      "",
      "Type 'open [platform]' to visit",
    ],
    weather: [
      "🌤️ Weather information is currently unavailable",
      "Try again later or visit weather.com",
    ],
    time: [
      `🕐 Local Time: ${new Date().toLocaleTimeString()}`,
      `📅 Date: ${new Date().toLocaleDateString()}`,
      `🌍 Timezone: ${Intl.DateTimeFormat().resolvedOptions().timeZone}`,
    ],
    version: [
      "📦 System Information:",
      "  • Nexavira Terminal v1.0.0",
      "  • Next.js 14.0.0",
      "  • React 18.2.0",
      "  • Node.js " + process.version,
      "",
      "Last Updated: 2024-01-01",
    ],
    help: [
      "🚀 Available Commands:",
      "",
      "Navigation:",
      "  cd home     - 🏠 Navigate to home page",
      "  cd about    - ℹ️  Navigate to about page",
      "  cd career   - 💼 Navigate to career page",
      "  cd contact  - 📧 Navigate to contact page",
      "",
      "System Commands:",
      "  ls         - 📁 List directory contents",
      "  pwd        - 📂 Show current directory",
      "  whoami     - 👤 Display current user",
      "  date       - 📅 Show current date",
      "  time       - 🕐 Show current time",
      "  clear      - 🧹 Clear terminal",
      "  version    - 📦 Show system version",
      "  exit       - 🚪 Close terminal",
      "",
      "Information:",
      "  projects   - 🚀 List featured projects",
      "  skills     - 🛠️  Show technical skills",
      "  social     - 🔗 Display social links",
      "  neofetch   - 🖥️  Display system information",
      "  weather    - 🌤️  Show weather info",
      "",
      "Utilities:",
      "  echo       - 📢 Print a message",
      "  help       - ❓ Display this help message",
      "",
      "Tips:",
      "  • Use Tab for command completion",
      "  • Use Up/Down arrows to navigate history",
      "  • Commands are case-insensitive",
    ],
  };

  const initialMessages = [
    { text: "cd Nexavira-studio", delay: 1000, isCommand: true },
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
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (suggestions.length > 0) {
        setSelectedSuggestionIndex(
          (prev) => (prev - 1 + suggestions.length) % suggestions.length
        );
      } else if (commandHistory.length > 0) {
        const newIndex = historyIndex + 1;
        if (newIndex < commandHistory.length) {
          setHistoryIndex(newIndex);
          setInputValue(commandHistory[commandHistory.length - 1 - newIndex]);
        }
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (suggestions.length > 0) {
        setSelectedSuggestionIndex((prev) => (prev + 1) % suggestions.length);
      } else if (historyIndex > -1) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        if (newIndex === -1) {
          setInputValue("");
        } else {
          setInputValue(commandHistory[commandHistory.length - 1 - newIndex]);
        }
      }
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setSuggestions(value ? getSuggestions(value) : []);
    setSelectedSuggestionIndex(0);
    setHistoryIndex(-1); // Reset history index when typing
  };

  const handleInputSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add command to history
    setCommandHistory((prev) => [...prev, inputValue.trim()]);
    setHistoryIndex(-1);

    const [command, ...args] = inputValue.trim().split(" ");
    const fullCommand = inputValue.trim().toLowerCase();
    const newCommand = { text: inputValue, isCommand: true };
    setDisplayedCommands([...displayedCommands, newCommand]);
    setInputValue("");
    setSuggestions([]);

    // Process command and add response
    if (validCommands[fullCommand]) {
      // Handle full commands like "cd home", "cd about"
      const responseType = validCommands[fullCommand];
      const response = commandResponses[responseType];

      if (responseType === "echo") {
        setDisplayedCommands((prev) => [
          ...prev,
          {
            text: response(args.join(" ")),
            isCommand: false,
          },
        ]);
      } else if (responseType === "exit") {
        onClose?.();
      } else if (Array.isArray(response)) {
        setDisplayedCommands((prev) => [
          ...prev,
          {
            text: response.join("\n"),
            isCommand: false,
            isHtml: responseType === "system",
          },
        ]);
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
    } else if (command.toLowerCase() === "cd" && args.length === 0) {
      // Handle 'cd' with no arguments
      setDisplayedCommands((prev) => [
        ...prev,
        {
          text: "Usage: cd [directory]\nAvailable directories: home, about, career, contact, projects",
          isCommand: false,
        },
      ]);
    } else {
      setDisplayedCommands((prev) => [
        ...prev,
        {
          text: `Command not found: ${inputValue}. Type 'help' for available commands.`,
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
            <span className="text-gray-400 text-sm">terminal@nexavira</span>
          </div>
        </div>

        {/* Terminal Content */}
        <div
          ref={terminalRef}
          className={`p-4 font-mono text-sm overflow-y-auto ${
            isMaximized ? "h-[calc(100vh-40px)]" : "h-[400px]"
          } scrollbar-thin scrollbar-thumb-green-500/20 scrollbar-track-black/20 hover:scrollbar-thumb-green-500/40`}
        >
          {/* Commands Display */}
          <div className="min-h-[calc(100%-2rem)]">
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
          </div>

          {/* Input Form */}
          <div className="relative">
            <form onSubmit={handleInputSubmit} className="flex items-center">
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
            </form>

            {/* Suggestions */}
            {suggestions.length > 0 && (
              <div className="absolute left-0 right-0 bottom-full mb-2 bg-black/80 border border-green-500/20 rounded-md overflow-hidden z-10">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={suggestion}
                    className={`px-3 py-1 cursor-pointer ${
                      index === selectedSuggestionIndex
                        ? "bg-green-500/20 text-green-400"
                        : "text-gray-400 hover:bg-green-500/10"
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
          </div>
        </div>
      </div>

      {/* Decorative Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-500/0 blur-xl -z-10"></div>
    </div>
  );
};

export default HeroSection;
