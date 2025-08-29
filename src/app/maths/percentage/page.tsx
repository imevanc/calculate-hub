import React from "react";
import { CalculatorTemplate, PercentageCalculator } from "@/components/";
import { PERCENTAGE_CALCULATOR } from "@/constants";

export default function PercentagePage() {
  return (
    <CalculatorTemplate
      heroTitle="Percentage Calculator"
      heroDescription="Calculate percentages, increases, decreases, and differences with ease"
      calculatorCopy={PERCENTAGE_CALCULATOR}
    >
      <PercentageCalculator calculatorCopy={PERCENTAGE_CALCULATOR} />
    </CalculatorTemplate>
  );
}
