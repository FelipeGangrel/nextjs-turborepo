import { styled } from "@/styles";

export const StyledButton = styled("button", {
  all: "unset",
  display: "flex",
  gap: "$2",
  borderRadius: "$sm",
  outline: "none",
  fontFamily: "$default",
  fontSize: "$md",
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

  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
