import React from "react";
import { CalculatorTemplate, FractionToPercentage } from "@/components";
import { FRACTION_TO_PERCENTAGE } from "@/constants";

export default function PercentagePage() {
  return (
    <CalculatorTemplate
      heroTitle={FRACTION_TO_PERCENTAGE.title}
      heroDescription={FRACTION_TO_PERCENTAGE.description}
      calculatorCopy={FRACTION_TO_PERCENTAGE}
    >
      <FractionToPercentage />
    </CalculatorTemplate>
  );
}
