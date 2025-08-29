import React from "react";

export const CalculatorHero = ({
  title,
  description,
  isDarkMode,
}: {
  title: string;
  description: string;
  isDarkMode: boolean;
}) => {
  const lastSpaceIndex = title.lastIndexOf(" ");
  const mainTitle = title.substring(0, lastSpaceIndex);
  const subtitle = title.substring(lastSpaceIndex + 1);
  return (
    <>
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        {mainTitle} <span className="text-green-600">{subtitle}</span>
      </h1>
      <p
        className={`text-xl mb-6 max-w-3xl mx-auto ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
      >
        {description}
      </p>
    </>
  );
};
