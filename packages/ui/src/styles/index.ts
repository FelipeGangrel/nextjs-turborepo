import { createStitches, defaultThemeMap } from "@stitches/react";
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

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  prefix,
  reset,
  styled,
  theme,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: "space",
    width: "space",
  },
  theme: {
    radii,
    space,
    fontSizes,
    fonts,
    fontWeights,
    lineHeights,
    colors: {
      ...lightColors,
    },
  },
});

export const darkTheme = createTheme({
  colors: {
    ...darkColors,
  },
});
