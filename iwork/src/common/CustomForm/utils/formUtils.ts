import { ValidationRule } from "react-hook-form";

// src/utils/validation.ts

export const requiredField = (message: string): ValidationRule<boolean> => ({
  value: true,
  message: message,
});

export const emailValidation = {
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: "Invalid email address",
  },
};

export const numberValidation = {
  pattern: {
    value: /^[0-9]+$/,
    message: "Please enter only numbers",
  },
};

export const phoneValidation = {
  pattern: {
    value: /^[0-9]{10}$/,
    message: "Please enter a valid 10-digit phone number",
  },
};

export const passwordValidation = {
  minLength: {
    value: 8,
    message: "Password must be at least 8 characters",
  },
  pattern: {
    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    message: "Password must contain letters, numbers and special characters",
  },
};

export const minLength = (min: number) => ({
  minLength: {
    value: min,
    message: `Minimum length should be ${min}`,
  },
});
