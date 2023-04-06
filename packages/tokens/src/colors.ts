const textColors = {
  textLight: "hsl(260, 10%, 80%)",
  textLighter: "hsl(260, 10%, 90%)",
  textDark: "hsl(260, 10%, 20%)",
  textDarker: "hsl(260, 10%, 10%)",
} as const;

export const lightColors = {
  ...textColors,
  text100: textColors.textDark,
  text200: textColors.textDarker,
  background: "hsl(260, 20%, 100%)",
  primary100: "hsl(260, 50%, 50%)",
  primary200: "hsl(260, 50%, 46%)",
  primary300: "hsl(260, 50%, 42%)",
  secondary100: "hsl(240, 100%, 98%)",
  secondary200: "hsl(240, 100%, 96%)",
  secondary300: "hsl(240, 100%, 94%)",
  accent100: "hsl(194, 60%, 50%)",
  accent200: "hsl(194, 60%, 46%)",
  accent300: "hsl(194, 60%, 32%)",
  surface100: "hsl(260, 20%, 90%)",
  surface200: "hsl(260, 20%, 80%)",
} as const;

export const darkColors = {
  ...lightColors,
  text100: textColors.textLight,
  text200: textColors.textLighter,
  background: "hsl(260, 20%, 10%)",
  primary100: "hsl(260, 40%, 50%)",
  primary200: "hsl(260, 40%, 46%)",
  primary300: "hsl(260, 40%, 42%)",
  secondary100: "hsl(240, 25%, 30%)",
  secondary200: "hsl(240, 25%, 28%)",
  secondary300: "hsl(240, 25%, 26%)",
  accent100: "hsl(194, 50%, 50%)",
  accent200: "hsl(194, 50%, 46%)",
  accent300: "hsl(194, 50%, 32%)",
  surface100: "hsl(260, 20%, 20%)",
  surface200: "hsl(260, 20%, 30%)",
} as const;
