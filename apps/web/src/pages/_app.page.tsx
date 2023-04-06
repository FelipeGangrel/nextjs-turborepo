import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { darkTheme, globalStyles } from "@acme/ui";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

const App = ({ Component, pageProps }: AppProps) => {
  globalStyles();
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        light: "light",
        dark: darkTheme.className,
      }}
    >
      <ThemeSwitcher />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
