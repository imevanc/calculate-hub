"use client";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { Tool } from "@/types";

export const ToolTile = ({
  tool,
  isPopular = false,
  isDarkMode,
}: {
  tool: Tool;
  isPopular?: boolean;
  isDarkMode: boolean;
}) => {
  const router = useRouter();
  const Icon = tool.icon;
  const bgColor = tool.color === "green" ? "bg-green-600" : "bg-blue-600";

  return (
    <div
      className={`
        ${isDarkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-gray-50"} 
        border ${isDarkMode ? "border-gray-700" : "border-gray-200"} 
        rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer group
        ${isPopular ? "ring-2 ring-green-500 ring-opacity-50" : ""}
      `}
      onClick={() => router.push(`/${tool.name.toLowerCase()}`)}
    >
      <div
        className={`w-12 h-12 rounded-lg ${bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3
        className={`font-semibold text-lg mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}
      >
        {tool.name}
      </h3>
      <p
        className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
      >
        {tool.description}
      </p>
      {isPopular && (
        <div className="mt-3">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-600 text-white">
            <Heart className="w-3 h-3 mr-1" />
            Popular
          </span>
        </div>
      )}
    </div>
  );
};
