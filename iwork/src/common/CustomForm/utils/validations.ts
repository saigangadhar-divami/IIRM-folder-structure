export const validations = {
  required: (fieldName: string) => ({
    required: {
      value: true,
      message: `${fieldName} is required`,
    },
  }),

  email: {
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Invalid email address",
    },
  },

  mobile: {
    pattern: {
      value: /^[0-9]{10}$/,
      message: "Please enter valid 10-digit number",
    },
  },

  password: {
    minLength: {
      value: 8,
      message: "Password must be at least 8 characters",
    },
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      message: "Password must include letters, numbers and special characters",
    },
  },

  number: {
    pattern: {
      value: /^[0-9]+$/,
      message: "Please enter only numbers",
    },
  },
};
