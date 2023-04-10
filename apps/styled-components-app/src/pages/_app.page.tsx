import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { GlobalStyles, darkTheme, lightTheme } from "@acme/ui-sc";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import useDarkMode from "use-dark-mode";

const App = ({ Component, pageProps }: AppProps) => {
  const darkMode = useDarkMode();

  return (
    <ThemeProvider theme={darkMode.value ? darkTheme : lightTheme}>
      <GlobalStyles />
      <ThemeSwitcher />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
