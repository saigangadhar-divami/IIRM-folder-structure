import { ValidationRule } from "react-hook-form";

// src/utils/validation.ts

export const requiredField = (message: string): ValidationRule<boolean> => ({
  value: true,
  message,
});

export const emailValidation = {
  pattern: {
    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    message: "Invalid email address",
  },
};

export const numberValidation = {
  pattern: {
    value: /^[0-9]*$/,
    message: "Only numbers are allowed",
  },
};

export const minLength = (min: number) => ({
  minLength: {
    value: min,
    message: `Minimum length should be ${min}`,
  },
});
