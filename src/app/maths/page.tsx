"use client";
import { useState } from "react";
import { CALCULATOR_CATEGORIES } from "@/constants";
import { useTheme } from "@/hooks";
import { Calculator } from "lucide-react";

export default function MathsPage() {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredCategories = CALCULATOR_CATEGORIES.map((category) => ({
    ...category,
    calculators: category.calculators.filter(
      (calc) =>
        calc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        category.title.toLowerCase().includes(searchTerm.toLowerCase()),
    ),
  })).filter((category) => category.calculators.length > 0);

  return (
    <main>
      <section
        className="relative py-20 overflow-hidden"
        data-testid="hero-section"
      >
        <div
          className={`absolute inset-0 opacity-5 ${
            isDarkMode ? "bg-gray-900" : "bg-gray-50"
          }`}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Maths <span className="text-green-600">Calculators</span>
          </h1>
          <p
            className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Maths can be exciting and easier than you think! With our collection
            of math calculators, everyone can perform and understand useful
            mathematical calculations in seconds.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Start Calculating Now
          </button>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto relative">
            <input
              type="text"
              placeholder="Search calculators..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full px-6 py-5 text-xl rounded-xl border-2 focus:outline-none shadow-lg transition-all duration-300 ${
                isDarkMode
                  ? "bg-gray-800 border-gray-700 text-white focus:border-green-600 placeholder-gray-400"
                  : "bg-white border-gray-200 text-gray-900 focus:border-green-600 placeholder-gray-500"
              }`}
            />
            <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
              <Calculator
                className={`w-7 h-7 ${
                  isDarkMode ? "text-gray-400" : "text-gray-400"
                }`}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="calculators"
        className="py-20"
        data-testid="calculators-section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">All Math Calculators</h2>
            <p
              className={`text-xl ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Discover our complete suite of mathematical calculation tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.title}
                  className={`group rounded-xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                    isDarkMode
                      ? "bg-gray-900 border border-gray-800"
                      : "bg-white border border-gray-100"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6">
                    <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-green-600 text-white mb-4 sm:mb-0 sm:mr-4 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                        <h2 className="text-xl lg:text-2xl font-bold">
                          {category.title}
                        </h2>
                        <span className="text-xl lg:text-2xl">
                          {category.emoji}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p
                    className={`mb-6 text-sm lg:text-base leading-relaxed ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {category.description}
                  </p>

                  <div className="space-y-2 lg:space-y-3">
                    {category.calculators.slice(0, 6).map((calc) => (
                      <div
                        key={calc}
                        className={`flex items-center justify-between p-2 lg:p-3 rounded-lg transition-all duration-200 cursor-pointer group/item ${
                          isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-50"
                        }`}
                      >
                        <span
                          className={`text-sm lg:text-base font-medium group-hover/item:text-green-600 transition-colors duration-200 ${
                            isDarkMode ? "text-gray-200" : "text-gray-700"
                          }`}
                        >
                          {calc}
                        </span>
                        <div className="w-2 h-2 rounded-full bg-green-600 opacity-60 group-hover/item:opacity-100 transition-opacity duration-200"></div>
                      </div>
                    ))}

                    {category.calculators.length > 6 && (
                      <div
                        className={`pt-3 lg:pt-4 border-t ${
                          isDarkMode ? "border-gray-700" : "border-gray-200"
                        }`}
                      >
                        <button className="text-green-600 hover:text-green-700 font-semibold text-xs lg:text-sm transition-colors duration-200">
                          View {category.calculators.length - 6} more
                          calculators →
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {filteredCategories.length === 0 && searchTerm && (
            <div className="text-center py-16">
              <div
                className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 ${
                  isDarkMode ? "bg-gray-800" : "bg-gray-100"
                }`}
              >
                <Calculator
                  className={`w-12 h-12 ${
                    isDarkMode ? "text-gray-400" : "text-gray-400"
                  }`}
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">No calculators found</h3>
              <p
                className={`max-w-md mx-auto ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Try searching for different terms or browse our categories
                above.
              </p>
            </div>
          )}
        </div>
      </section>

      <section id="stats" className="py-20" data-testid="stats-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div
              className={`inline-flex items-center justify-center space-x-8 p-8 rounded-xl shadow-lg ${
                isDarkMode ? "bg-gray-900" : "bg-white"
              }`}
            >
              <div className="text-center">
                <div className="text-4xl font-black text-green-600">
                  {CALCULATOR_CATEGORIES.reduce(
                    (total, cat) => total + cat.calculators.length,
                    0,
                  )}
                </div>
                <div
                  className={`text-sm font-semibold uppercase tracking-wider ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Calculators
                </div>
              </div>
              <div
                className={`w-px h-12 ${
                  isDarkMode ? "bg-gray-700" : "bg-gray-300"
                }`}
              ></div>
              <div className="text-center">
                <div className="text-4xl font-black text-blue-600">
                  {CALCULATOR_CATEGORIES.length}
                </div>
                <div
                  className={`text-sm font-semibold uppercase tracking-wider ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Categories
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
