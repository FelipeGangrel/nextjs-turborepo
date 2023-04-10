import { styled, keyframes } from "@/styles";

import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "../Button";

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

export const DialogOverlay = styled(Dialog.Overlay, {
  backgroundColor: "$background",
  position: "fixed",
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

export const DialogContent = styled(Dialog.Content, {
  backgroundColor: "$surface100",
  borderRadius: "$md",
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: "450px",
  maxHeight: "85vh",
  padding: "$8",
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  "&:focus": {
    outline: "none",
  },
});

export const DialogTitle = styled(Dialog.Title, {
  margin: 0,
  fontWeight: 500,
  color: "$text200",
  fontSize: "$lg",
});

export const DialogDescription = styled(Dialog.Description, {
  margin: "$4 0 $8",
  color: "$text100",
  fontSize: "$md",
  lineHeight: "$base",
});

export const Flex = styled("div", { display: "flex" });

export const CloseButton = styled(Button, {
  position: "absolute",
  top: "$4",
  right: "$4",
  padding: "0px !important",
  alignItems: "center",
  justifyContent: "center",
  width: "$8",
  height: "$8",
  borderRadius: "$full",
});
