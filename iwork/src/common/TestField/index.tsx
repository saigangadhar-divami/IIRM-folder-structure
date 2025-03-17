import React from "react";
import { TextField as MuiTextField } from "@mui/material"; // Import Material-UI's TextField
import { Controller, Control, RegisterOptions } from "react-hook-form"; // Import Controller and validation options

// Extend CommonTextFieldProps to include register and validation rules
interface CommonTextFieldProps {
  id?: string;
  label: string;
  name: string; // Add name for React Hook Form registration
  control: Control<any>; // Add control for React Hook Form
  defaultValue?: string; // Default value for the field
  type?: string;
  placeholder?: string;
  fullWidth?: boolean;
  variant?: "filled" | "outlined" | "standard";
  className?: string;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  helperText?: string;
  sx?: object; // sx should be an object
  validationRules?: RegisterOptions; // Add validation rules
}

const TextField: React.FC<CommonTextFieldProps> = ({
  id,
  label,
  name,
  control,
  defaultValue = "",
  type = "text",
  placeholder = "",
  fullWidth = true,
  variant = "outlined",
  className = "",
  disabled = false,
  required = false,
  error = false,
  helperText = "",
  sx = {},
  validationRules, // Destructure validation rules
  ...additionalProps
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={validationRules}
      render={({ field }) => (
        <MuiTextField
          id={id}
          label={label}
          {...field}
          type={type}
          placeholder={placeholder}
          fullWidth={fullWidth}
          variant={variant}
          className={className}
          disabled={disabled}
          required={required}
          error={error}
          helperText={helperText}
          sx={sx} // Pass sx as an object
          {...additionalProps}
        />
      )}
    />
  );
};

export default TextField;