"use client";
import { Moon, Sun, Zap } from "lucide-react";
import { useTheme } from "@/hooks";

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === "dark";
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <header
      className={`${isDarkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"} border-b sticky top-0 z-50 backdrop-blur-sm bg-opacity-90`}
    >
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-green-600">ConvertHub</span>
          </div>

          <nav className="hidden md:flex space-x-8 md:text-lg lg:text-xl">
            <a
              href="#tools"
              className={`transition-colors ${isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"}`}
            >
              Tools
            </a>
            <a
              href="#about"
              className={`transition-colors ${isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"}`}
            >
              About
            </a>
            <a
              href="#popular"
              className={`transition-colors ${isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"}`}
            >
              Popular
            </a>
          </nav>

          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-colors ${isDarkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"}`}
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
