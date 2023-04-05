import React, { ComponentProps, ElementType } from "react";

import { StyledButton } from "./styles";

export type ButtonProps = ComponentProps<typeof StyledButton> & {
  as?: ElementType;
};

export const Button: React.FC<ButtonProps> = ({ children, ...buttonProps }) => {
  return <StyledButton {...buttonProps}>{children}</StyledButton>;
};

Button.displayName = "Button";
