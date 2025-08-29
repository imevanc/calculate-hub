import { PERCENTAGE_CALCULATOR } from "@/constants";

type MakeOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type CalculatorCopy = MakeOptional<
  typeof PERCENTAGE_CALCULATOR,
  "calculationTypes"
>;
