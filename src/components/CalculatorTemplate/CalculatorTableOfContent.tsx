import { BookOpen } from "lucide-react";
import React, { Dispatch, SetStateAction } from "react";
import { CalculatorCopy } from "@/types";

export const CalculatorTableOfContent = ({
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
  <>
    <div className="flex items-center mb-6">
      <BookOpen className="w-6 h-6 text-green-600 mr-3" />
      <h2 className="text-2xl font-bold">Table of Contents</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {calculatorCopy.tableOfContents.map((section) => (
        <div
          key={section.id}
          onClick={() => {
            setExpandedSection(section.id);
            setTimeout(() => {
              document.getElementById(`content-${section.id}`)?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }, 100);
          }}
          className={`p-4 rounded-lg transition-all duration-300 cursor-pointer border-l-4 ${
            expandedSection === section.id
              ? "border-green-600 bg-green-50 dark:bg-green-900/20"
              : `border-transparent ${isDarkMode ? "hover:bg-gray-800 hover:border-gray-700" : "hover:bg-gray-50 hover:border-gray-200"}`
          }`}
        >
          <h3 className="font-semibold mb-2 text-green-600">{section.title}</h3>
          <ul
            className={`text-sm space-y-1 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            {section.subsections.map((subsection, index) => (
              <li key={index} className="flex items-center">
                <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>
                {subsection}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </>
);
