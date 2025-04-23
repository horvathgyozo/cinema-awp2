import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeButton() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <button
      onClick={handleClick}
      className="bg-background rounded-full flex items-center justify-center w-8 h-8 border"
    >
      {theme === "light" ? <Sun /> : <Moon />}
    </button>
  );
}
