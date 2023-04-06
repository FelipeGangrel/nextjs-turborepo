import { AppProps } from "next/app";
import { ThemeProvider, useTheme } from "next-themes";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "@acme/ui-sc";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import useDarkMode from "use-dark-mode";

const App = ({ Component, pageProps }: AppProps) => {
  const darkMode = useDarkMode();

  return (
    <StyledComponentsThemeProvider
      theme={darkMode.value ? darkTheme : lightTheme}
    >
      <GlobalStyles />
      <ThemeSwitcher />
      <Component {...pageProps} />
    </StyledComponentsThemeProvider>
  );
};

export default App;
