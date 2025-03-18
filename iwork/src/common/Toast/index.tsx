import Snackbar, { SnackbarProps } from "@mui/material/Snackbar";
import React from "react";
import { TOAST_MESSAGE } from "../../constants";
import { Alert } from "@mui/material";
import { styled } from "@mui/material/styles";

export type Vertical = "top" | "bottom";
export type Horizontal = "left" | "center" | "right";
export type SnackbarVariant = "success" | "error" | "warning" | "info";

interface ToastContent extends SnackbarProps {
  vertical?: Vertical;
  horizontal?: Horizontal;
  message: string;
  variant?: SnackbarVariant;
}

const StyledSnackbar = styled(Snackbar)<{ variant: SnackbarVariant }>(({ theme, variant }) => ({
  "& .MuiPaper-root": {
    border: "2px solid",
    borderColor: {
      success: "#388e3c",
      error: "#d32f2f",
      warning: "#f57c00",
      info: "#1976d2",
    }[variant],
  },
}));

const ToastMessage: React.FC<ToastContent> = ({
  vertical = "top",
  horizontal = "center",
  message,
  variant = "info",
  autoHideDuration = TOAST_MESSAGE.DEFAULT_AUTO_HIDE_DURATION,
  ...MUISnackbarProps
}) => {
  return (
    <StyledSnackbar
      data-testid="snackbar"
      anchorOrigin={{ vertical, horizontal }}
      autoHideDuration={autoHideDuration}
      variant={variant}
      {...MUISnackbarProps}
    >
      <Alert 
        onClose={(event) => MUISnackbarProps.onClose?.(event, "timeout")} 
        severity={variant} 
      >
        {message}
      </Alert>
    </StyledSnackbar>
  );
};

export default ToastMessage;
