import {
    ButtonProps as MUIButtonProps,
    Button as MUIButton,
  } from "@mui/material";
  import React from "react";
  
  interface ButtonProps extends MUIButtonProps {
    children: React.ReactNode;
  }
  
  const Button = ({ children, ...MUIButtonProps }: ButtonProps) => {
    return <MUIButton {...MUIButtonProps}>{children}</MUIButton>;
  };
  
  export default Button;
  