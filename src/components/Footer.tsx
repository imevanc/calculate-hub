"use client";
import { Zap } from "lucide-react";
import { useTheme } from "@/hooks";

export const Footer = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  return (
    <footer
      className={`${isDarkMode ? "bg-gray-900 border-gray-800" : "bg-gray-50 border-gray-200"} border-t py-12`}
    >
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-green-600">
                CalculateHub
              </span>
            </div>
            <p
              className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} mb-4`}
            >
              Making file conversion simple, fast, and accessible for everyone.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Calculators</h3>
            <ul
              className={`space-y-2 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
            >
              <li>
                <a href="#" className="hover:text-green-600 transition-colors">
                  Maths Converter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Chemistry Calculators
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600 transition-colors">
                  Every Day Life Tools
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                    Finance Calculators
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul
              className={`space-y-2 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
            >
              <li>
                <a href="#" className="hover:text-green-600 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`border-t ${isDarkMode ? "border-gray-800" : "border-gray-200"} mt-8 pt-8 text-center`}
        >
          <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
            © 2025 ConvertHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
