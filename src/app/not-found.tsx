"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AlertTriangle, ArrowLeft, Home, RefreshCw } from "lucide-react";
import { ERROR_CONTENT } from "@/constants";

export default function NotFound({
  type = "404",
  message,
}: {
  type?: "404" | "500" | "module-error";
  message?: string;
}) {
  const [darkMode] = useState<boolean>(false);
  const router = useRouter();

  const content = ERROR_CONTENT[type];

  const isWarning = type === "404" || type === "module-error";
  const iconColor = isWarning ? "text-orange-400" : "text-red-500";
  const codeColor = isWarning ? "text-orange-400" : "text-red-500";

  return (
    <div
      className={`min-h-screen relative overflow-hidden ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-blue-50 via-green-50 to-emerald-50"
      }`}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-10 ${
            darkMode ? "bg-blue-400" : "bg-blue-300"
          }`}
        ></div>
        <div
          className={`absolute -bottom-32 -left-32 w-64 h-64 rounded-full opacity-10 ${
            darkMode ? "bg-green-400" : "bg-green-300"
          }`}
        ></div>
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-5 ${
            darkMode ? "bg-orange-400" : "bg-orange-200"
          }`}
        ></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-12 animate-pulse">
            <div
              className={`inline-flex items-center justify-center w-32 h-32 rounded-full mb-8 ${
                darkMode ? "bg-gray-800 shadow-2xl" : "bg-white shadow-xl"
              } backdrop-blur-sm`}
            >
              <AlertTriangle className={`w-16 h-16 ${iconColor}`} />
            </div>

            <div
              className={`text-8xl md:text-9xl lg:text-[12rem] font-black mb-6 ${codeColor} leading-none tracking-tight`}
            >
              {content.code}
            </div>
          </div>

          <div className="mb-12 space-y-6">
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              } leading-tight`}
            >
              {content.title}
            </h1>

            <p
              className={`text-lg md:text-xl lg:text-2xl max-w-xl mx-auto leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {message || content.subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => router.back()}
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg min-w-[180px]"
            >
              <ArrowLeft className="w-6 h-6 mr-3 transition-transform group-hover:-translate-x-1" />
              Go Back
            </button>

            <button
              onClick={() => router.push("/")}
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg min-w-[180px]"
            >
              <Home className="w-6 h-6 mr-3 transition-transform group-hover:scale-110" />
              Home
            </button>

            {type !== "404" && (
              <button
                onClick={() => window.location.reload()}
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg min-w-[180px]"
              >
                <RefreshCw className="w-6 h-6 mr-3 transition-transform group-hover:rotate-180" />
                Retry
              </button>
            )}
          </div>

          {type === "module-error" && (
            <div
              className={`max-w-lg mx-auto p-6 rounded-2xl backdrop-blur-sm ${
                darkMode
                  ? "bg-gray-800/50 border border-gray-700"
                  : "bg-white/60 border border-orange-200 shadow-lg"
              }`}
            >
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                <div className="text-left">
                  <h3
                    className={`font-semibold mb-2 ${
                      darkMode ? "text-orange-300" : "text-orange-700"
                    }`}
                  >
                    Technical Issue Detected
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    This might be a temporary issue. Please try refreshing the
                    page or contact our support team if the problem persists.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
