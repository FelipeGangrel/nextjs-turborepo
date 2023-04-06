import {
  lightColors,
  darkColors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from "@acme/tokens";
import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
  colors: {
    ...lightColors,
  },
} as const;

export const darkTheme = {
  ...lightTheme,
  colors: {
    ...darkColors,
  },
} as const;

export const GlobalStyles = createGlobalStyle`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    html, body {
      font: 400 16px/1.6 "Roboto", sans-serif;
      background: ${(p) => p.theme.colors.background};
      color: ${(p) => p.theme.colors.text100};
      font-family: ${(p) => p.theme.fonts.default};
      font-size: ${(p) => p.theme.fontSizes.md};
      margin: 0;
      padding: 0;
    }
`;
