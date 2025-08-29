"use client";
import { useState } from "react";
import { CalculatorCopy } from "@/types";
import { useTheme } from "@/hooks";

export const PercentageCalculator = ({
  calculatorCopy,
}: {
  calculatorCopy: CalculatorCopy;
}) => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const [selectedCalculationType, setSelectedCalculationType] =
    useState("simple");
  const [selectedCalculation, setSelectedCalculation] =
    useState("percentage-of");
  const [simpleInputs, setSimpleInputs] = useState({
    originalValue: "",
    percentage: "",
  });

  const [inputs, setInputs] = useState({
    percentage: "",
    number: "",
    part: "",
    whole: "",
  });

  const [differenceInputs, setDifferenceInputs] = useState({
    originalValue: "",
    finalValue: "",
  });

  const [result, setResult] = useState({
    type: "",
    value: "",
    percentageOf: "",
    increased: "",
    decreased: "",
    formula: "",
    explanation: "",
    percentageChange: "",
    absoluteDiff: "",
    isIncrease: false,
  });

  const handleSimpleCalculate = () => {
    const originalValue = parseFloat(simpleInputs.originalValue);
    const percentage = parseFloat(simpleInputs.percentage);

    if (!isNaN(originalValue) && !isNaN(percentage)) {
      const percentageOf = (percentage / 100) * originalValue;
      const increased = originalValue + percentageOf;
      const decreased = originalValue - percentageOf;

      setResult({
        ...result,
        type: "simple",
        percentageOf: percentageOf.toFixed(2),
        increased: increased.toFixed(2),
        decreased: decreased.toFixed(2),
        formula: `${percentage}% of ${originalValue}`,
        explanation: `Calculations for ${percentage}% of ${originalValue}`,
      });
    }
  };

  const handleCommonCalculate = () => {
    const percentage = parseFloat(inputs.percentage);
    const number = parseFloat(inputs.number);
    const part = parseFloat(inputs.part);
    const whole = parseFloat(inputs.whole);

    if (selectedCalculation === "percentage-of") {
      if (!isNaN(percentage) && !isNaN(number)) {
        const answer = (percentage / 100) * number;
        setResult({
          ...result,
          type: "common",
          value: answer.toFixed(2),
          formula: `${percentage}% × ${number} = (${percentage} ÷ 100) × ${number}`,
          explanation: `${percentage}% of ${number} is ${answer.toFixed(2)}`,
        });
      }
    } else if (selectedCalculation === "what-percentage") {
      if (!isNaN(part) && !isNaN(whole) && whole !== 0) {
        const answer = (part / whole) * 100;
        setResult({
          ...result,
          type: "common",
          value: answer.toFixed(2),
          formula: `(${part} ÷ ${whole}) × 100`,
          explanation: `${part} is ${answer.toFixed(2)}% of ${whole}`,
        });
      }
    } else if (selectedCalculation === "percentage-what-number") {
      if (!isNaN(part) && !isNaN(percentage) && percentage !== 0) {
        const answer = (part / percentage) * 100;
        setResult({
          ...result,
          type: "common",
          value: answer.toFixed(2),
          formula: `${part} ÷ (${percentage} ÷ 100) = ${part} ÷ ${percentage / 100}`,
          explanation: `${part} is ${percentage}% of ${answer.toFixed(2)}`,
        });
      }
    }
  };

  const handleDifferenceCalculate = () => {
    const originalValue = parseFloat(differenceInputs.originalValue);
    const finalValue = parseFloat(differenceInputs.finalValue);

    if (!isNaN(originalValue) && !isNaN(finalValue) && originalValue !== 0) {
      const absoluteDiff = Math.abs(finalValue - originalValue);
      const percentageChange =
        ((finalValue - originalValue) / originalValue) * 100;
      const isIncrease = finalValue > originalValue;

      setResult({
        ...result,
        type: "difference",
        percentageChange: Math.abs(percentageChange).toFixed(2),
        absoluteDiff: absoluteDiff.toFixed(2),
        isIncrease: isIncrease,
        formula: `((${finalValue} - ${originalValue}) / ${originalValue}) × 100`,
        explanation: `${isIncrease ? "Increase" : "Decrease"} from ${originalValue} to ${finalValue}`,
      });
    }
  };

  const renderSimpleCalculator = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">
          Simple Percentage Calculator
        </h3>
        <p
          className={`text-sm mb-4 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
        >
          Calculate percentage of a value, increases, and decreases
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            Original Value (OV)
          </label>
          <input
            type="number"
            value={simpleInputs.originalValue}
            onChange={(e) =>
              setSimpleInputs({
                ...simpleInputs,
                originalValue: e.target.value,
              })
            }
            placeholder="Enter original value"
            className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500 transition-all ${
              isDarkMode
                ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
            }`}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">
            Percentage (%)
          </label>
          <input
            type="number"
            value={simpleInputs.percentage}
            onChange={(e) =>
              setSimpleInputs({ ...simpleInputs, percentage: e.target.value })
            }
            placeholder="Enter percentage"
            className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500 transition-all ${
              isDarkMode
                ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
            }`}
          />
        </div>
      </div>

      <button
        onClick={handleSimpleCalculate}
        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
      >
        Calculate
      </button>

      {result.type === "simple" && (
        <div
          className={`p-6 rounded-lg border ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-200"}`}
        >
          <h4 className="font-semibold text-lg mb-4">Results</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span
                className={`${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
              >
                {simpleInputs.percentage}% of {simpleInputs.originalValue}:
              </span>
              <span className="text-xl font-bold text-green-600">
                {result.percentageOf}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span
                className={`${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
              >
                {simpleInputs.originalValue} increased by{" "}
                {simpleInputs.percentage}%:
              </span>
              <span className="text-xl font-bold text-blue-600">
                {result.increased}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span
                className={`${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
              >
                {simpleInputs.originalValue} decreased by{" "}
                {simpleInputs.percentage}%:
              </span>
              <span className="text-xl font-bold text-red-600">
                {result.decreased}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderCommonCalculator = () => {
    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">
            Common Percentage Phrases
          </h3>
          <p
            className={`text-sm mb-4 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            Standard percentage calculations
          </p>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-3">
            Calculation Type
          </label>
          <select
            value={selectedCalculation}
            onChange={(e) => setSelectedCalculation(e.target.value)}
            className={`w-full px-3 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500 transition-all truncate ${
              isDarkMode
                ? "bg-gray-800 border-gray-700 text-white"
                : "bg-white border-gray-300 text-gray-900"
            }`}
          >
            {calculatorCopy.calculationTypes?.map((type) => (
              <option key={type.id} value={type.id}>
                {type.name} - {type.description}
              </option>
            ))}
          </select>
        </div>

        {selectedCalculation === "percentage-of" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Percentage (%)
              </label>
              <input
                type="number"
                value={inputs.percentage}
                onChange={(e) =>
                  setInputs({ ...inputs, percentage: e.target.value })
                }
                placeholder="Enter percentage"
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500 transition-all ${
                  isDarkMode
                    ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                }`}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Number</label>
              <input
                type="number"
                value={inputs.number}
                onChange={(e) =>
                  setInputs({ ...inputs, number: e.target.value })
                }
                placeholder="Enter number"
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500 transition-all ${
                  isDarkMode
                    ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                }`}
              />
            </div>
          </div>
        )}

        {selectedCalculation === "what-percentage" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Part (X)</label>
              <input
                type="number"
                value={inputs.part}
                onChange={(e) => setInputs({ ...inputs, part: e.target.value })}
                placeholder="Enter the part"
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500 transition-all ${
                  isDarkMode
                    ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                }`}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Whole (Y)
              </label>
              <input
                type="number"
                value={inputs.whole}
                onChange={(e) =>
                  setInputs({ ...inputs, whole: e.target.value })
                }
                placeholder="Enter the whole"
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500 transition-all ${
                  isDarkMode
                    ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                }`}
              />
            </div>
          </div>
        )}

        {selectedCalculation === "percentage-what-number" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Part (X)</label>
              <input
                type="number"
                value={inputs.part}
                onChange={(e) => setInputs({ ...inputs, part: e.target.value })}
                placeholder="Enter the part"
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500 transition-all ${
                  isDarkMode
                    ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                }`}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Percentage (%)
              </label>
              <input
                type="number"
                value={inputs.percentage}
                onChange={(e) =>
                  setInputs({ ...inputs, percentage: e.target.value })
                }
                placeholder="Enter percentage"
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500 transition-all ${
                  isDarkMode
                    ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                }`}
              />
            </div>
          </div>
        )}

        <button
          onClick={handleCommonCalculate}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
        >
          Calculate
        </button>

        {result.type === "common" && (
          <div
            className={`p-6 rounded-lg border ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-200"}`}
          >
            <h4 className="font-semibold text-lg mb-2">Result</h4>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-green-600">
                {result.value}
                {selectedCalculation === "what-percentage" ? "%" : ""}
              </p>
              <p
                className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                Formula: {result.formula}
              </p>
              <p
                className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
              >
                {result.explanation}
              </p>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderDifferenceCalculator = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">
          Percentage Increase, Decrease & Difference
        </h3>
        <p
          className={`text-sm mb-4 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
        >
          Compare two values and find the percentage change and absolute
          difference
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            Original Value (OV)
          </label>
          <input
            type="number"
            value={differenceInputs.originalValue}
            onChange={(e) =>
              setDifferenceInputs({
                ...differenceInputs,
                originalValue: e.target.value,
              })
            }
            placeholder="Enter original value"
            className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500 transition-all ${
              isDarkMode
                ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
            }`}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">
            Final Value (FV)
          </label>
          <input
            type="number"
            value={differenceInputs.finalValue}
            onChange={(e) =>
              setDifferenceInputs({
                ...differenceInputs,
                finalValue: e.target.value,
              })
            }
            placeholder="Enter final value"
            className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500 transition-all ${
              isDarkMode
                ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
            }`}
          />
        </div>
      </div>

      <button
        onClick={handleDifferenceCalculate}
        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
      >
        Calculate
      </button>

      {result.type === "difference" && (
        <div
          className={`p-6 rounded-lg border ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-200"}`}
        >
          <h4 className="font-semibold text-lg mb-4">Results</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span
                className={`${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
              >
                Percentage {result.isIncrease ? "Increase" : "Decrease"}:
              </span>
              <span
                className={`text-xl font-bold ${result.isIncrease ? "text-green-600" : "text-red-600"}`}
              >
                {result.percentageChange}%
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span
                className={`${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
              >
                Absolute Difference:
              </span>
              <span className="text-xl font-bold text-blue-600">
                {result.absoluteDiff}
              </span>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-300">
              <p
                className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                Formula: {result.formula}
              </p>
              <p
                className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
              >
                {result.explanation}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* First Tile - Radio Button Selection */}
      <div
        className={`rounded-xl p-8 shadow-xl ${isDarkMode ? "bg-gray-900 border border-gray-800" : "bg-white border border-gray-100"}`}
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Calculator Type</h2>
          <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
            Choose your calculation method
          </p>
        </div>

        <div className="space-y-4">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="radio"
              name="calculationType"
              value="simple"
              checked={selectedCalculationType === "simple"}
              onChange={(e) => setSelectedCalculationType(e.target.value)}
              className="w-4 h-4 accent-green-600 focus:ring-green-500"
            />
            <div>
              <span className="font-medium">Simple Percentage</span>
              <p
                className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                Basic percentage calculations and increases/decreases
              </p>
            </div>
          </label>

          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="radio"
              name="calculationType"
              value="common"
              checked={selectedCalculationType === "common"}
              onChange={(e) => setSelectedCalculationType(e.target.value)}
              className="w-4 h-4 accent-green-600 focus:ring-green-500"
            />
            <div>
              <span className="font-medium">Common Percentage Phrases</span>
              <p
                className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                Standard percentage word problems and calculations
              </p>
            </div>
          </label>

          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="radio"
              name="calculationType"
              value="difference"
              checked={selectedCalculationType === "difference"}
              onChange={(e) => setSelectedCalculationType(e.target.value)}
              className="w-4 h-4 accent-green-600 focus:ring-green-500"
            />
            <div>
              <span className="font-medium">
                Percentage Increase, Decrease & Difference
              </span>
              <p
                className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                Compare two values and calculate percentage change
              </p>
            </div>
          </label>
        </div>
      </div>

      {/* Second Tile - Calculator Interface */}
      <div
        className={`rounded-xl p-8 shadow-xl ${isDarkMode ? "bg-gray-900 border border-gray-800" : "bg-white border border-gray-100"}`}
      >
        {selectedCalculationType === "simple" && renderSimpleCalculator()}
        {selectedCalculationType === "common" && renderCommonCalculator()}
        {selectedCalculationType === "difference" &&
          renderDifferenceCalculator()}
      </div>
    </div>
  );
};
