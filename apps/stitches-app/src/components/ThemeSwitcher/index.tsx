import { useTheme } from "next-themes";
import { Button } from "@acme/ui";
import { useEffect, useState } from "react";

export const ThemeSwitcher: React.FC = () => {
  const [isReady, setIsReady] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setIsReady(true);
  }, []);

  if (!isReady) return null;

  return (
    <Button onClick={toggleTheme}>{theme === "dark" ? "🌞" : "🌙"}</Button>
  );
};

ThemeSwitcher.displayName = "ThemeSwitcher";
