import React, { ComponentProps, ElementType } from "react";

import { StyledButton, type StyledButtonProps } from "./styles";

export type ButtonProps = StyledButtonProps &
  ComponentProps<typeof StyledButton> & {
    as?: ElementType;
  };

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  ...buttonProps
}) => {
  return (
    <StyledButton variant={variant} size={size} {...buttonProps}>
      {children}
    </StyledButton>
  );
};

Button.displayName = "Button";
