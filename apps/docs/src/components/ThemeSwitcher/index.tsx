import { Button } from "@acme/ui-sc";
import { useEffect, useState } from "react";
import useDarkMode from "use-dark-mode";

export const ThemeSwitcher: React.FC = () => {
  const [isReady, setIsReady] = useState(false);
  const darkMode = useDarkMode();

  const toggleTheme = () => {
    darkMode.toggle();
  };

  useEffect(() => {
    setIsReady(true);
  }, []);

  if (!isReady) return null;

  return <Button onClick={toggleTheme}>{darkMode.value ? "🌞" : "🌙"}</Button>;
};

ThemeSwitcher.displayName = "ThemeSwitcher";
