import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button, Container, Typography, Box, Alert } from "@mui/material";
import styles from "./index.module.scss";
import TextField from "../../common/TestField";

interface SignUpFormData {
  username: string;
  password: string;
  confirmPassword: string;
}

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>();
  const [error, setError] = React.useState<string | null>(null);

  const onSubmit: SubmitHandler<SignUpFormData> = (data) => {
    setError(null);

    if (data.password !== data.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Check if the username already exists in localStorage
      const storedUsername = localStorage.getItem("username");
      if (storedUsername === data.username) {
        setError("You have already signed up. Please sign in.");
        return;
      }

      // Store credentials in localStorage
      localStorage.setItem("username", data.username);
      localStorage.setItem("password", data.password);

      console.log("Sign up successful", data);
      // Navigate to signIn page
      navigate("/signIn");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message || "Something went wrong. Please try again.");
      } else {
        setError("An unknown error occurred.");
      }
    }
  };

  // Define the form fields configuration
  const fields = [
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

  return (
    <Container maxWidth="sm" className={styles.container}>
      <Box mt={5}>
        <Typography variant="h4" component="h1" gutterBottom className={styles.typography}>
          Sign Up
        </Typography>

        {/* Display general error message */}
        {error && <Alert severity="error">{error}</Alert>}

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          {/* Render form fields dynamically */}
          {fields.map((field) => (
            <div key={field.id}>
              <TextField
                id={field.id}
                label={field.label}
                name={field.name}
                control={control}
                defaultValue=""
                type={field.type}
                fullWidth
                required={field.required}
                disabled={isSubmitting}
                aria-label={field.label}
                className={styles.textField}  // Apply the same style here
                error={!!errors[field.name]}
                helperText={errors[field.name]?.message}
                validationRules={field.validationRules}
              />
            </div>
          ))}
          
          {/* Submit button */}
          <Box mt={2} className={styles.buttonContainer}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={isSubmitting}
              className={`${styles.button} ${isSubmitting ? styles.disabled : styles.primary}`}
            >
              {isSubmitting ? "Signing Up..." : "Sign Up"}
            </Button>
          </Box>
        </form>

        {/* Sign In Button */}
        <Box mt={3} textAlign="center">
          <Typography variant="body1" gutterBottom>
            Already have an account?
          </Typography>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => navigate("/signIn")}
          >
            Sign In
          </Button>
        </Box>
      </Box>
      <p>My Component Heading</p>
    </Container>
  );
};

export default SignUp;