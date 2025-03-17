export const API_URL = "https://your-api-endpoint.com/auth/login";

export const FIELDS = [
  {
    id: "username",
    label: "Username",
    name: "username",
    type: "text",
    required: true,
    validationRules: { required: "Username is required" },
  },
  {
    id: "password",
    label: "Password",
    name: "password",
    type: "password",
    required: true,
    validationRules: {
      required: "Password is required",
      minLength: {
        value: 3,
        message: "Password must be at least 3 characters",
      },
    },
  },
];

export const ALERT_MESSAGES = {
  INVALID_CREDENTIALS: "Invalid credentials",
  REQUEST_TIMEOUT: "Request timed out. Please try again.",
  NO_SERVER_RESPONSE: "No response from the server. Please check your connection.",
  GENERIC_ERROR: "Something went wrong. Please try again.",
  UNKNOWN_ERROR: "An unknown error occurred.",
};

export const CONSOLE_MESSAGES = {
  LOGIN_SUCCESS: "Login successful",
};

export const BUTTON_TEXT = {
  TITLE: "Sign In",
  LOADING: "Signing In...",
  SUBMIT: "Sign In",
};