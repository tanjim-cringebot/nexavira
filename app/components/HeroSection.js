import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FiChevronRight, FiFolder } from "react-icons/fi";

const HeroSection = () => {
  const router = useRouter();
  const [displayedCommands, setDisplayedCommands] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(0);

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
      '  <div class="w-16 h-16 rounded-lg bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">',
      '    <span class="text-2xl">Q</span>',
      "  </div>",
      '  <div class="flex flex-col">',
      '    <span class="text-green-400 font-bold">visitor@quantanyx</span>',
      '    <span class="text-gray-500">----------------</span>',
      '    <div class="grid grid-cols-2 gap-x-4 text-sm mt-1">',
      '      <span class="text-green-400">OS</span>',
      '      <span class="text-gray-300">QuantanyxOS x86_64</span>',
      '      <span class="text-green-400">Host</span>',
      '      <span class="text-gray-300">Quantum Machine v2.0</span>',
      '      <span class="text-green-400">Kernel</span>',
      '      <span class="text-gray-300">5.0.0-quantum</span>',
      '      <span class="text-green-400">Shell</span>',
      '      <span class="text-gray-300">ReactJS</span>',
      '      <span class="text-green-400">Memory</span>',
      '      <span class="text-gray-300">64GB / 128GB</span>',
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

  const handleInputSubmit = (e) => {
    e.preventDefault();
    const command = inputValue.toLowerCase().trim();

    // Add the command to displayed commands with a tick sign
    setDisplayedCommands((prev) => [
      ...prev,
      { text: inputValue, isCommand: true, isExecuted: true },
    ]);

    // Clear suggestions
    setSuggestions([]);

    // Handle clear command
    if (command === "clear") {
      setDisplayedCommands([]);
      setInputValue("");
      return;
    }

    // Check if it's a valid command
    if (validCommands[command]) {
      if (command.startsWith("cd ")) {
        setDisplayedCommands((prev) => [
          ...prev,
          {
            text: `Navigating to ${command.substring(3)}...`,
            isCommand: false,
          },
        ]);
        router.push(validCommands[command]);
      } else {
        const response = commandResponses[validCommands[command]];
        if (Array.isArray(response)) {
          if (command === "neofetch") {
            setDisplayedCommands((prev) => [
              ...prev,
              {
                text: response.join(""),
                isCommand: false,
                isHtml: true,
              },
            ]);
          } else {
            setDisplayedCommands((prev) => [
              ...prev,
              ...response.map((line) => ({ text: line, isCommand: false })),
            ]);
          }
        } else {
          setDisplayedCommands((prev) => [
            ...prev,
            { text: response, isCommand: false },
          ]);
        }
      }
    } else {
      setDisplayedCommands((prev) => [
        ...prev,
        {
          text: 'Command not found. Type "help" for available commands',
          isCommand: false,
        },
      ]);
    }

    setInputValue("");
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
            <div key={index} className="text-gray-300 mb-2">
              {command.isCommand ? (
                <div className="flex items-center">
                  {command.isExecuted && (
                    <span className="text-green-500 mr-1">✓</span>
                  )}
                  <FiFolder className="text-green-500 mr-2" />
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
                command.text
              )}
            </div>
          ))}

          <form
            onSubmit={handleInputSubmit}
            className="flex items-center relative"
          >
            <FiFolder className="text-green-500 mr-2" />
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
