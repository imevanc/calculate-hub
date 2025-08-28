import type { Metadata } from "next";
import { AppLayout, Footer, Header } from "@/components";
import { ThemeProvider } from "@/providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "CalculateHub",
  description: "CalculateHub - Your Gateway to Online Calculators",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <ThemeProvider>
          <AppLayout>{children}</AppLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
