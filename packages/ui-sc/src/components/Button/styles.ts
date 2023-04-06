import styled, { css } from "styled-components";

type Variant = "primary" | "secondary";
type Size = "lg" | "md" | "sm";

export interface StyledButtonProps {
  variant?: Variant;
  size?: Size;
}

const primaryVariantStyles = css`
  color: ${(p) => p.theme.colors.textLighter};
  background-color: ${(p) => p.theme.colors.primary300};
  &:not(:disabled) {
    &:hover,
    &:focus {
      background-color: ${(p) => p.theme.colors.primary200};
      outline: 2px solid ${(p) => p.theme.colors.primary200};
      outline-offset: 2px;
    }
    &:active {
      background-color: ${(p) => p.theme.colors.primary100};
    }
  }
`;

const secondaryVariantStyles = css`
  color: ${(p) => p.theme.colors.text200};
  background-color: ${(p) => p.theme.colors.secondary300};
  &:not(:disabled) {
    &:hover,
    &:focus {
      background-color: ${(p) => p.theme.colors.secondary200};
      outline: 2px solid ${(p) => p.theme.colors.secondary200};
      outline-offset: 2px;
    }
    &:active {
      background-color: ${(p) => p.theme.colors.secondary100};
    }
  }
`;

const smSizeStyles = css`
  padding: ${(p) => p.theme.space[2]} ${(p) => p.theme.space[3]};
`;

const mdSizeStyles = css`
  padding: ${(p) => p.theme.space[2]} ${(p) => p.theme.space[4]};
`;

const lgSizeStyles = css`
  padding: ${(p) => p.theme.space[3]} ${(p) => p.theme.space[5]};
`;

export const StyledButton = styled.button<StyledButtonProps>`
  all: unset;
  display: flex;
  gap: ${(p) => p.theme.space[2]};
  border-radius: ${(p) => p.theme.radii.sm};
  outline: none;
  border-style: solid;
  border-width: 2px;
  border-color: transparent;
  font-family: ${(p) => p.theme.fonts.default};
  font-size: ${(p) => p.theme.fontSizes.md};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  text-align: center;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    filter: grayscale(60%);
    opacity: 0.8;
  }

  ${(p) => p.variant === "primary" && primaryVariantStyles};
  ${(p) => p.variant === "secondary" && secondaryVariantStyles};

  ${(p) => p.size === "sm" && smSizeStyles};
  ${(p) => p.size === "md" && mdSizeStyles};
  ${(p) => p.size === "lg" && lgSizeStyles};
`;
