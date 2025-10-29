import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-4 right-4 z-50 p-3 rounded-full bg-black/20 backdrop-blur-sm border border-white/20 text-white hover:bg-white/10 transition-all duration-300"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
};
