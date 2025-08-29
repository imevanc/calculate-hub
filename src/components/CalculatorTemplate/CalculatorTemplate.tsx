"use client";
import React, { ReactNode, useState } from "react";
import { PERCENTAGE_CALCULATOR } from "@/constants";
import { CalculatorHero } from "./CalculatorHero";
import { CalculatorTableOfContent } from "./CalculatorTableOfContent";
import { CalculatorEducationalContent } from "./CalculatorEducationalContent";
import { CalculatorCopy } from "@/types";
import { useTheme } from "@/hooks";

export const CalculatorTemplate = ({
  heroTitle,
  heroDescription,
  calculatorCopy,
  children,
}: {
  heroTitle: string;
  heroDescription: string;
  calculatorCopy: CalculatorCopy;
  children: ReactNode;
}) => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const [expandedSection, setExpandedSection] = useState("basics");

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <section className="text-center mb-12" data-testid="hero-section">
        <CalculatorHero
          title={heroTitle}
          description={heroDescription}
          isDarkMode={isDarkMode}
        />
      </section>

      <section className="mb-16" data-testid="toc-section">
        <CalculatorTableOfContent
          calculatorCopy={PERCENTAGE_CALCULATOR}
          isDarkMode={isDarkMode}
          expandedSection={expandedSection}
          setExpandedSection={setExpandedSection}
        />
      </section>

      <section className="mb-16" data-testid="calculator-section">
        {children}
      </section>

      <section data-testid="educational-content-section">
        <CalculatorEducationalContent
          calculatorCopy={calculatorCopy}
          isDarkMode={isDarkMode}
          expandedSection={expandedSection}
          setExpandedSection={setExpandedSection}
        />
      </section>
    </main>
  );
};
