import { LucideIcon } from "lucide-react";

export type Tool = {
  id: number;
  name: string;
  icon: LucideIcon;
  description: string;
  color: "green" | "blue";
};
