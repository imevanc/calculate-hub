"use client";
import { ALL_TOOLS, POPULAR_TOOLS } from "@/constants";
import { ToolTile } from "@/components";
import { ArrowRight } from "lucide-react";
import { useTheme } from "@/hooks";

export default function Home() {
  const { theme } = useTheme();
  console.log("Current theme:", theme);
  const isDarkMode = theme === "dark";
  console.log("isDarkMode:", isDarkMode);
  return (
    <main>
      <section
        className="relative py-20 overflow-hidden"
        data-testid="hero-section"
      >
        <div
          className={`absolute inset-0 opacity-5 ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}
        ></div>
        <div className="relative max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Calculate <span className="text-green-600">Anything</span>
          </h1>
          <p
            className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            Your one-stop solution for all calculations. Fast, accurate, and
            reliable calculation tools for every need.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Start Calculating Now
          </button>
        </div>
      </section>

      <section id="tools" className="py-20" data-testid="all-tools-section">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">All Calculation Tools</h2>
            <p
              className={`text-xl ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
            >
              Discover our complete suite of calculation utilities
            </p>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {ALL_TOOLS.map((tool) => (
              <ToolTile key={tool.id} tool={tool} isDarkMode={isDarkMode} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className={`py-20 ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}
        data-testid="about-section"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">About ConvertHub</h2>
          <p
            className={`text-lg mb-8 leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            ConvertHub is your trusted partner for all computational needs. We
            believe in making calculations simple, fast, and accessible to
            everyone. Our platform combines cutting-edge algorithms with
            user-friendly design to deliver the best calculation experience
            possible. Whether you're a student working on assignments, a
            professional handling complex computations, or someone with everyday
            calculation needs, ConvertHub has the right tools for you.
          </p>
          <button
            onClick={() => window.open("/about", "_blank")}
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Learn More About Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>

      <section
        id="popular"
        className="py-20"
        data-testid="popular-tools-section"
      >
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Most Popular Tools</h2>
            <p
              className={`text-xl ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
            >
              Our community's favorite calculation tools
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {POPULAR_TOOLS.map((tool) => (
              <ToolTile
                key={tool.id}
                tool={tool}
                isPopular={true}
                isDarkMode={isDarkMode}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
