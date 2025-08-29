import React, { Dispatch, SetStateAction } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { CalculatorCopy } from "@/types";

export const CalculatorEducationalContent = ({
  calculatorCopy,
  isDarkMode,
  expandedSection,
  setExpandedSection,
}: {
  calculatorCopy: CalculatorCopy;
  isDarkMode: boolean;
  expandedSection: string;
  setExpandedSection: Dispatch<SetStateAction<string>>;
}) => (
  <div className="space-y-8">
    {Object.entries(calculatorCopy.content).map(([key, section]) => (
      <div
        key={key}
        id={`content-${key}`}
        className={`rounded-xl p-8 shadow-lg ${isDarkMode ? "bg-gray-900 border border-gray-800" : "bg-white border border-gray-100"}`}
      >
        <button
          onClick={() => setExpandedSection(expandedSection === key ? "" : key)}
          className="w-full flex items-center justify-between text-left"
        >
          <h2 className="text-2xl font-bold">{section.title}</h2>
          {expandedSection === key ? (
            <ChevronDown className="w-6 h-6 text-green-600" />
          ) : (
            <ChevronRight className="w-6 h-6 text-green-600" />
          )}
        </button>

        {expandedSection === key && (
          <div
            className={`mt-6 prose max-w-none ${isDarkMode ? "prose-invert" : ""}`}
          >
            {section.content.split("\n\n").map((paragraph, index) => {
              if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                return (
                  <h3
                    key={index}
                    className="text-lg font-semibold text-green-600 mt-6 mb-3"
                  >
                    {paragraph.replace(/\*\*/g, "")}
                  </h3>
                );
              }
              return (
                <p
                  key={index}
                  className={`mb-4 leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                >
                  {paragraph}
                </p>
              );
            })}
          </div>
        )}
      </div>
    ))}
  </div>
);
