import { styled } from "@/styles";

export const StyledButton = styled("button", {
  all: "unset",

  display: "flex",
  gap: "$2",

  borderRadius: "$sm",
  boxSizing: "border-box",
  position: "relative",

  outline: "none",
  borderStyle: "solid",
  borderSize: "2px",
  borderColor: "transparent",

  fontFamily: "$default",
  fontSize: "$sm",
  fontWeight: "$medium",
  textAlign: "center",

  cursor: "pointer",

  "&:disabled": {
    cursor: "not-allowed",
    filter: "grayscale(60%)",
    opacity: 0.8,
  },

  variants: {
    variant: {
      primary: {
        color: "$textLighter",
        backgroundColor: "$primary300",
        "&:not(:disabled):hover, &:not(:disabled):focus": {
          backgroundColor: "$primary200",
          outline: "2px solid $primary200",
          outlineOffset: "2px",
        },
        "&:not(:disabled):active": {
          backgroundColor: "$primary100",
        },
      },
      secondary: {
        color: "$text200",
        backgroundColor: "$secondary300",
        "&:not(:disabled):hover, &:not(:disabled):focus": {
          backgroundColor: "$secondary200",
          outline: "2px solid $secondary200",
          outlineOffset: "2px",
        },
        "&:not(:disabled):active": {
          backgroundColor: "$secondary100",
        },
      },
    },
    size: {
      lg: {
        padding: "$3 $5",
        fontSize: "$lg",
      },
      md: {
        padding: "$2 $4",
        fontSize: "$md",
      },
      sm: {
        padding: "$2 $3",
        fontSize: "$xs",
      },
    },
    outlined: {
      true: {},
    },
  },

  compoundVariants: [
    {
      variant: "primary",
      outlined: true,
      css: {
        color: "$primary300",
        backgroundColor: "transparent",
        borderColor: "$primary300",
        "&:not(:disabled):hover, &:not(:disabled):focus": {
          backgroundColor: "$primary300",
          color: "$textLighter",
        },
        "&:not(:disabled):active": {
          backgroundColor: "$primary200",
          color: "$textLighter",
        },
      },
    },
    {
      variant: "secondary",
      outlined: true,
      css: {
        color: "$secondary300",
        backgroundColor: "transparent",
        borderColor: "$secondary300",
        "&:not(:disabled):hover, &:not(:disabled):focus": {
          color: "$text200",
        },
      },
    },
  ],

  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
