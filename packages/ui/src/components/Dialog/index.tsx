import * as RadixDialog from "@radix-ui/react-dialog";

import {
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogTitle,
  CloseButton,
} from "./styles";
import React, { ComponentProps } from "react";
import { Button } from "../Button";

export type DialogProps = {
  content: React.ReactNode;
  trigger?: JSX.Element;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export const Dialog: React.FC<DialogProps> = ({
  content,
  trigger,
  open,
  onOpenChange,
}) => {
  return (
    <RadixDialog.Root open={open} onOpenChange={onOpenChange}>
      {trigger && <RadixDialog.Trigger asChild>{trigger}</RadixDialog.Trigger>}
      <RadixDialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <DialogTitle>Modal title</DialogTitle>
          <DialogDescription>{content}</DialogDescription>
          <RadixDialog.Close asChild>
            <CloseButton variant="primary" size="sm" aria-label="Close">
              &times;
            </CloseButton>
          </RadixDialog.Close>
        </DialogContent>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};

Dialog.displayName = "Dialog";
