export type ThemeContextType = {
  theme: "light" | "dark" | null;
  setTheme: (theme: "light" | "dark") => void;
};
