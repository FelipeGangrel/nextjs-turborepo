import { Button } from "@acme/ui-sc";
import useDarkMode from "use-dark-mode";

export const ThemeSwitcher: React.FC = () => {
  const darkMode = useDarkMode(true);

  const toggleTheme = () => {
    darkMode.toggle();
  };

  return <Button onClick={toggleTheme}>{darkMode.value ? "🌞" : "🌙"}</Button>;
};

ThemeSwitcher.displayName = "ThemeSwitcher";
