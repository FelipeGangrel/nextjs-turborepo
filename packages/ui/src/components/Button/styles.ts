import { styled, theme } from "@/styles";
import { invert, opacify } from "polished";

export const StyledButton = styled("button", {
  all: "unset",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",

  borderRadius: "$sm",
  boxSizing: "border-box",
  minWidth: 120,
  padding: "$2 $4",

  fontFamily: "$default",
  fontSize: "$sm",
  fontWeight: "$medium",
  textAlign: "center",

  cursor: "pointer",

  "&:disabled": {
    cursor: "not-allowed",
    filter: "grayscale(20%)",
    opacity: 0.85,
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: "$primary300",
        color: "#fff",
        "&:not(:disabled):hover": {
          backgroundColor: "$primary200",
        },
        "&:not(:disabled):active": {
          backgroundColor: "$primary100",
        },
      },
    },
    bordered: {
      true: {},
    },
  },

  defaultVariants: {
    variant: "primary",
  },
});
