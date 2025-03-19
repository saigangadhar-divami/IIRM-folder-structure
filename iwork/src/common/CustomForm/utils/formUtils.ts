export const requiredField = (message: string) => ({
  required: { value: true, message },
});

export const emailValidation = {
  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Enter a valid email address",
  },
};

export const passwordValidation = {
  minLength: {
    value: 6,
    message: "Password must be at least 6 characters long",
  },
  pattern: {
    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
    message:
      "Password must contain at least one letter, one number, and one special character",
  },
};

export const numberValidation = {
  pattern: {
    value: /^[0-9]+$/,
    message: "Only numbers are allowed",
  },
};

export const alphabetValidation = {
  pattern: {
    value: /^[A-Za-z]+$/,
    message: "Only alphabets are allowed",
  },
};
