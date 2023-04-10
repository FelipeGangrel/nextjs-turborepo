import styled, { keyframes } from "styled-components";

import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "../Button";

const overlayShow = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const contentShow = keyframes`
    0% {
        opacity: 0;
        transform: translate(-50%, -48%) scale(.96);
    }
    100% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }
`;

export const DialogOverlay = styled(Dialog.Content)`
  background-color: ${(p) => p.theme.colors.background};
  position: fixed;
  inset: 0;
  animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const DialogContent = styled(Dialog.Content)`
  background-color: ${(p) => p.theme.colors.surface100};
  border-radius: ${(p) => p.theme.radii.md};
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  padding: ${(p) => p.theme.space[8]};
  animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  &:focus {
    outline: none;
  }
`;

export const DialogTitle = styled(Dialog.Title)`
  margin: 0;
  font-weight: 500;
  color: ${(p) => p.theme.colors.text200};
  font-size: ${(p) => p.theme.fontSizes.lg};
`;

export const DialogDescription = styled(Dialog.Description)`
  margin: ${(p) => p.theme.space[4]} 0 ${(p) => p.theme.space[8]};
  color: ${(p) => p.theme.colors.text100};
  font-size: ${(p) => p.theme.fontSizes.md};
  line-height: ${(p) => p.theme.lineHeights.base};
`;

export const Flex = styled("div")`
  display: flex;
`;

export const CloseButton = styled(Button)`
  position: absolute;
  top: ${(p) => p.theme.space[4]};
  right: ${(p) => p.theme.space[4]};
  padding: 0px !important;
  align-items: center;
  justify-content: center;
  width: ${(p) => p.theme.space[8]};
  height: ${(p) => p.theme.space[8]};
  border-radius: ${(p) => p.theme.radii.full};
`;
