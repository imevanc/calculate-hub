"use client";
import { useState } from "react";
import { useTheme } from "@/hooks";

export const FractionToPercentage = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const [numerator, setNumerator] = useState<string>("");
  const [denominator, setDenominator] = useState<string>("");
  const [percentage, setPercentage] = useState<string>("");

  const calculateFractionToPercentage = () => {
    if (!numerator || !denominator || denominator === "0") return "0.00";
    const result = (parseFloat(numerator) / parseFloat(denominator)) * 100;
    return result.toFixed(2);
  };

  const gcd = (a: number, b: number): number => {
    return b === 0 ? Math.abs(a) : gcd(b, a % b);
  };

  const calculatePercentageToFraction = () => {
    if (!percentage || percentage === "0") return "0/1";

    const num = parseFloat(percentage);
    const numeratorValue = Math.round(num * 100) / 100;
    const denominatorValue = 100;

    // Find GCD to simplify
    const divisor = gcd(numeratorValue * 100, denominatorValue * 100);
    const simplifiedNum = (numeratorValue * 100) / divisor;
    const simplifiedDen = (denominatorValue * 100) / divisor;

    return `${simplifiedNum}/${simplifiedDen}`;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* First Tile - Fraction to Percentage */}
      <div
        className={`rounded-xl p-8 shadow-xl ${
          isDarkMode
            ? "bg-gray-900 border border-gray-800"
            : "bg-white border border-gray-100"
        }`}
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Fraction to Percentage</h2>
          <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
            Convert any fraction to its percentage equivalent
          </p>
        </div>

        <div className="space-y-6">
          {/* Numerator Input */}
          <div>
            <label
              className={`block text-sm font-medium mb-2 ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Numerator
            </label>
            <input
              type="number"
              value={numerator}
              onChange={(e) => setNumerator(e.target.value)}
              placeholder="Enter numerator"
              className={`w-full px-4 py-3 rounded-lg border text-lg outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
                isDarkMode
                  ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
              }`}
            />
          </div>

          {/* Denominator Input */}
          <div>
            <label
              className={`block text-sm font-medium mb-2 ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Denominator
            </label>
            <input
              type="number"
              value={denominator}
              onChange={(e) => setDenominator(e.target.value)}
              placeholder="Enter denominator"
              className={`w-full px-4 py-3 rounded-lg border text-lg outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
                isDarkMode
                  ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
              }`}
            />
          </div>

          {/* Fraction Display */}
          <div className="text-center py-4">
            <div className="flex items-center justify-center space-x-3 text-2xl font-bold">
              <div className="flex flex-col items-center">
                <span
                  className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  {numerator || "0"}
                </span>
                <div className="w-12 h-px bg-gray-400 my-1"></div>
                <span
                  className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  {denominator || "1"}
                </span>
              </div>
              <span
                className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                is the same as
              </span>
            </div>
          </div>

          {/* Result Display */}
          <div
            className={`rounded-lg p-6 text-center ${
              isDarkMode ? "bg-gray-800" : "bg-green-50"
            }`}
          >
            <div className="text-4xl font-bold text-green-600 mb-2">
              {calculateFractionToPercentage()}%
            </div>
            <p
              className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
            >
              Percentage equivalent
            </p>
          </div>
        </div>
      </div>

      {/* Second Tile - Percentage to Fraction */}
      <div
        className={`rounded-xl p-8 shadow-xl ${
          isDarkMode
            ? "bg-gray-900 border border-gray-800"
            : "bg-white border border-gray-100"
        }`}
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Percentage to Fraction</h2>
          <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
            Convert any percentage to its fraction equivalent
          </p>
        </div>

        <div className="space-y-6">
          {/* Percentage Input */}
          <div>
            <label
              className={`block text-sm font-medium mb-2 ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Percentage
            </label>
            <div className="relative">
              <input
                type="number"
                value={percentage}
                onChange={(e) => setPercentage(e.target.value)}
                placeholder="Enter percentage"
                className={`w-full px-4 py-3 pr-12 rounded-lg border text-lg outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
                  isDarkMode
                    ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                }`}
              />
              <div
                className={`absolute right-4 top-1/2 transform -translate-y-1/2 text-lg font-medium ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                %
              </div>
            </div>
          </div>

          {/* Conversion Display */}
          <div className="text-center py-4">
            <div className="text-2xl font-bold">
              <span
                className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
              >
                {percentage || "0"}%
              </span>
              <span
                className={`ml-4 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                converts to
              </span>
            </div>
          </div>

          {/* Result Display */}
          <div
            className={`rounded-lg p-6 text-center ${
              isDarkMode ? "bg-gray-800" : "bg-green-50"
            }`}
          >
            <div className="space-y-4">
              {/* Original Fraction */}
              <div>
                <div className="text-xl font-bold text-green-600 mb-1">
                  <div className="flex flex-col items-center">
                    <span>{percentage || "0"}</span>
                    <div className="w-12 h-px bg-green-600 my-1"></div>
                    <span>100</span>
                  </div>
                </div>
                <p
                  className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                >
                  Original fraction
                </p>
              </div>

              {/* Simplified Fraction */}
              <div className="border-t pt-4">
                <div className="text-2xl font-bold text-green-600 mb-1">
                  <div className="flex flex-col items-center">
                    {calculatePercentageToFraction()
                      .split("/")
                      .map((part, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <span>{part}</span>
                          {index === 0 && (
                            <div className="w-16 h-px bg-green-600 my-1"></div>
                          )}
                        </div>
                      ))}
                  </div>
                </div>
                <p
                  className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                >
                  Simplified fraction
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
