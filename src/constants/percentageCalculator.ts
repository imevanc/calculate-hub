export const PERCENTAGE_CALCULATOR = {
  title: "Percentage Calculator",
  description:
    "Calculate percentages, increases, decreases, and differences with ease",

  calculationTypes: [
    {
      id: "percentage-of",
      name: "What is P% of X?",
      description: "Calculate a percentage of a number",
      example: "What is 25% of 200?",
    },
    {
      id: "what-percentage",
      name: "X is what percentage of Y?",
      description: "Find what percentage one number is of another",
      example: "50 is what percentage of 200?",
    },
    {
      id: "percentage-what-number",
      name: "X is P% of what?",
      description: "Find the whole when you know the part and percentage",
      example: "50 is 25% of what number?",
    },
    {
      id: "increase-by-percentage",
      name: "What is X increased by P%?",
      description: "Calculate a number after percentage increase",
      example: "What is 100 increased by 20%?",
    },
    {
      id: "decrease-by-percentage",
      name: "What is X decreased by P%?",
      description: "Calculate a number after percentage decrease",
      example: "What is 100 decreased by 15%?",
    },
  ],

  tableOfContents: [
    {
      id: "basics",
      title: "Understanding Percentages",
      subsections: [
        "What are percentages?",
        "Basic calculations",
        "Real-world examples",
      ],
    },
    {
      id: "types",
      title: "Types of Percentage Calculations",
      subsections: [
        "Simple percentages",
        "Percentage change",
        "Compound percentages",
      ],
    },
    {
      id: "applications",
      title: "Practical Applications",
      subsections: [
        "Finance and investing",
        "Statistics and data",
        "Everyday scenarios",
      ],
    },
    {
      id: "advanced",
      title: "Advanced Concepts",
      subsections: ["Percentage points", "Compound interest", "Error margins"],
    },
    {
      id: "tips",
      title: "Tips and Tricks",
      subsections: [
        "Mental math shortcuts",
        "Common mistakes",
        "Quick estimation methods",
      ],
    },
  ],

  content: {
    basics: {
      title: "Understanding Percentages",
      content: `Percentages are one of the most useful mathematical concepts in everyday life. The word "percent" comes from the Latin "per centum," meaning "by the hundred." Think of percentages as a universal language for comparing parts to wholes.

Imagine you have a pizza cut into 100 equal slices (though that would be quite thin!). If you eat 25 slices, you've consumed 25% of the pizza. This visualization helps us understand that percentages are simply fractions with 100 as the denominator.

The beauty of percentages lies in their ability to standardize comparisons. Whether you're comparing test scores (85% vs 92%), discount rates (20% off vs 30% off), or statistical data (45% approval rating), percentages provide a clear, comparable framework.`,
    },
    types: {
      title: "Types of Percentage Calculations",
      content: `There are three fundamental types of percentage calculations that cover most scenarios you'll encounter:

Simple Percentage Calculation: Finding what percentage one number is of another. For example, if 15 students out of 60 passed an exam, what percentage passed? This is 15/60 × 100 = 25%.

Percentage of a Number: Calculating a specific percentage of a given number. If a $200 jacket is 30% off, the discount is $200 × 0.30 = $60.

Percentage Change: Measuring the increase or decrease between two values. If your salary increased from $50,000 to $55,000, the percentage increase is (55,000 - 50,000)/50,000 × 100 = 10%.

Each type serves different purposes but follows logical mathematical principles that become intuitive with practice.`,
    },
    applications: {
      title: "Practical Applications",
      content: `Percentages appear everywhere in modern life, making them essential for informed decision-making:

Financial Literacy: Understanding interest rates, loan terms, investment returns, and tax calculations. A 7% annual return on a $10,000 investment means $700 in gains per year.

Shopping and Commerce: Comparing discounts, calculating tips, and understanding price changes. A 15% tip on a $80 meal is $12, making your total $92.

Health and Fitness: Body fat percentage, nutritional information, and medical statistics. Knowing that a food item is 20% protein helps with dietary planning.

Data Analysis: Survey results, market research, and statistical reporting. When 68% of respondents prefer option A, you have clear actionable insights.

Academic Performance: Test scores, grade calculations, and progress tracking. If homework is worth 30% of your final grade, each assignment has significant impact.`,
    },
    advanced: {
      title: "Advanced Concepts",
      content: `Beyond basic calculations, several advanced percentage concepts prove invaluable:

Percentage Points vs Percentage Change: If unemployment rises from 5% to 7%, that's a 2 percentage point increase, but a 40% relative increase (2/5 × 100). This distinction is crucial in statistics and policy discussions.

Compound Percentages: When percentages apply to previously calculated percentages. An investment growing 10% annually for 3 years doesn't grow 30% total, but rather 33.1% due to compounding.

Margin of Error: Statistical surveys often report results like "52% ± 3%," meaning the true value likely falls between 49% and 55%. Understanding this uncertainty is vital for interpreting data.

Base Rate Considerations: A 50% increase in rare events might still represent very small absolute numbers. Context always matters when interpreting percentage changes.`,
    },
    tips: {
      title: "Tips and Tricks",
      content: `Master these techniques for faster, more accurate percentage calculations:

Mental Math Shortcuts: 
- 10% is easy (move decimal point left)
- 5% is half of 10%
- 1% is 10% divided by 10
- 25% is one-quarter, 50% is one-half, 75% is three-quarters

Common Mistake Prevention:
- Always identify what represents 100% in your calculation
- Double-check whether you need percentage OF something or percentage CHANGE
- Remember that percentage points and percentage changes are different
- Verify your answer makes logical sense in context

Quick Estimation: For rough calculations, round to friendly numbers. 23% of 197 becomes roughly 25% of 200, which equals 50. The exact answer (45.31) confirms our estimate was reasonable.

Real-world Validation: Always ask yourself if your calculated percentage makes sense given the scenario. A 200% tip or a 150% discount should trigger a double-check of your work.`,
    },
  },
};
