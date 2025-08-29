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
  const [firstWord, secondWord] = title.split(" ");

  return (
    <>
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        {firstWord} <span className="text-green-600">{secondWord}</span>
      </h1>
      <p
        className={`text-xl mb-6 max-w-3xl mx-auto ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
      >
        {description}
      </p>
    </>
  );
};
