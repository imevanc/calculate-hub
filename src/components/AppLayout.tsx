"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useTheme } from "@/hooks";

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "bg-black text-white" : "bg-white text-gray-900"}`}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
};
