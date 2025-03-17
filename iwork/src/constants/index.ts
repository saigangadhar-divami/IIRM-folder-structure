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

export const SIGNUP_FIELDS = [
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
  {
    id: "confirmPassword",
    label: "Confirm Password",
    name: "confirmPassword",
    type: "password",
    required: true,
    validationRules: {
      required: "Confirm Password is required",
    },
  },
];

export const ALERT_MESSAGES = {
  INVALID_CREDENTIALS: "Invalid credentials",
  REQUEST_TIMEOUT: "Request timed out. Please try again.",
  NO_SERVER_RESPONSE: "No response from the server. Please check your connection.",
  GENERIC_ERROR: "Something went wrong. Please try again.",
  UNKNOWN_ERROR: "An unknown error occurred.",
  PASSWORD_MISMATCH: "Passwords do not match",
  ALREADY_SIGNED_UP: "You have already signed up. Please sign in.",
  SIGNUP_FAILED: "Sign-up failed. Please try again.",
};

export const CONSOLE_MESSAGES = {
  LOGIN_SUCCESS: "Login successful",
  SIGNUP_SUCCESS: "Sign up successful",
};

export const BUTTON_TEXT = {
  TITLE: "Sign In",
  LOADING: "Signing In...",
  SUBMIT: "Sign In",
  SIGNUP_TITLE: "Sign Up",
  SIGNING_UP: "Signing Up...",
  SIGN_UP: "Sign Up",
  ALREADY_HAVE_ACCOUNT: "Already have an account?",
  SIGN_IN: "Sign In",
};